import React from 'react';
import './MyCounter.css';
import Counter from "./Counter";
import Settings from "./Settings";
import {restoreState, saveState} from "../../localStorage";

class MyCounter extends React.Component {

    state = {
        startValue: 0,
        maxValue:5,
        counter: 0,
        setButtonDisabled: true,
    };

    saveCounter = () => {
        saveState("counter-state",this.state)
    }

    restoreCounter = () => {
        let state =  restoreState("counter-state",this.state)
        this.setState(state)
    }

    incrementHandler = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    resetHandler = () => {
        this.setState({
            counter: this.state.startValue
        })
    };

    changeMaxValue = (newMaxValue) => {
        if( newMaxValue < 0 || newMaxValue <= this.state.startValue || this.state.startValue < 0 ) {
            this.setState({
                counter: "error",
                maxValue: Number(newMaxValue),
                setButtonDisabled: true,
            },() => { this.saveCounter()})
        } else {
            this.setState({
                counter: "press set",
                maxValue: Number(newMaxValue),
                setButtonDisabled: false,
            },() => { this.saveCounter()})
        }
    };

    changeStartValue = (newStartValue) => {
        if(newStartValue < 0 || newStartValue >= this.state.maxValue ) {
            this.setState({
                counter: "error",
                startValue: Number(newStartValue),
                setButtonDisabled: true,
            },() => { this.saveCounter()})
        } else {
            this.setState({
                counter: "press set",
                startValue: Number(newStartValue),
                setButtonDisabled: false,
            },() => { this.saveCounter()})
        }
    };

    setNewValue = () => {
        this.setState({
            counter: this.state.startValue,
            setButtonDisabled: true,
        },() => { this.saveCounter()})
    };

    componentDidMount() {
        this.restoreCounter()
    }

    render = () => {

        return (
            <div className="mycounter">
                <Settings changeMaxValue={this.changeMaxValue}
                          changeStartValue={this.changeStartValue}
                          setNewValue={this.setNewValue}
                          state={this.state}/>
                <Counter state={this.state}
                         incrementHandler={this.incrementHandler}
                         resetHandler={this.resetHandler}/>
            </div>
        );
    }
}

export default MyCounter;