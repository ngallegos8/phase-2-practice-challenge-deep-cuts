import React from 'react'
import defaultVinyl from '../assets/vinyl_PNG111.png'

function Track({ track, removeTrack }) {
  // console.log(track)

  function handleDelete() {
    fetch(`http://localhost:8001/tracks/${track.id}`, {
      method: "DELETE"
    })
    removeTrack(track.id)
  }

  return (
    <tr className="table-row">
        <td className="row-image">
            {/* you can use the default image if no image is given */}
            <img src={track.image} placeholder={defaultVinyl} alt="title" />
        </td>
        <td className="row-title">{track.title}</td>
        <td>{track.artist}</td>
        <td>{track.BPM}</td>
        <td>
            <button onClick={handleDelete}>Delete Track</button>
        </td>
    </tr>
  )
}

export default Track;