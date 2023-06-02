import React from 'react'
import Insta from "../assets/Insta.png"
import messenger from "../assets/icon.png"
import UserPosts from './UserPosts'
import {useNavigate} from "react-router-dom"



const Timeline = ({data}) => {
  const navigate=useNavigate();
  const DMs=(id)=>{
    let path=`/directMessages`;
    navigate(path);
}
  
return (
  <>
    <div className="App">
      <div className="timeline_header">
        <div>
          <img src={Insta} alt="Insta_Logo" className='insta'/>
        </div>
        <div>
          <img onClick={() => DMs()} src={messenger} alt="messageIcon" className ='msgicon'/>
        </div>
      </div>
      <hr></hr>
      <div>
        <UserPosts data={data} />
      </div>
    </div>
  </>
);
}

export default Timeline