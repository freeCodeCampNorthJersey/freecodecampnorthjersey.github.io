import React from "react"

function MeetingCard({ data }) {
  return (
    <li>
      <figure>
        <img
          src={
            data.imgSrc ||
            "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
          }
          alt={data.imgAltText}
          title={data.imgCredit || "photo by Thomas Lefebvre from unsplash"}
        />
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
