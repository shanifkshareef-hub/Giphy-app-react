import React, { useState } from "react"
import './home.css'
import { useContext } from 'react'
import { gifContext } from "../Context/GifContext"
import { gifClickContext } from '../Context/gifClickContext'


function Home() {


    const [message, setMessage] = useState('')
    const [sendClick, setSendClick] = useState(false)
    const { state, setState } = useContext(gifClickContext)
    const { gif, setGif } = useContext(gifContext)
    // console.log(gif)

    const handleClose = () => {

        setGif('')
        setSendClick(false)
    }
    const handleMessage = () => {
        setSendClick(true)
    }
    return (
        <div>
            <div className="session">

                <div className="header">
                    <p className="p-tag">Compose Post</p>
                    <p className="p-tag">Photo/Video Album</p>
                    <p className="p-tag">Live video</p>

                    <div>
                        <button className="close-button" onClick={handleClose}><i class="fa fa-close close-icon"></i></button>
                    </div>
                </div>

                <div>
                    <div className="avatar-div">
                        <i className="fa fa-user user-icon" ></i>
                    </div>
                    <div className="input-div">

                        <input type="text" value={message} onChange={(e) => { setMessage(e.target.value) }} placeholder="Write something here..." className="input-msg" />
                    </div>
                    <div className="sendbutton-div">
                        <button className="send-button" onClick={handleMessage}>send</button>
                    </div>
                </div>
                <div className="message-div">
                    {sendClick && <h1>{message}</h1>
                    }
                </div>
                <div className="image-div">
                    {gif ? <img src={gif} alt='' className="large-image" >

                    </img>
                        : ''}

                </div>





                <div className="buttons-div">
                    <div className="buttons-side">

                        <button className="buttons"><i class="fa fa-user-plus icon1" aria-hidden="true"></i>tag friends</button>
                        <button className="buttons"><i class="fa fa-map-marker icon2" aria-hidden="true"></i>tag friends</button>

                    </div>
                    <div className="buttons-side">
                        <button className="buttons" onClick={() => {
                            setState(!state)
                        }} ><i class="material-icons icon3">gif</i>
                            GIF</button>
                        <button className="buttons"><i class="fa fa-calendar icon4" aria-hidden="true"></i>tag friends</button>
                    </div>

                </div>

            </div>
        </div>
    )
}


export default Home



