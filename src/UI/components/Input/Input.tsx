"use client";
import { ChangeEvent } from "react";
import styled from "styled-components";

const InputStyled = styled.input
    `
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 6px 10px;
    color:#1d1d1d;
    `; 

interface InputProps{
    type:string,
    onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
    name:string,
    value:string
}
export default function Input({type, onChange, name, value}: InputProps):React.ReactElement{
    return(
        <InputStyled type={type} onChange={onChange} name={name} value={value} />
    )
}