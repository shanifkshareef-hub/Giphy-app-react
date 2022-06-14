

import React, { useEffect, useState, useContext } from 'react'
import './gif.css'
import axios from 'axios'

import { trendingUrl,  API_KEY } from '../Constants/constants'
import { gifContext } from '../Context/GifContext'
import {gifClickContext} from '../Context/gifClickContext'
function Gif() {


    const [data, setData] = useState([])

    const [searchValue, setSearchvalue] = useState('')
    const { setGif } = useContext(gifContext)
    const {setState,state}=useContext(gifClickContext)

    const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q="${searchValue}"&limit=25&offset=0&rating=g&lang=en`

    useEffect(() => {


        axios.get(trendingUrl).then((res) => {
            // console.log(res.data)
            setData(res.data.data)

        }).catch((err) => {
            console.log(err)
        })



    }, [])
    // console.log(data)
    const handleGif = (e) => {
        e.preventDefault()
        axios.get(searchUrl).then((res) => {
            // console.log(res.data)
            setData(res.data.data)
        })
    }



    return (


<div className='outer-div'>
        <div className="main">
            <div className="input-div">
               
                    <input type="text" onChange={(e) => { setSearchvalue(e.target.value) }} className="input" placeholder="Search Gifs..." />
                    <button onClick={handleGif} className="search"><i class="fa fa-search" style={{ "font-size": "30px", "color": "rgb(52, 51, 51)" }}></i></button>
                
            </div>
            {
                data.map((obj) => {

                    return (


                        <div className="img-div" onClick={()=>{
                            setGif(obj.images.downsized.url)
                            setState(!state)
                        }}>
                            <img src={`${obj.images.downsized.url}`}

                                alt="gifs"

                                className="gif-view" />
                            
                        </div>
                    )
                })
            }
        </div>
        </div>




    )
}
export default Gif



