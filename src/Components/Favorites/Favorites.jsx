import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card';
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const [data, setData] = useState([]);
  const [arrFav, setarrFav] = useState(useSelector((state) => state.favoriteItems.FavoritesArray));

  let dispatch = useDispatch();



  useEffect(() => {

  }, [useSelector((state) => state.favoriteItems.FavoritesArray)])


  return (
    <>

      <div className="container mt-4">
        <div className="row g-3">

          {arrFav.map((e, i) => {
            return <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <Card item={e} title={e.original_title} id={e.id} img={'https://image.tmdb.org/t/p/w500' + e.backdrop_path} more={e.overview} />
            </div>
          })}

        </div>
      </div>

    </>
  )
}
