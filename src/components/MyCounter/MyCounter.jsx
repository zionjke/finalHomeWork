import React from 'react';
import './MyCounter.css';
import Counter from "./Counter";
import Settings from "./Settings";
import {restoreState, saveState} from "../../localStorage";
import {connect} from "react-redux";
import {incrementAC, maxValueAC, resetAC, setValueAC, startValueAC} from "../../redux/counterReducer";

class MyCounter extends React.Component {



    incrementHandler = () => {
        this.props.increment()
    };

    resetHandler = () => {
        this.props.reset()
    };

    changeMaxValue = (newMaxValue) => {
        this.props.maxValue(newMaxValue)
    };

    changeStartValue = (newStartValue) => {
        this.props.startValue(newStartValue)

    };

    setNewValue = () => {
        this.props.newValue()
    };

    componentDidMount() {

    }

    render = () => {

        return (
            <div className="mycounter">
                <Settings changeMaxValue={this.changeMaxValue}
                          changeStartValue={this.changeStartValue}
                          setNewValue={this.setNewValue}
                          state={this.props.state}/>
                <Counter state={this.props.state}
                         incrementHandler={this.incrementHandler}
                         resetHandler={this.resetHandler}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            const action = incrementAC();
            dispatch(action)
        },
        reset: () => {
            const action = resetAC()
            dispatch(action)
        },
        maxValue: (newMaxValue) => {
            const action = maxValueAC(newMaxValue);
            dispatch(action)
        },
        startValue: (newStartValue) => {
            const action = startValueAC(newStartValue);
            dispatch(action)
        },
        newValue: () => {
            const action = setValueAC();
            dispatch(action)
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MyCounter)