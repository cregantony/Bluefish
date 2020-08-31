import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"


const Masthead = styled.section `

display:flex;
padding-top:200px;
margin-left:10rem;
margin-right:10rem;
align-items: center;
color:#064980;
`;

const IdentityDesignProcess = () => (

  <Layout>
    <SEO title="Brand Identity Design Process" />
    <Masthead>
      <div>
        <h1>The brand identity design process</h1>
        <p>Whether you need just a logo or an identity system, my design process works the same way.</p>
        <img src="https://www.jessicajonesdesign.com/wp-content/uploads/2017/02/Brand-identity-design-process-1.png" alt="process"/>
        <h2>Proposal</h2>
        <p>After you contact me about your identity design project, I’ll be in touch to get a quick overview of your needs. We’ll go over the scope and timeline. I’ll send you a proposal and contract. Once they’re approved, a standard 50% deposit is required to begin a project. The remainder is due when the work is completed. If another payment plan is more suitable, we can discuss options.</p>
        <h2>Discovery</h2>
        <p>Research is the most important step in the brand identity design process. We can’t design a logo and the overall look and feel of your brand without a roadmap. In this phase, we’ll create one. Steps include:

        A worksheet with questions about your history, audience, competitors, and future goals
        A followup meeting to discuss responses and dig in deeper
        A survey of your existing materials
        A survey of the branding of competing organizations
        Presentation of competitor and inspiration images to get your feedback and approval on a direction
        In this stage, we zero in on a general design direction. Before any concepts are created, we make sure everybody is on the same page. And we’ll keep referring back to this information to decide whether our designs are appropriate. This discovery phase sets the direction for the next steps.</p>
        <h2>Concepts</h2>
        <p>I’ll work up 2-4 concepts—solutions that make sense and are a great fit with the direction we’ve established in the discovery phase of the identity design process. We’ll go over them in a screensharing meeting or a prerecorded video. I’ll also provide them to you in a PDF.
        </p>
        <h2>Refinement</h2>
        <p>From among the concepts presented, we’ll choose the best idea to move forward. If needed, we’ll refine it through a few iterations.

You gather feedback internally 
You provide all of the feedback* at one time
I confirm the requested edits and make the revisions
I submit a new draft for review
*Feedback can be by phone or written notes. Writing can clarify your thoughts and ensures I don’t miss anything.

Once the feedback is used to create a new draft of a design, that completes one round of revisions.

A project scope includes 3 rounds of revisions. More are always available, billed at an hourly rate. (It usually takes less than 3.)</p>
      <h2>Launch</h2>
      <p>Time to show the world! When you’ve approved the final designs, I’ll create the artwork files and deliver them to you and/or your print vendor.

If needed, I’ll contact printers for quotes and manage the printing process for you. If your project includes a brand style guide, all the elements of your brand identity—logo, typography, color palette, photography style, icons, patterns, and more— will be captured and described in this document. You’ll have a valuable reference to keep you on brand going forward.

If you have a brand identity design project in mind, let’s talk it over!</p>
<button>Lets Get Started</button>
      </div>
    </Masthead>
  </Layout>
)

export default IdentityDesignProcess
