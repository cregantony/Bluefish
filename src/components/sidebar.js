import React from "react"
import { slide as BurgerMenu } from 'react-burger-menu'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledBurgerMenu = styled.div`
    .bm-item {
        text-align:center;  
        display: inline-block;
        text-decoration: none;
        margin-bottom: 5vh;
        color: #064980;
        transition: color 0.1s;
        font-size: .8em;
        padding: .5em 1.0875rem;
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
        font-weight: bold;
        text-rendering: optimizeLegibility;
        white-space:nowrap;
        }
    .bm-item:hover {
        color: white;
    }
    .bm-burger-button {
        position: fixed;
        width: 30px;
        height: 25px;
        right: 4vw;
        top: 4vh;
        color:#064980;
        display:none;
        @media (max-width: 1080px) {
            display:block;
          }
    }
    .bm-burger-bars {
        background: #064980;
    }
    .bm-cross-button {
        height: 30px;
        width: 15px;
    }
    .bm-cross {
        background: #bdc3c7;
    }
    .bm-menu {
        background: rgba(255, 255, 255, 1);
        padding: 2.5em 1.2em 0;
        font-size: 2em;
    }
    .bm-morph-shape {
        fill: #373a47;
    }
    .bm-item-list {
        color: #b8b7ad;
    }

    .bm-overlay {
        background: rgba(255, 255, 255, 1);
    }    
    `

    const ListItem = styled.li `
position: relative;
padding: .6rem 20px;
list-style-type: none;
align-items: center;
text-align:center;
display:flex;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight:bold;
font-size:1.3rem;
a {
  text-decoration:none;
  color:#064980;
}`;

const Sidebar = () => (
    <StyledBurgerMenu>
        <BurgerMenu right width='100%'>
        <Link to='/'>Home</Link>
        <ListItem> <Link to="/about/"> About </Link>  </ListItem> 
          <ListItem> <Link to="/brand-identity-design/"> Identity Design </Link></ListItem>
          <ListItem> <Link to="/brand-identity-design-process/"> Process </Link></ListItem>
              <ListItem> <Link to="/identity-design-package-pricing/"> Pricing</Link></ListItem>
              <ListItem> <Link to="/faq/"> FAQs</Link></ListItem>
          <ListItem> <Link to="/case-studies/"> Case Studies </Link></ListItem>
          <ListItem> <Link to="/resources/"> Resources </Link></ListItem>
        </BurgerMenu>
    </StyledBurgerMenu>
)

export default Sidebar
