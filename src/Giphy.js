import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {trendingUrl,searchUrl} from './Constants/constants'

function Giphy() {


    const [data, setData] = useState([])

    useEffect(() => {


        axios.get(trendingUrl).then((res) => {
            console.log(res.data)
            setData(res.data.data)
           
        }).catch((err) => {
            console.log(err)
        })



    }, [])
    console.log( data)
    
   


    return (
        <div>

           



{ data.map((obj)=>{       
           return( <div className='card'>
         
             <h2>{obj.title}</h2>
            <div className='posters'>
                <img alt='poster'className='image' src={`${obj.images.downsized.url}`} />


            </div>
            </div>)
        })
     } 

        </div>

    )

}


export default Giphy

