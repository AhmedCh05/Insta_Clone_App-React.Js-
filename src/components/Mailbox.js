import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
import {directMessages} from '../JsonFile/materialdata';
import Back from "../assets/backIcon.png";

const Mailbox = ({directMessages,Data}) => {

    const navigate = useNavigate();
    const params = useParams();
    const MainPage = () => {
      let path = "/";
      navigate(path);

    }

  const filtered = directMessages.filter(obj => {
    return obj.userid == params.id;
  });

  return (
   <div className="container">
     <div>
					<img
						src={Back}
						onClick={() => MainPage()}
						className="back_icon"></img>
			</div>
     <div className='d-flex justify-content-center align-items-center top'>
        <div className="profile3">
       <img src={filtered[0].profileimg} alt="inbox"/>
       </div>
        <h4>{filtered[0].username}</h4>
       {Data[0].followers>1000?<i class="fa-solid fa-check clr icon"></i>:""}
      </div>
      <div className="inboxMessages d-flex flex-column">
        {filtered[0].inbox.map((item)=>{
            if(item.msgID === '51999'){
            return(
            <div className="recieveMessage">
                
                {item.dmMsgs.msgText}
            </div>
            )
            }
            else{
                return (
                    <div className="sendMessage">
                    {item.dmMsgs.msgText}
                </div>
                )
            } 
        })}

    </div>

   </div>
  )
}

export default Mailbox