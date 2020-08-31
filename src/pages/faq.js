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

const Faq = () => (

  <Layout>
    <SEO title="Brand Identity Design Process" />
    <Masthead>
      <div>
        <h1>Frequently asked questions about branding projects</h1>
        <h2>Capability</h2>
        <p>How picky should I be when getting a logo for my business?
        Very. Your brand identity—which includes your logo—is the visual face of your business to the public. People can’t help but form an impression of you based on what they see, and your logo is the most commonly used visual that represents you. Not only should it be well-executed technically, but it also needs to have the right style.

        Logos are high-visibility projects—they’re on every business card, sign, brochure, ad, website, package, menu, postcard, social media page, and pen you’ll ever produce. Your logo is always at work, 24/7, marketing your business and helping prospective customers form the correct impression of you. So you need a designer with experience and skill. Preferably one that will think beyond the logo and create a system of elements that can represent your brand.</p>
        <p>How can I be sure I’ll like what you design?
        At the start of your branding project, we’ll discuss your goals and establish a creative brief. This will set parameters and guide the design process. Since you’re involved in setting those parameters, you can be confident your brand identity will be something you love. See details on the process.</p>
        <h2>Compatibility</h2>
        <p>How do I know we’re a good match for each other?
        Not to sound like we’re dating here, but compatibility is important. Take a look at my graphic design portfolio. Does it have the general style you’re after? You need a designer whose work matches the aesthetic you’re aiming for. You might love how a designer presents their work, or they have a great reputation, or you genuinely like them as a person. But if their body of work doesn’t feel like you could imagine your project fitting in, you should look elsewhere. Designers can design in different styles, but their own unconscious preferences will act like a magnet pulling the design back to their sweet spot. Which hopefully is the reason you selected them in the first place.</p>
        <p>How much does a branding project cost?
        Find prices for my brand identity packages here.</p>
        <p>We’re not in the same city. Can we still work together?
        Absolutely. 95% of my clients are not local, so I’m adept at managing projects long distance. I’ll send PDF proofs or recorded video presentations by email, we can talk on the phone, chat over video on Zoom, mail color swatches and samples, or any combination of those. No sweat.</p>
        <p>
        I need a logo and I already know exactly what I want it to look like. I just need someone to make it. Will you help?
        In this case you are the designer, and you simply need a technician who can execute your idea using computer software. I bring strategic thinking as well as execution to a project, and that’s more than you’re looking for. I’m not the right fit for you.</p>
        <h2>Services</h2>
        <p>I’m afraid not; my work is primarily branding projects. It sounds like you need a designer who focuses on production work and can apply your existing branding to a piece of collateral. Developing a relationship with someone you can call on for these ongoing needs is your next step.</p>
        <p>
        How long does it take to complete a branding project?
        Depending on the number of deliverables involved, it usually takes me anywhere from 3 weeks for a logo project to 3 months for a standard brand identity package with a few additional pieces of collateral.</p>
        <p>Can you manage the printing of my project?
        Yes. Some clients have trusted print vendors they already use and simply need print-ready files they can take to them. Or, when needed, I can manage the entire printing process for you, recommending vendors, obtaining quotes and seeing your project through to the finish. In this case, I’ll add a small print management fee to the project. You’ll pay the printer’s bill separately, which saves you money since you won’t incur mark-up charges, and you’ll have a relationship established with the printer so you can easily order reprints directly.</p>
        <p>We need a website, too. Can you help?
        Web design and development is a speciality in itself, so I no longer take on web projects. I recommend clients hire a dedicated individual or firm for this. The firm can reference the brand style guide we develop to build the site. It may be possible for me to consult on the project, checking in at a couple strategic points to make sure the design is consistent with your brand.</p>
        <p>Do you do copy writing?
        I can help you with naming, taglines, mission statements, or other short messaging for your brand. But when it comes to lengthy copy for editorial guidelines, presentations, brochure, or websites, that’s not a service I provide. I can refer you to writers I know.</p>
      </div>
    </Masthead>
  </Layout>
)

export default Faq
