import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from "pages/login";
import FileComplaint from "pages/fileComplaint";
import NavBar from "./components/nav";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar/>
            </BrowserRouter>
        );
    }
}


ReactDOM.render(<App/>, document.getElementById('root'));
