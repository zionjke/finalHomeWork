import React from "react";
import {connect} from "react-redux";
import {setStyle} from "../../redux/settingReducer";

const Styles = ({setStyle,style}) => {

    let onStyleChange = (e) => {
        setStyle(e.currentTarget.name)
    }

    return (
        <div>
            Cyan theme: <input onChange={onStyleChange} name="cyan_theme" type="radio" checked={style === "cyan_theme" } /> <br/>
            Orangered theme: <input onChange={onStyleChange} name="orangered_theme" type="radio" checked={style === "orangered_theme"}/> <br/>
            Blue theme: <input onChange={onStyleChange} name="blue_theme" type="radio" checked={style === "blue_theme" }/> <br/>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        style: state.settings.style
    }
}

export default connect(mapStateToProps, {setStyle})(Styles)