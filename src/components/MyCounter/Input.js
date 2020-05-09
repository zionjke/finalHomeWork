import React from 'react';

class Input extends React.Component {

    render = () => {

        return (
            <input className={this.props.className}
                   type={this.props.type}
                   value={this.props.value}
                   onChange={this.props.onChange}/>
        );
    }
};

export default Input;
