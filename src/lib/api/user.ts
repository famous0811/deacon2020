import getClient from "./client";
import parseError from "./parseError";
import { getToken, setToken, setuseToken,getuserToken,delToken } from "../token";
import {toast } from 'react-toastify';
export interface Login {
    id: string;
    password: string;
}
export interface SignUp extends Login {
    name: string;
    email: string;
    age:string;
}
function User() {
    const Login = async ({ id, password }: Login) => {
        try {
            const data = await getClient().post('/auth', { id: id, pw: password });
            console.log(data.data);
            if (data.data.access_token) {
                setToken(data.data.access_token)
                // window.location.replace("/");
                toast.success("로그인 성공");
            }
            else
                toast.error("로그인 실패");
        }
        catch (err) {
            throw parseError(err);
        }

    }

    const signUp = ({ id,age, password, email, name }: SignUp) => {
        getClient().post('/register', { id: id,age:age, pw: password, email: email, name: name }).then(res => {
            console.log(res.data);
            return res.data;
        }).catch(err => {
            throw parseError(err);
        })
    }
    const Userget = async () => {
        try {
            const data = await getClient().get('/user');
            // alert("working");
            if (data.data.code !== 200)
            {
                // window.location.replace("/");
                delToken();
            }
            else
            {
                if(getuserToken()===null){
                    alert("test");
                    window.location.reload();
                }
                    
                setuseToken(data.data.id);
            }
            return data.data;
        }
        catch (err) {
            throw parseError(err);
        }
    }
    return { Login, signUp, Userget };
}
export default User;