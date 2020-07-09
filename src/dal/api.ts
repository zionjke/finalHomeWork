import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
});

type ResponseType = {
    errorText: string
    info: string
    yourBody: boolean
}

export const api = {
    responce(success:boolean) {
        return instance.post<ResponseType>('',{success:success})
    }};

