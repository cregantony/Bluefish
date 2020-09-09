import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/masthead"
import StyledLayout from "../components/styledlayout"

const About = () => (
  <Layout>
    <SEO title="About Bluefish" />
    <Masthead Titletext="About Bluefish"/>
    <StyledLayout>
        <h2>We are a remote boutique agency</h2>
        <p>
          Our boutique agency combines the best talent from all over the world to deliver BIG agency results for small businesses. We skip the traditional agency office space in favor of traveling and working from connected locations around the world, which allows us to keep a finger on the pulse of branding and business strategies all over the globe. Our industry (and yours) is constantly evolving. So instead of letting the new creative concepts and inspiration come to us, we go to them. And the creative inspiration? Off. The. Charts
        </p>
        <h2>Our Name. Our Story</h2>
        <p>
          Bluefish [bloo - fish] noun.
        </p>
    </StyledLayout>

  </Layout>
)

export default About
