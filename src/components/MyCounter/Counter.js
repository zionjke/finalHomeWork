import React from 'react';
import Button from "./Button";
import styles from './Counter.module.css'


class Counter extends React.Component {

    render = () => {

        let spanClass = this.props.state.counter === this.props.state.maxValue ||
                        this.props.state.counter === "error" ? "red_value" : "";

        let incrementButtonDisabled = this.props.state.counter === this.props.state.maxValue ||
                                      this.props.state.counter === "press set" ||
                                      this.props.state.counter === "error"

        let resetButtonDisabled = this.props.state.counter === this.props.state.startValue ||
                                  this.props.state.counter === "press set" ||
                                  this.props.state.counter === "error"


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
