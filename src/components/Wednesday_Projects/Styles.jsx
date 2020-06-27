import React, {useState} from "react";
import {connect} from "react-redux";
import {sendRequest, setAccess, setStyle} from "../../redux/settingReducer";
import {Ripple} from "react-spinners-css";


const Styles = ({setStyle,style,sendRequest,inProgress,setAccess,success}) => {

    const onStyleChange = (e) => {
        setStyle(e.currentTarget.name)
    }

    const onIsChecked = (e) => {
        setAccess(e.currentTarget.checked)
    }


    const onClickResponse = () => {
        sendRequest(success)
        // setIsLoading(true)
        // api.responce(isChecked)
        //     .then( () => alert(`Запрос отправлен`))
        //     .catch(e => {
        //         alert(`Ошибка при отправке запроса: ${e}`)
        //     })
        //     .finally(() => {
        //         setIsLoading(false)
        //     })

    }


    return (
        <div>
            {inProgress && <div className="loader"><Ripple/></div>}
            Cyan theme: <input onChange={onStyleChange} name="cyan_theme" type="radio" checked={style === "cyan_theme" } /> <br/>
            Orangered theme: <input onChange={onStyleChange} name="orangered_theme" type="radio" checked={style === "orangered_theme"}/> <br/>
            Blue theme: <input onChange={onStyleChange} name="blue_theme" type="radio" checked={style === "blue_theme" }/> <br/>
            <input type="checkbox" onChange={onIsChecked} checked={success}/>
            <button disabled={inProgress} onClick={onClickResponse}>
                {inProgress ?  'Отправляю запрос...' : 'Отправить запрос'}
            </button>
        </div>
        
    )
};


const mapStateToProps = (state) => {
    return {
        style: state.settings.style,
        inProgress: state.settings.inProgress,
        success: state.settings.success
    }
}

export default connect(mapStateToProps, {setStyle,setAccess,sendRequest})(Styles)