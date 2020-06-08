import React from 'react';
import './App.css';
import MyPage from "./components/MyPage/MyPage";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MyCounter from "./components/MyCounter/MyCounter";
import MyTodo from "./components/MyTodo/MyTodo";
import {Ripple} from "react-spinners-css";
import {loadingAC} from "./redux/loadingReducer";
import {connect} from "react-redux";


class App extends React.Component {


    componentDidMount() {
        setTimeout(() => {
            this.props.loading(false)
        }, 3000)
    }

    render = () => {
        return (
            <HashRouter>
                { this.props.loadingPage.loading ? <div className="loader">
                                            <Ripple color="red"/>
                                        </div>
                    : <div className="App">
                        <Navbar/>
                        <Route exact path="/monday" render={() => <MyPage/>}/>
                        <Route exact path="/counter" render={() => <MyCounter/>}/>
                        <Route exact path="/tuesday" render={() => <MyTodo/>}/>
                    </div>
                }
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loadingPage: state.loadingPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loading: (loading) => {
            const action = loadingAC(loading);
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
