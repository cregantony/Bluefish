import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import background from "../images/background.svg"
import Waves from "../components/waves"
import Asset2 from "../images/Asset2.svg"

const Masthead = styled.section `
display:flex;
height: calc(100vh - 95px);
align-items: center;
justify-content: center;
text-align:center;
background-image: url(${background});
background-repeat: repeat;
background-size: 700px;

@media (max-width: 1080px) {
  height: calc(90vh - 95px);
}

div {
  color: #064980;
}

`;

const CTA = styled.button `
font-family:-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
background:none;
color: #064980;
padding:10px 30px;
border-radius:10px;
border:solid #064980 4px;
font-weight:bold;
font-size:1rem;
`;

const CaseStudies = styled.section `
display:flex;
flex-direction:column;
margin:4rem;
align-items:center;
`;

const CaseStudy1 = styled.div `
width:100%;
height:400px;
background-image:url(${Asset2});
background-position: center;
background-repeat: no-repeat;
background-size:cover;
margin-bottom: 4rem;
margin-top:2rem;
`;

const RiseAbove = styled.h2 `
  z-index:2;
  `;




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead>
      <div>
        <h1>Standout With Bluefish Branding</h1>
        <h2>Premium Branding Identity Designs</h2>
        <CTA>Get Started</CTA>
      </div>
      <Waves/>
    </Masthead>
    
    <CaseStudies>
    <RiseAbove>Your Products are amazing, does your current brand design say the same?</RiseAbove>
    <br></br>
      <h1>CASE STUDIES</h1>
      <CaseStudy1>Title</CaseStudy1>
      <CaseStudy1>Title</CaseStudy1>
    </CaseStudies>
  </Layout>
  
)

export default IndexPage
