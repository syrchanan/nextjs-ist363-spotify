import { useState } from 'react'
import { getGenres, getTracks, filterTracksByGenre } from '../lib/api'
import Tabs from './Tabs'
import Tracks from './Tracks'


const TracksByGenre = () => {
	const tracks = getTracks()
	const genres = getGenres()

    const [activeGenre, setActiveGenre] = useState("Rock");

    return(
        <div>
            <h2>Top Songs by Genre</h2>
            <Tabs 
                items={genres} 
                activeItem={activeGenre}
                clickHandler={setActiveGenre}
            />
            <Tracks
                items = {filterTracksByGenre(tracks, activeGenre)}
            />
        </div>
    )
}

export default TracksByGenre