"use client";
import GroupInput from "../GroupInput/GroupInput";
import ButtonForm from "../Buttons/ButtonForm/ButtonForm";
import { ChangeEvent, FormEvent, useState } from "react";
import { IUser } from "@/interfaces/userInterface";
import AuthService from "@/services/authService";
import Cookie from "js-cookie"

export default function FormLogin():React.ReactElement{

    const initialFormData:IUser = {
        name:"",
        email:"",
        password:""
    }
    const [formData, setFormData] = useState<IUser>(initialFormData);

    const handleChange = (e:ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    }
    const handleSubmit = async(e:FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const userLogin = await AuthService.login(formData);
        if(!userLogin || "message" in userLogin){
            console.log(userLogin);
            return;
        }
        const {token} = userLogin;
        Cookie.set("token", token);
    }
    return(
        <form onSubmit={(e)=>handleSubmit(e)}>
            <h2>Login</h2>
            <GroupInput
            type="email"
            onChange={handleChange}
            name="email"
            value={formData.email}
            label="Email:"
            />

            <GroupInput
            type="password"
            onChange={handleChange}
            name="password"
            value={formData.password}
            label="Password:"
            />
            <ButtonForm
            type="submit"
            text="Register"
            />
        </form>
    )
}