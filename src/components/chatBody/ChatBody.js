import React, { useState } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../userProfile/UserProfile";

const ChatBody = () => {
  const[otherId,setOtherId]=useState({});

    return (
      <div className="main__chatbody">
        <ChatList setOtherId={setOtherId}/>
        {otherId.userId && <ChatContent otherId={otherId}/>}
        {otherId.userId && <UserProfile otherId={otherId}/>}
      </div>
    );
  }

export default ChatBody;
