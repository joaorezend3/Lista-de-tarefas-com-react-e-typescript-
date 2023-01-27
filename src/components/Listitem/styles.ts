import { type } from "os";
import styled from "styled-components";
type containerProps ={
    done: boolean;
};
export const container = styled.div(({ done}: containerProps)=>(
`
display: flex;
background-color:#20212c;
padding:10px;
border-radius:10px;
aling-items: center;
margin:10px 0 10px;

input{
    width:25px;
    height:25px;
    margin:0 5px 0 0;
}
label{
    color:white;
    text-decoration:${done ? 'line-through' : 'initial'};
}` 
));