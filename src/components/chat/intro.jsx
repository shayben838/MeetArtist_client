import React, { useState } from "react";
import Main from "./main";
import "./css/style.css"

const Intro = ({ user }) => {
    // console.log(user.display_name)
    const [userName, setUserName] = useState(user.display_name)
    const [room, setRoom] = useState("Trance")
    const [submit, setSubmit] = useState("")

    return (
        <div className="" style={{ minHeight: "calc(100vh - 207px)", marginTop: "3.5rem" }}>

            <div className="d-flex align-items-center justify-content-center">
                {!submit &&
                    <div className="join-container">
                        <header className="join-header">
                        <i className="mb-4 fas fa-headphones"></i>
                            <h1 className="lead" style={{letterSpacing:"1rem",fontSize:"25px"}}>MeetArtist</h1>
                            <h1 className="lead" style={{letterSpacing:"1rem",fontSize:"30px"}}>Chat</h1>
                        </header>
                        <main className="join-main">
                            <form action="chat.html">
                                <div className="">
                                    <label style={{letterSpacing:"1rem"}} className="label" for="room" >Room</label>
                                    <select onClick={(e) => setRoom(e.target.value)} name="room" id="room">
                                        <option value="Trance">Trance</option>
                                        <option value="Techno">Techno</option>
                                        <option value="Mix">Mix</option>
                                        <option value="Master">Master</option>
                                    </select>
                                </div>

                                <button onClick={() => setSubmit(true)} type="button" className="btn">Join Chat</button>

                            </form>
                        </main>





                    </div>}
                
            </div>
            {(submit && userName) &&
                    <Main userName={userName} room={room} userLooged={user} />
                }
        </div>
    )
}
export default Intro;