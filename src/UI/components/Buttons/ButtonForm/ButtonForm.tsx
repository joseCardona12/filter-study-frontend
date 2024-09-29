import styled from "styled-components";

const ButtonStyled = styled.button
    `
    background-color: blue;
    color:#fff;
    border-radius: 8px;
    padding:8px;
    border:none;
    `;

interface IButtonProps{
    text:string
    type: "submit" | "button"
}

export default function ButtonForm({text, type}:IButtonProps):React.ReactElement{
    return(
        <ButtonStyled type={type}>{text}</ButtonStyled>
    )
}