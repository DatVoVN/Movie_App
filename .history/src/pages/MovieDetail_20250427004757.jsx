import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import CircularProgessBar from '../components/CircularProgessBar'
import { useParams } from 'react-router-dom'
import { groupBy } from 'lodash'
import Loading from '../components/Loading'
import Banner from '../components/MediaDetail/Banner'

const MovieDetail = () => {
  const {id} = useParams()
  const [isLoading, setIsLoading]=  useState(false)
  const [movieInfo, setMovieInfo] = useState({})
  useEffect(()=>{
    setIsLoading(true)
    fetch(`https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`, {
      method: "GET",
      headers: {
            accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODRkZDcwNWVjZWU3N2EzYmFmMWE5OTYwMGUyN2MwNCIsIm5iZiI6MTcyMTcxMDQyOC4zMjgsInN1YiI6IjY2OWYzNzVjNTI0M2RhODhhNzUwNGE1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nolvMGzTv0LYOa24_n9GfZjcgogpyVNNIlXiHhX1MpY",
      }
    }).then(async (res)=>{
      const data = await res.json()
      setMovieInfo(data)
    }  ).catch((err)=>{console.error(err)}).finally(()=>setIsLoading(false))
  },[id])
  if(isLoading){
    return <Loading/>
  }
  const certification = (
    (movieInfo.release_dates?.results || []).find(
      (result) => result.iso_3166_1 === "US",
    )?.release_dates || []
  ).find((releaseDate) => releaseDate.certification)?.certification;
  const crews = (movieInfo.credits?.crew || [])
      .filter((crew) => ["Director", "Screenplay", "Writer"].includes(crew.job))
      .map((crew) => ({ id: crew.id, job: crew.job, name: crew.name }));

    const groupedCrews = groupBy(crews, "job");
  return (
    <div>
      <Banner movieInfo={movieInfo}/>
    </div>
  )
}

export default MovieDetail
