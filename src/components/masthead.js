import React from "react"
import styled from "styled-components"

const Masthsection = styled.h1 `
background: #B0DBFF;
font-size: 3rem;
padding 5vw;
text-align: center;
color: #064980;
margin:0;
`;

const Masthead = (props) => (

    <div>
        <Masthsection>{props.Titletext}</Masthsection>
    </div>
)

export default Masthead