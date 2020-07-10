import React from 'react';
import './App.css';
import MyPage from "./components/MyPage/MyPage";
import {HashRouter, Route} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MyCounter from "./components/MyCounter/MyCounter";
import {connect} from "react-redux";
import Styles from "./components/Wednesday_Projects/Styles";
import {setLoading} from "./redux/settingReducer";
import {AppStateType} from "./redux/store";
import loader from './assets/img/giphy.gif'



type MapStatePropsType = {
    loading:boolean
}

type MapDispatchPropsType = {
    setLoading:(loading:boolean)=>void
}

class App extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        setTimeout(() => {
            this.props.setLoading(false)
        }, 1500)
    }

    render = () => {
        return (
            <HashRouter>
                { this.props.loading ? <div className="loader">
                                            <img src={loader} alt="Loader Gif"/>
                                        </div>
                    : <div className="App">
                        <Navbar/>
                        <Route exact path="/monday" render={() => <MyPage/>}/>
                        <Route exact path="/counter" render={() => <MyCounter/>}/>
                        <Route exact path="/wednesday" render={() => <Styles/>}/>
                    </div>
                }
            </HashRouter>
        );
    }
}

const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        loading: state.settings.loading
    }
};



export default connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>(mapStateToProps,{setLoading})(App);
