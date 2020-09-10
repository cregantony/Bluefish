import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Masthead from "../components/masthead"
import StyledLayout from "../components/styledlayout"


const Pricing = () => (

  <Layout>
    <SEO title="Brand Identity Design Process" />
    <Masthead Titletext="Brand identity pricing packages"/>
      <StyledLayout>
        <h2>Brand identity pricing packages</h2>
        <p>Brand identity pricing can vary widely. An agency might charge $30,000 to $250,000, depending on who they are and the scope of the project. But not all businesses need to invest that much. I’ve created identities for businesses and entrepreneurs for over a decade. As an independent designer, I’m often able to bring agency-level design and expertise to the same project that has a higher cost elsewhere. Below is suggested pricing for small business clients.</p>
        <section>
            <h2>Logo Package</h2>
            <p>You’re confident your existing look and feel is right. You want to keep your current messaging, colors, fonts, imagery, and style. You need a more polished, better-crafted brand mark. Click + or item name for details.</p>
            <li>DISCOVERY</li>
            <li>Logo</li>
            <li>Logo Color Specs</li>
            <h2>$3000</h2>
            <button>Get Started</button>
        </section>
        <section>
            <h2>Standard Package</h2>
            <p>You’re starting from scratch or refining your company’s existing branding. You need direction and a toolkit of visual and verbal elements. Click + or item name for details.</p>
            <li>DISCOVERY</li>
            <li>Logo</li>
            <li>Tagline</li>
            <li>Color Palette</li>
            <li>Typography</li>
            <li>Graphic Elements</li>
            <li>BrandStyle Guide</li>
            <h2>$5000</h2>
            <button>Get Started</button>
        </section>
        <section>
            <h2>Custom Package</h2>
            <p>More items can be added to the Standard Package. Common pieces include business cards, letterhead (printed or Microsoft Word), social media post templates, brochures and info sheets, merch, signage, or other digital templates or printed pieces. Templates are typically created using Adobe Creative Suite software (InDesign, Illustrator, Photoshop). Pricing will depend on the scope of the project. 

            For many clients, a cost-effective solution is dividing a project into two parts. Phase 1 is the standard brand identity package, and Phase 2 is applying the new branding to the set of collateral that your business needs.

            A note about websites:
            Web design and development is a speciality in itself, so I don’t include it with brand identity pricing. I recommend clients hire a dedicated individual or firm for this. The firm can use the look and feel we develop in this project to build the site.</p>
                      <button>Get Started</button>
        </section>
        <p>Your brand identity tool kit
My task is to help set a look and feel for your brand and get you started. Your own in-house production designer or freelancer can take over from there, working with the style guidelines we establish.</p>
      </StyledLayout>
  </Layout>
)
export default Pricing