import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Resources = () => (
  <Layout>
    <SEO title="About Bluefish" />
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
  </Layout>
)

export default Resources
