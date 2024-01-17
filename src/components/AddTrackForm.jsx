import React, { useState } from "react"

function AddTrackForm({ onNewTrackFormSubmit }) {
  const [image, setImage] = useState("")
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [BPM, setBPM] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    const newStore = {
        image: image,
        title: title,
        artist: artist,
        BPM: BPM
    }
    fetch('http://localhost:8001/tracks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newStore)
    })
        .then(response => response.json())
        .then(onNewTrackFormSubmit)
        setImage("")
        setTitle("")
        setArtist("")
        setBPM("")
}

  return (
      <form onSubmit={handleSubmit}>
        <div>
          <input value={image} type="text" name="image" placeholder="Image URL" onChange={(e) => setImage(e.target.value)}/>
          <input value={title} type="text" name="title" placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
          <input value={artist} type="text" name="artist" placeholder="Artist" onChange={(e) => setArtist(e.target.value)}/>
          <input value={BPM} type="number" name="BPM" placeholder="BPM" step="1.00" onChange={(e) => setBPM(e.target.value)}/>
        </div>
        <input className="" type="submit" value="Add Track" />
      </form>
  )
}

export default AddTrackForm