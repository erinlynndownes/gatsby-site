// @ts-ignore
import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../@lekoarts/gatsby-theme-cara/components/layout"
import Hero from "../@lekoarts/gatsby-theme-cara/components/hero"
import Projects from "../@lekoarts/gatsby-theme-cara/components/projects"
import About from "../@lekoarts/gatsby-theme-cara/components/about"
import Contact from "../@lekoarts/gatsby-theme-cara/components/contact"
import Skills from "../@lekoarts/gatsby-theme-cara/components/skills"

const IndexPage = () => (
  <Layout>
    <Parallax pages={5}>
      <Contact offset={4} />
      <Projects offset={3} />
      <Skills offset={2} />
      <About offset={1} />
      <Hero offset={0} />
    </Parallax>
  </Layout>
)

export default IndexPage