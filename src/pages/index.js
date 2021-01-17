import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { Layout, About, Contact, Hero, Jobs, Projects, Footer } from "@components"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              github
              tech
              showInProjects
            }
          }
        }
      }
    }
  `)


  return (
    <Layout>
      
      <Hero />
      <About />
      <Jobs />
      <Projects />
      <Contact />
      <Footer />
    </Layout>
  )
}
