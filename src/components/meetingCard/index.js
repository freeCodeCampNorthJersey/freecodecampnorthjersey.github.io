import React from "react"

function MeetingCard({ data }) {
  return (
    <li>
      <figure>
        <img src={data.imgSrc} alt={data.imgAltText} title={data.imgCredit} />
        <figcaption>
          <h3>{data.name}</h3>
        </figcaption>
      </figure>
      <p>{data.local_date}</p>
      {data.description.replace(/(<([^>]+)>)/gi, "")}
      <a href={data.link}>Go to meetup.com event page</a>
    </li>
  )
}

export default MeetingCard
