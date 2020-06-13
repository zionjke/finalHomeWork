import React from 'react';
import Button from "./Button";
import styles from './Counter.module.css'


class Counter extends React.Component {

    render = () => {

        let spanClass = this.props.state.counter === this.props.state.maxValue ||
                        this.props.state.counter === this.props.state.errorCounterValue ? "red_value" : "";

        let incrementButtonDisabled = this.props.state.counter === this.props.state.maxValue ||
                                      this.props.state.counter === this.props.state.setCounterValue ||
                                      this.props.state.counter === this.props.state.errorCounterValue

        let resetButtonDisabled = this.props.state.counter === this.props.state.startValue ||
                                  this.props.state.counter === this.props.state.setCounterValue ||
                                  this.props.state.counter === this.props.state.errorCounterValue


        return (
            <div className={styles.counterBlock}>
                <div className={styles.counter}>
            <span className={spanClass}>
                {this.props.state.counter}
            </span>
                </div>
                <div className={styles.buttons}>
                    <Button buttonName="+"
                            onClick={this.props.incrementHandler}
                            disabled={incrementButtonDisabled}
                            className={styles.button}/>
                    <Button buttonName="R"
                            onClick={this.props.resetHandler}
                            disabled={resetButtonDisabled}
                            className={styles.button}/>
                </div>
            </div>

        );
    }
};

export default Counter;
