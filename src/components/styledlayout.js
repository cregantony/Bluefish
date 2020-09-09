import React from "react"
import styled from "styled-components"



const StyledLayout = ({ children }) => {

const InnerLayout = styled.div `
margin: 0 16vw;

p {
    font-family: roboto;
    font-size:1.5rem;
    font-weight: 400;
    line-height:3rem;
}

h2 {
    font-size:2rem;
    color:#064980;
    font-style:italic;
    margin: 3rem 0;
}
`;


  return (
    <InnerLayout>
      {children}
    </InnerLayout>
  )
}
export default StyledLayout