import React from "react"
import './home.css'
import { useContext} from 'react'
import { gifContext } from "../Context/GifContext"
import {gifClickContext} from '../Context/gifClickContext'


function Home() {
   
    

    const {setState }=useContext(gifClickContext)
    const { gif } = useContext(gifContext)
    // console.log(gif)
    return (
        <div>
            <div className="session">

                <div className="header">
                    <p className="p-tag">Compose Post</p>
                    <p className="p-tag">Photo/Video Album</p>
                    <p className="p-tag">Live video</p>

                    <div>
                        <button className="close-button">X</button>
                    </div>
                </div>

                <div>
                    <div className="avatar-div">
                        <i className="fa fa-user user-icon" ></i>
                    </div>
                    <div className="input-div">

                        <input type="text" placeholder="Write something here..." className="input" />
                    </div>
                </div>
                <div className="image-div">
                    { gif ?  <img src={gif} alt='' className="large-image" >
                   
                    </img>
                    :''}
                   
                </div>





                <div className="buttons-div">
                    <div className="buttons-side">

                        <button className="buttons">tag friends</button>
                        <button className="buttons" onClick={() => {
                           setState(true)
                        }} >Gif</button>
                    </div>
                    <div className="buttons-side">
                        <button className="buttons">tag friends</button>
                        <button className="buttons">tag friends</button>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Home


