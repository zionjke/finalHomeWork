import React from 'react';
import './App.css';
import MyPage from "./components/MyPage/MyPage";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MyCounter from "./components/MyCounter/MyCounter";
import {Ripple} from "react-spinners-css";
import {connect} from "react-redux";
import Styles from "./components/Wednesday_Projects/Styles";
import {setLoading} from "./redux/settingReducer";



class App extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.setLoading(false)
        }, 1500)
    }

    render = () => {
        return (
            <HashRouter>
                { this.props.loading ? <div className="loader">
                                            <Ripple color="red"/>
                                        </div>
                    : <div className="App">
                        <Navbar/>
                        <Route exact path="/monday" render={() => <MyPage/>}/>
                        <Route exact path="/counter" render={() => <MyCounter/>}/>
                        <Route exact path="/wednesday" render={() => <Styles/>}/>
                        {/*<Route exact path="/tuesday" render={() => <TodoApp/>}/>*/}
                    </div>
                }
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.settings.loading
    }
};



export default connect(mapStateToProps,{setLoading})(App);
