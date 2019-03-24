import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// Effect
import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';

const styles = theme => ({
    page:{
        position: "relative",
        minHeight:"100vh",
        width:"100%"
    },
    sliderImage: {
        minHeight:"100vh",
        width: "100%", 
    }, 
    
    slider:{
        position:"absolute",
        top:0, 
        height: "350px",
        width: "100%", 
    },
    copyright:{
        position:"absolute",
        bottom:0, 
        zIndex:"1500"
    }
});

class Login extends Component {

    state = {
        items: [
            {
                url:"https://k35.kn3.net/taringa/6/6/4/5/0/5/5/elio4/2D8.jpg?5448",
                alt:"image"
            },
            {
                url:"https://i.pinimg.com/originals/8a/cd/c3/8acdc3a5ce4a4bd31fe327524af4be3c.jpg",
                alt:"image"
            },
            {
                url:"https://www.wallpaperup.com/uploads/wallpapers/2015/11/02/827783/1f0c5c27dc7f8431a33da35e57738e5c-700.jpg",
                alt:"image"
            }
        ], 
    }
    
    render() {
        let {classes } = this.props;
        const CarouselUI = ({ children }) => <div style={{
            position: "absolute",
            top:0, 
            right:0, 
            left:0,
            overflow: "hidden",
            minHeight:"100vh",
            width:"100%"
        }}>
            {children}
        </div>;
        
        const Carousel = makeCarousel(CarouselUI);
        return (
            <Slide >
                <div className={classes.page}>
                    <Carousel defaultWait={3500} className={classNames(classes.slider)}>
                        {
                            this.state.items.map((item, index)=> {
                                return (
                                    <Slide key={index} >
                                        <li>
                                            <Fade>
                                                <img className={classes.sliderImage} src={item.url} alt={item.alt} /> 
                                            </Fade>
                                        </li>
                                    </Slide>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </Slide>
        )
    }
}
export default (withStyles(styles)(Login));