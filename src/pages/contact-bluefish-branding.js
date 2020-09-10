import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/masthead"
import StyledLayout from "../components/styledlayout"

const Label = styled.label `
width:100%;
`;

const Input = styled.input `
width:100%;
height:50px;
font-size:1rem;
`;

const TextArea= styled.textarea `
width:100%;
height:150px;
font-size:1.2rem;
`;

const Span = styled.span `
color:#aaaaaa;
font-style:italic;
font-size:1rem;
`;

const Contact = () => (
  <Layout>
    <Masthead Titletext="Contact Bluefish"/>
    <StyledLayout>
        <SEO title="Contact Bluefish" />
        <h2>Client Project Inquiries</h2>
        <p>Send me a quick email, or better yet, use the form below to tell me about your project. I try to respond within one business day. (If you’re specifically interested in a brand identity or logo, you might like to view my process and pricing.)</p>
        
        <form name="contact" method="POST" data-netlify="true">
          <p><Label>Name: <br/><Input type="text" name="name" /></Label> </p>
          <p><Label>Email: <br/><Input type="email" name="email" /></Label></p>
          <p><Label>Phone: <br/><Input type="phone" name="phone" /></Label></p>
          <p><Label>What is the name of your organization, and a brief description? <br/> <TextArea name="message"></TextArea></Label></p>
          <p> What size is it?: <br/>
            <input type="radio" name="size" />  1-19 employees <br/>
            <input type="radio" name="size" />  20-199 employees <br/>
            <input type="radio" name="size" />  200-999 employees <br/>
            <input type="radio" name="size" />  1000-4999 employees <br/>
            <input type="radio" name="size" />  5000+ employees
          </p>
          <p><Label>What is the organization’s website, if there is one?<br/><Input type="text" name="website" /></Label> </p>
          <p><Label>What is your role?<br/><Input type="text" name="role" /></Label> </p>
          <p><Label>What is the scope of your project?<br/><Input type="text" name="price" /></Label> </p>
          <p><Label>When will you need the work finished?<br/><Input type="text" name="website" /></Label> </p>
          <p> Is that deadline firm or flexible? <br/>
            <input type="radio" name="deadline" />  Firm <br/>
            <input type="radio" name="deadline" />  Flexible <br/>
           </p>
          <p><Label>Why are you considering Bluefish Branding Group for this project?<br/>
            <Span>Referred by someone you trust, design style, specific expertise, budget, etc.</Span>
            <TextArea name="why"></TextArea></Label> </p>
         
          
          
          
          <p><button type="submit">Send</button></p>
        </form>

        <Link to="/">Go back to the homepage</Link>
    </StyledLayout>
  </Layout>
)

export default Contact
