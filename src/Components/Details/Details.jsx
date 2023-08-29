import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Details() {
  const [data, setData] = useState({});

  let id = useSelector((state) => state.detailsItem.detailsString);

  async function fetchData() {
    if (id != '')
      await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c`
      ).then((d) => {
        setData(d.data);
      })
  }

  useEffect(() => {

    fetchData()

  }, [])


  return (
    <>

      <div className='d-flex flex-column align-items-center'>
        <h1>{data.original_title}</h1>
        <img className='my-5' src={'https://image.tmdb.org/t/p/w500' + data.backdrop_path} alt="" />
        <p>{data.overview}</p>
      </div>

    </>
  )
}
