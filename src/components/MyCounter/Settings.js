import React from 'react';
import styles from './Settings.module.css'
import Input from "./Input";
import Button from "./Button";


class Settings extends React.Component {


    maxValue = (e) => {
        this.props.changeMaxValue(e.currentTarget.valueAsNumber)
    };

    minValue = (e) => {
     this.props.changeStartValue(e.currentTarget.valueAsNumber)
    };


    render = () => {

        let classForInput = this.props.state.maxValue === this.props.state.startValue ||
                             this.props.state.maxValue < 0 ||
                             this.props.state.startValue > this.props.state.maxValue ||
                             this.props.state.startValue < 0 ? styles.errorInput : styles.input


        return (
            <div className={styles.settings}>
                <div className={styles.inputsBlock}>
                    <div className={styles.inputBlock}>
                        <span className={styles.inputName}>max value: </span>
                        <Input className={classForInput}
                               type="number"
                               value={this.props.state.maxValue}
                               onChange={this.maxValue}/>
                    </div>
                    <div className={styles.inputBlock}>
                        <span className={styles.inputName}>start value: </span>
                        <Input className={classForInput}
                               type="number"
                               value={this.props.state.startValue}
                               onChange={this.minValue}/>
                    </div>
                </div>
                <div className={styles.buttonBlock}>
                    <Button className={styles.button}
                            onClick={this.props.setNewValue}
                            buttonName="Set"
                            disabled={this.props.state.setButtonDisabled}/>
                </div>

            </div>

        );
    }
};

export default Settings;
