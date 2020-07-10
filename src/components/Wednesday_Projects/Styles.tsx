import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {sendRequest, setAccess, setStyle} from "../../redux/settingReducer";
import {AppStateType} from "../../redux/store";
import loader from './../../assets/img/giphy.gif'

type MapStatePropsType = {
    style:string
    inProgress:boolean
    success:boolean
}

type MapDispatchPropsType = {
    setStyle:(style:string)=>void
    setAccess:(success:boolean)=>void
    sendRequest:(success:boolean)=>void
}


const Styles:React.FC<MapStatePropsType & MapDispatchPropsType> = ({setStyle,style,sendRequest,inProgress,setAccess,success}) => {

    const onStyleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStyle(e.currentTarget.name)
    };

    const onIsChecked = (e:ChangeEvent<HTMLInputElement>) => {
        setAccess(e.currentTarget.checked)
    };


    const onClickResponse = () => {
        sendRequest(success)
    };


    return (
        <div>
            {inProgress && <div className="loader"><img src={loader} alt=""/></div>}
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


const mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        style: state.settings.style,
        inProgress: state.settings.inProgress,
        success: state.settings.success
    }
};

export default connect<MapStatePropsType,MapDispatchPropsType,{},AppStateType>(mapStateToProps, {setStyle,setAccess,sendRequest})(Styles)