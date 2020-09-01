import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact Bluefish" />
    <h1>Contact Bluefish Branding Group</h1>
    <h2>Client Project Inquiries</h2>
    <p>INQUIRY FORM</p>
    <p>Name *
First and Last
Email *
Phone
What is the name of your organization, and a brief description?
What size is it?
 1-19 employees
 20-199 employees
 200-999 employees
 1000-4999 employees
 5000+ employees
What is the organization’s website, if there is one?
What is your role?
What is the scope of your project?
Logo Package or Standard Package from my pricing page or other items you have in mind.
When will you need the work finished?
Is that deadline firm or flexible?
 Firm
 Flexible
Why are you considering Jessica Jones for this project?</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Contact
