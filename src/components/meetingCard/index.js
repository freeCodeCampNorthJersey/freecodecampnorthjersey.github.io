import React from "react"

function MeetingCard({ data }) {
  return (
    <li>
      <figure>
        <img src={data.imgSrc} alt={data.imgAltText} title={data.imgCredit} />
        <figcaption>
          <h3>{data.title}</h3>
        </figcaption>
      </figure>
      <p>{data.description}</p>
      <a href={data.link}>{data.linkText}</a>
    </li>
  )
}

export default MeetingCard
