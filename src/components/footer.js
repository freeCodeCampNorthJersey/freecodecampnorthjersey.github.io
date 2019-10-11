import React from "react"

function Footer() {
  return (
    <footer>
      © {new Date().getFullYear()}, freeCodeCampNJ
      <p>
        <a href="https://www.themakerdepot.com/">
          Thanks to the Maker Depot for providing our meeting space!
        </a>
      </p>
    </footer>
  )
}

export default Footer
