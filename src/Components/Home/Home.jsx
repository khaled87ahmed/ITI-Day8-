import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card';

export default function Home() {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    async function fetchData() {
        await axios.get('https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=%7Ba',
            {

                params: {
                    page: page,
                }

            }
        ).then((d) => {
            setData(d.data.results);
        })
    }

    useEffect(() => {

        fetchData()

    }, [page])

    const handleSearch = async (event) => {
        let que = event.target.value;

        if (que != '') {
            await axios.get('https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=%7Ba',
                {
                    params: {
                        query: que,
                    }

                }
            ).then((d) => {
                setData(d.data.results);
            })
        }
        else{

            await axios.get('https://api.themoviedb.org/3/search/movie?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c&query=%7Ba',
                {
                    params: {
                        page:page
                    }

                }
            ).then((d) => {
                setData(d.data.results);
            })

        }



    }

    return (
        <>

            <form class="d-flex justify-content-center align-items-center my-5">
                <div className='col-4'>
                    <input onChange={handleSearch} class="form-control " type="search" placeholder="Search" aria-label="Search" />
                </div>
            </form>

            <div className="container mt-4">
                <div className="row g-3">

                    {data.map((e, i) => {
                        return <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <Card item={e} title={e.original_title} id={e.id} img={'https://image.tmdb.org/t/p/w500' + e.backdrop_path} more={e.overview} />
                        </div>
                    })}

                </div>
            </div>

            <div className='d-flex justify-content-between align-items-center container mt-3 mb-5'>
                <button onClick={() => { page > 1 ? setPage(page - 1) : setPage(page) }} className='btn btn-dark'>Prev</button>
                <button onClick={() => { setPage(page + 1) }} className='btn btn-dark'>Next</button>

            </div>

        </>
    )
}
