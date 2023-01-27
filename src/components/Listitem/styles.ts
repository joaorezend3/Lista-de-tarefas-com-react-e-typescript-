import styled from "styled-components";
type containerProps = {
    done: boolean;
};
export const container = styled.div(({ done }: containerProps) => (`
display: flex;
background-color:#2B3A55;
padding:10px;
border-radius:10px;
aling-items: center;
margin:10px 0 10px;
input{
cursor:pointer;
width:25px;
height:25px;
margin:0 5px 0 0;
}
label{
margin-left: 15px;
color:${done ? 'red' : 'white'};
text-decoration:${done ? 'line-through ' : 'initial'};
font-size:20px;
marin-right:${done ? '0px' : '90px'};

}
label:hover{
    text-decoration:${done ? 'initial ' : 'line-through'};
}
input:hover ~ label  {
color:#FF731D ;
}

`
));