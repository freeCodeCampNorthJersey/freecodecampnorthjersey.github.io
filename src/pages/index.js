import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/hero"
import MeetingCard from "../components/meetingCard"
import Links from "../components/links"
import Footer from "../components/footer"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMeetupEvent {
        edges {
          node {
            link
            local_date
            name
            description
          }
        }
      }
    }
  `)

  return (
    <>
      <main className="wrapper">
        <Hero />

        <section className="meetups" id="meetups">
          <ul>
            {data.allMeetupEvent.edges.map(meetup => (
              <MeetingCard key={meetup.node.local_date} data={meetup.node} />
            ))}
          </ul>
        </section>
      </main>
      <Links />
      <Footer />
    </>
  )
}
export default IndexPage
