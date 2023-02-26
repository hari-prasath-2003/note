
import React from 'react'
import { Link } from 'react-router-dom'
export default function NoteCard(props) {
  return (
    <div class="card my-5 mb-1 m-5 m-md-4 NoteCard" style={{ "width": "18rem" }}>
      <div class="card-body">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to={"/edit/" + props._id}>
            <h5 class="card-title">{props.heading}</h5>
          </Link>
          <img src={require("../assert/delete.png")} className="trash" alt="" onClick={() => {
            props.delete(props._id)
          }} />
        </div>
        <h6 class="card-subtitle mb-2 text-muted">{props.date}</h6>
        <hr />
        <Link to={"/edit/" + props._id}>
          <p class="card-text ">{props.userNotes.length > 150 ? props.userNotes.slice(0, 150) + " . . ." : props.userNotes}</p>

        </Link>
      </div>
    </div>
  )
}
