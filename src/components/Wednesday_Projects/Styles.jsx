import React, {useState} from "react";
import {connect} from "react-redux";
import {setStyle} from "../../redux/settingReducer";
import {api, tryCatch} from "../../dal/api";
import {Ripple} from "react-spinners-css";



const Styles = ({setStyle,style}) => {
    const [isChecked,setIsChecked] = useState(false);
    const [isLoading, setIsLoading] = useState('');

    const onStyleChange = (e) => {
        setStyle(e.currentTarget.name)
    }

    const onIsChecked = () => {
        setIsChecked(!isChecked)
    }

    const onClickResponse = () => {
        setIsLoading(true)
        api.responce(isChecked)
            .then(responce => console.log(responce))
            .catch(e => {
                alert('Ошибка при отправке запроса!')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }



    return (
        <div>
            Cyan theme: <input onChange={onStyleChange} name="cyan_theme" type="radio" checked={style === "cyan_theme" } /> <br/>
            Orangered theme: <input onChange={onStyleChange} name="orangered_theme" type="radio" checked={style === "orangered_theme"}/> <br/>
            Blue theme: <input onChange={onStyleChange} name="blue_theme" type="radio" checked={style === "blue_theme" }/> <br/>
            <input type="checkbox" onChange={onIsChecked} checked={isChecked}/>
            <button disabled={isLoading} onClick={onClickResponse}>
                {isLoading ? 'Отправляю запрос...' : 'Отправить запрос'}
            </button>
        </div>
        
    )
};


const mapStateToProps = (state) => {
    return {
        style: state.settings.style
    }
}

export default connect(mapStateToProps, {setStyle})(Styles)