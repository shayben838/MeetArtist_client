import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import "./css/style.css"
import "../header/header.css"
import UsersList from "./users_list";
const ENDPOINT = "https://meetartistserver.herokuapp.com/";
const socket = socketIOClient(ENDPOINT);

const Main = ({ userName, room, userLooged }) => {

  const [chatMessage, setchatMessage] = useState("")
  const [roomName, setroomName] = useState("")
  const [users, setUsers] = useState([]);
  const [usersList, setUsersList] = useState("");

  useEffect(() => {
    // AFTER FINISH TO TEST THE UPLOAD TO HEROKU RETURN THE CODE DOWN


    // Join chatroom
    console.log({ userName, room })
    socket.emit('joinRoom', { userName: userName, room: room });

    socket.on('message', message => {
      outputMessage(message);

      // Scroll down
      const chatWindow = document.getElementById('chat-messages');
      var xH = chatWindow.scrollHeight;
      chatWindow.scrollTo(0, xH);
    });
  }, []);

  // Get room and users
  socket.on('roomUsers', ({ room, users }) => {
    setroomName(room)
    setUsers(users)
  });

  // Message submit
  const SendMessage = () => {
    // Emit message to server
    socket.emit('chatMessage', chatMessage);
    // Clear input
    let input = document.getElementById('msg');
    input.value = ""
  }
  // Output message to DOM
  const outputMessage = (message) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML =
      `<p class="meta">${message.username} 
        <span>${message.time}</span>
      </p>
    <p class="text">
      ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
  }



  return (
    <div>
      <div className="d-flex align-items-center justify-content-center " style={{height:"480px"}}>
        <div className="chat-container">
          <p className="btn_leave_room m-0 ">
            <a style={{ color: "black" }} href="/chat" >Leave Room</a>
          </p>
          {/* <a href="/chat" className="btn_leave_room">Leave Room</a> */}
          <header class="chat-header">
            <h4 style={{ color: "black" }}>{room}</h4>
            <h6 style={{ color: "black", letterSpacing: ".6rem" }}>Chat Room</h6>
            <button type="button" onClick={() => setUsersList("open")}className="users_list" >Users</button>


          </header>

          <main className="row m-0" >
            <div className="col-sm-2  col-4"style={{overflowY:"scroll",overflowX:"hidden"}}>
              <h3 style={{ color: "black", letterSpacing: ".2rem" }}>Users</h3>
              <div id="users m-0">
                {users.map(user =>
                  <div>
                    <p className="lead" style={{paddingBottom:"5px", color: "black",borderBottom:"1px solid #777" }}>{user.username}
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div id='chat-messages' className="col-sm-10 col-8 chat-messages">

            </div>

          </main>
          <div className="wrap_inputs">
            <input className="input_message" onChange={(e) => setchatMessage(e.target.value)} id="msg" type="text" placeholder="Enter Message" required autocomplete="off" />
            <button type="button" onClick={() => SendMessage()} className="btn_send">Send</button>
          </div>
        </div>

      </div>
      {usersList === "open" &&
        <UsersList users={users} setUsersList={setUsersList} />
      }
    </div>
  )
}

export default Main;
