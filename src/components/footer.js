import React from "react"
import styled from "styled-components"
import background from "../images/PromoBG.svg"
import logo from "../images/altLogo.svg"
import { Link } from "gatsby"


const Promo = styled.div `
display:flex;
align-items: center;
justify-content: space-around;
background-image: url(${background});
background-repeat: repeat;
padding:6rem 8rem;
border-top: 4px solid #064980;

    h2 {
        font-size: 3rem;
        max-width: 450px;
        color: #064980;
    }

`;

const PromoButton = styled.div `
display:flex;
justify-content:center;
`;

const Button = styled.button `
font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
background:none;
color: #064980;
padding:10px 30px;
border-radius:10px;
border:solid #064980 4px;
font-weight:bold;
font-size:1.2rem;
`;

const FooterContainer = styled.div `
background:#064980;
display:flex;
justify-content: space-between;
padding: 2rem 4rem;
flex-direction:column;
`;

const Footerlogo = styled.img`
max-width:300px;
`;

const Links =  styled.div `
display: flex;
justify-content: space-between;
width: 100%;
max-width: 30%;
align-items: center;

h3 {color:white;}
`;

const Lists = styled.ul `
color:white;
font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
font-weight:bold;
font-size:1.3rem;
line-height: 2rem;
h3 {color:white;}
`;

const Info = styled.div `
color:white;
background:#064980;
text-align:center;
text-decoration:none;
a {color:white}
padding-bottom:4rem;
`;

const Footer = () => (
    <div>
        <Promo>
            <h2>Your Package Design Solutions Are A Click Away</h2>
            <PromoButton><Button>Get Started</Button></PromoButton>          
        </Promo>
        
            <FooterContainer>
            <Link to="../"> <Footerlogo src={logo} alt="Bluefish Branding Group"/> </Link>
                <Links>
                    <ul>
                        <h3>Our Agency</h3>
                        <Lists><Link to="/about/"> About Us </Link></Lists>
                        <Lists><Link to="/case-studies/"> Case Studies </Link></Lists>
                        <Lists><Link to="/contact-bluefish-branding/"> Contact Us </Link></Lists>
                        <Lists><Link to="/resources/"> The Resource Vault </Link></Lists>
                        <Lists><Link to="/brand-identity-design/"> Whats Is A Brand</Link></Lists>
                    </ul>
                    <ul>
                        <h3>Services</h3>
                        <Lists><Link to="/brand-identity-design-process/"> Identity Design Process </Link></Lists>
                        <Lists><Link to="/identity-design-package-pricing/"> Pricing Packages </Link></Lists>
                        <Lists><Link to="/faq/"> FAQs</Link></Lists>
                    </ul>
                    <ul>
                        <h3>Title</h3>
                        <Lists>List1</Lists>
                        <Lists>List2</Lists>
                        <Lists>List3</Lists>
                    </ul>
                </Links>
            </FooterContainer>
        
        <Info>© Made In {new Date().getFullYear()}, Built with love</Info>
    </div>
)

export default Footer