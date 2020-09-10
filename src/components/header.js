import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"

const Container = styled.header `
color: #064980;
position:fixed;
z-index:2;
width:100%;
display:flex;
height: 150px;
background:white; border-bottom:4px solid #064980;
@media (max-width: 1080px) {
  display:none;
}
`;

const LeftWrapper = styled.div `
padding: .6rem 1.5875rem;
display: flex;
align-items: center;
flex: 1 1 auto;
overflow:hidden;
`;

const Logo = styled.img `
width:250px;
`;
const ListItem = styled.li `
position: relative;
padding: .6rem;
list-style-type: none;
align-items: center;
text-align:center;
display:flex;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight:bold;
font-size:1.3rem;
cursor: pointer;
a {
  text-decoration:none;
  color:#064980;
}`;

const ProjectButton= styled.div `
padding: 0 40px;
background:#064980;
display:flex;
align-items:center;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight:bold;
text-align: center;
font-size:1.3rem;
color:white;
`;

const PhoneButton= styled.div `
padding: 0 40px;
display:flex;
align-items:center;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight:bold;
font-size:1.3rem;
text-align: center;
color:#064980;
`;


const HeaderMenu = styled.ul `
display:flex;
height:100%; 
width: 100%;
margin-left:2rem;
overflow:hidden;
`;

const DD = styled.div `
padding: .6rem 20px;
list-style-type: none;
align-items: center;
text-align:center;
display:flex;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight:bold;
font-size:1.3rem;
li {padding: 0}
`;

const DDMenu = styled.div `
list-style-type: none;
align-items: center;
text-align:center;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight:bold;
font-size:1.3rem;
position: absolute;
color:white;
top:100px;
background:#064980 ;
`;

const DDLi = styled.li `
position: relative;
padding: .1rem 10px;
list-style-type: none;
align-items: center;
text-align:center;
display:flex;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight:bold;
font-size:1.0rem;
a {
  text-decoration:none;
  color:White;
  margin: 6px 12px;
}`;



class Header extends React.Component {

  constructor() {
    super();

    this.state = {showMenu: false,}
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMenu);
    });
  }
  

  render() {

  return (
  <Container>
    <LeftWrapper>      
        <Link to="/"> <Logo src={logo} alt= "Bluefish Branding Group"/> </Link>
        <HeaderMenu>
          <ListItem> <Link to="/about/"> About </Link>  </ListItem> 
          <DD>       
            <ListItem onClick={this.showMenu}>Identity Design → </ListItem>
            {
          this.state.showMenu
            ? (
            <DDMenu> 
              <DDLi> <Link  to="/brand-identity-design/"> Identity Design </Link></DDLi>
              <DDLi> <Link to="/brand-identity-design-process/"> Process </Link></DDLi>
              <DDLi> <Link to="/identity-design-package-pricing/"> Pricing</Link></DDLi>
              <DDLi> <Link to="/faq/"> FAQs</Link></DDLi>
              <DDLi> <Link to="/case-studies/"> Case Studies </Link></DDLi>
              
            </DDMenu>
            )
            : (
              null
            )
        }
          </DD>
          <ListItem> <Link to="/case-studies/"> Case Studies </Link></ListItem>
          <ListItem> <Link to="/resources/"> Resources </Link></ListItem>
        </HeaderMenu>      
    </LeftWrapper>
    <ProjectButton>Start A Project</ProjectButton>
    <PhoneButton>1(718)704-4026</PhoneButton>
  </Container>
  )

}
}
export default Header
