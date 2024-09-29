import styled from "styled-components";
import Input from "../Input/Input";
import { ChangeEvent } from "react";

const WrapperGroupInput = styled.div
`

`;

interface IGroupProps{
    type:string,
    onChange: (e:ChangeEvent<HTMLInputElement>) =>void,
    name:string,
    value:string
    label:string
}


export default function GroupInput({type,onChange,name,value, label}: IGroupProps):React.ReactElement{
    return (
        <WrapperGroupInput>
            <label htmlFor="">{label}</label>
            <Input
            type={type}
            onChange={onChange}
            name={name}
            value={value}
            />
        </WrapperGroupInput>
    )
}