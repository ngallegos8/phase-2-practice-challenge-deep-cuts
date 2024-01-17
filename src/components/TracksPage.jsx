import React, { useState, useEffect } from 'react'
import Search from './Search'
import AddTrackForm from './AddTrackForm'
import TracksList from './TracksList'

function TracksPage() {
  const [tracks, setTracks] = useState([])
  const [search, setSearch] = useState("")

  // console.log(tracks)
  // console.log(search)

  useEffect(() => {
    fetch('http://localhost:8001/tracks')
      .then(response => response.json())
      .then(setTracks)
  }, [])

  function handleNewTrackFormSubmit(newTrack) {
    setTracks([...tracks, newTrack])
  }

  function removeTrack(id) {
    const newTracks = tracks.filter((track) => track.id !== id)
    setTracks(newTracks)
  }

  const displayedTracks = tracks.filter((tracks) => tracks.title.toLowerCase().includes(search.toLowerCase()))



  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <AddTrackForm onNewTrackFormSubmit={handleNewTrackFormSubmit}/>
      <TracksList tracks={displayedTracks} removeTrack={removeTrack}/>
    </div>
  )
}

export default TracksPage