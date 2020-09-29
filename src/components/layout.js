/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Footer from "./footer"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"
import logo from "../images/logo.svg"
import Sidebar from "./sidebar"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const MainWrapper = styled.div `
  padding: 0;
  main {  padding-top: 140px;}

  @media (max-width: 1080px) {
    main {  padding-top: 95px;}
  }

  `;

  const GhostHeader = styled.div `
  color: #064980;
  position:fixed;
  width:100%;
  height:95px;
  z-index: 22;
  display:flex;
  padding:10px;
  background:white; border-bottom:4px solid #064980;
  @media (min-width: 1080px) {
    display:none;
  }
  `;

  const GhostLogo = styled.img `
  width: 125px;
  `;

  return (
    <>
      <Sidebar/>
      <GhostHeader>
      <Link to="/"><GhostLogo src={logo} alt="Bluefish Branding Group"/></Link> 
        <div></div> 
      </GhostHeader>
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainWrapper>
        <main>{children}</main>
        <Footer/>
      </MainWrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
