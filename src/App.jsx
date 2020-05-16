import React from 'react';
import './App.css';
import MyPage from "./components/MyPage/MyPage";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MyCounter from "./components/MyCounter/MyCounter";
import MyTodo from "./components/MyTodo/MyTodo";

class App extends React.Component {

    render = () => {
        return (
            <HashRouter>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/monday" render={() => <MyPage/>}/>
                    <Route exact path="/counter" render={() => <MyCounter/>}/>
                    <Route exact path="/tuesday" render={() => <MyTodo/>}/>
                </div>
            </HashRouter>
        );
    }
}

export default App;
