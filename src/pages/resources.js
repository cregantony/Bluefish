import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/masthead"
import StyledLayout from "../components/styledlayout"

const Resources = () => (
  <Layout>
    <SEO title="About Bluefish" />
    <Masthead Titletext="The BlueFish Resource Vault"/>
    <StyledLayout>
      <h1>The Resource Vault - Because we're all about sharing the secret sauce with our small businesses.</h1>
      <p>Explore by these anchor links
        MOST RECENT 
        SMALL BUSINESS TIPS
        PRODUCT PHOTOGRAPHY
        COMPANY NAMING
        VISUAL BRAND IDENTITY
        FUZE FREEBIES
        CUSTOM WEB DESIGN
        </p>
      <Link to="/">Go back to the homepage</Link>
    </StyledLayout>
  </Layout>
)

export default Resources
