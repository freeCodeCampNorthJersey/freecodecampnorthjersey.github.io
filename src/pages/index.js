import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import meetups from "../meetups/index"
import Hero from "../components/hero"
import MeetingCard from "../components/meetingCard"
import Links from "../components/links"

const IndexPage = () => {
  const [state, setState] = React.useState({
    meetups: [
      {
        imgCredit: "Photo by Rawpixel on Unsplash",
        imgSrc:
          "https://images.unsplash.com/photo-1535359056830-d4badde79747?ixlib=rb-1.2.1&auto=format&fit=crop&w=3402&q=80",
        imgAltText: "Three different glasses of beer",
        title: "Vast cosmic arena",
        description:
          "Galaxies the ash of stellar alchemy prime number science inconspicuous motes of rock and gas brain is the seed of intelligence.",
        link: "#",
        linkText: "Visit Website",
      },
      {
        imgCredit: "Photo by Quentin Dr on Unsplash",
        imgSrc: "https://images.unsplash.com/photo-1471421298428-1513ab720a8e",
        imgAltText: "Several hands holding beer glasses",
        title: "Billions upon billions",
        description:
          "Made in the interiors of collapsing stars star stuff harvesting star light venture billions upon billions Drake Equation brain is the seed of intelligence?",
        link: "#",
        linkText: "Visit Website",
      },
      {
        imgCredit: "Photo by Drew Farwell on Unsplash",
        imgSrc:
          "https://images.unsplash.com/photo-1513309914637-65c20a5962e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80",
        imgAltText: "Several friends doing a toast",
        title: "Drake Equation",
        description:
          "Another world citizens of distant epochs from which we spring descended from astronomers Orion's sword shores of the cosmic ocean.",
        link: "#",
        linkText: "Visit Website",
      },
    ],
  })

  return (
    <>
      <main class="wrapper">
        <Hero />
        <Links />
        <section class="breweries" id="meetups">
          <ul>
            {state.meetups.map(meetup => (
              <MeetingCard data={meetup} />
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2019. Made with ❤ and CSS Grid.</p>
      </footer>
    </>
  )
}
export default IndexPage
