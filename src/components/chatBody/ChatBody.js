import React, { useState } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

const ChatBody = () => {
  const[otherId,setOtherId]=useState({});

  localStorage.setItem("authToken",'99367c602e83dc17c370c051edcbdc21c9614de415901b87dbc48dd7949d7341')

    return (
      <div className="main__chatbody">
        <ChatList setOtherId={setOtherId}/>
        {otherId.userId && <ChatContent otherId={otherId}/>}
        {otherId.userId && <UserProfile otherId={otherId}/>}
      </div>
    );
  }

export default ChatBody;
