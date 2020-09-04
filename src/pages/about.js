import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import Masthead from "../components/masthead"



const PageTitle = styled.h2 `
font-size:2rem;
color:#064980;
font-style:italic;
margin: 3rem 0;
`;

const BodyParagraph = styled.p `
font-family: roboto;

font-size:1.5rem;
font-weight: 400;
line-height:3rem;
`;

const MainWrap = styled.div `
margin: 0 16vw;
`;


const About = () => (
  <Layout>
    <SEO title="About Bluefish" />
    <Masthead Titletext="About Bluefish"/>
    <MainWrap>
      <PageTitle>We are a remote boutique agency</PageTitle>
      <BodyParagraph>
        Our boutique agency combines the best talent from all over the world to deliver BIG agency results for small businesses. We skip the traditional agency office space in favor of traveling and working from connected locations around the world, which allows us to keep a finger on the pulse of branding and business strategies all over the globe. Our industry (and yours) is constantly evolving. So instead of letting the new creative concepts and inspiration come to us, we go to them. And the creative inspiration? Off. The. Charts
      </BodyParagraph>
      <PageTitle>Our Name. Our Story</PageTitle>
      <BodyParagraph>
        Bluefish [bloo - fish] noun.
      </BodyParagraph>
    </MainWrap>
  </Layout>
)

export default About
