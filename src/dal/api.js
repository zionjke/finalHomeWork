import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/auth/test'
})

export const api = {
    responce(success) {
        return instance.post('',{success:success}).then(responce => responce.data)
    },


}

export const tryCatch = async ( f ) => {
    try {
        const responce = await f();
        console.log('answer: ', responce.data);
        return responce;
    } catch (e) {
        console.log('error: ', {...e});
        return 'error';
    }
}