// React
import React from 'react';
import ReactDOM from 'react-dom';
//React Router Dom
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import rootStore from './stores/root-store';
// Material UI 
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// Page
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
// CSS Custom 
import './assets/css/index.css';

//Config Materail UI Color 
const theme = createMuiTheme({
    typography: {
        useNextVariants: true, 
        fontSize: 14, 
    },
    palette: {
        primary: {
            light: '#515b5f',
            main: '#263238',
            dark: '#1a2327', 
            contrastText: '#fff'
        }, 
        secondary:{
            light: '#f6685e',
            main: '#f44336',
            dark: '#aa2e25', 
            contrastText: '#fff'
        },
        background: {
            default: '#eee'
        }
    }, 
    overrides: {
        MuiInputLabel: { 
            root: { 
                fontSize: 14, 
            },
        },
        MuiInput: { 
            root: { 
                fontSize: 14, 
            },
        },
        MuiFormLabel:{
            root: {
                fontSize: 14, 
            },
        },
        MuiFormControl:{
            marginNormal:{
                marginTop: 8
            }, 
        },
        MuiMenuItem: {
            root: {
                fontSize: 14, 
                padding: ".2em"
            }, 
        }, 
        MuiButton: {
            root: {
                fontSize: 14, 
            }, 
        }, 
        MuiFormHelperText: {
            root: { 
                marginTop: 2
            }
        }, 
        MuiSvgIcon:{
            fontSizeSmall:{
                fontSize:18
            }
        }, 
        MuiTypography: {
            subtitle1: {
                fontSize:14
            }
        }, 
        MuiTableRow:{
            head:{
                height:12
            },
            root:{
                height:12
            }
        }, 
    }, 
    
});



ReactDOM.render(
    <Provider store={rootStore}>
        <Router>
            <React.Fragment>
                <CssBaseline />
                {/* The rest of your application */}
                <MuiThemeProvider theme={theme}>
                    <App />
                </MuiThemeProvider>
            </React.Fragment>
        </Router>
    </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();