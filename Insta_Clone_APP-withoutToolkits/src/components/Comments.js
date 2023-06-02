import { useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';

const Comments = ({data}) => {
  
  const navigate = useNavigate();
  const params = useParams();
  const main = () => {
    let path = "/";
    navigate(path);
  }
  const [comment,setComment] = useState("") 
  const filtered = data.filter(obj => {
    return obj.id === params.id;
  })

  const addComment = () => {
  filtered[0].comments.push({ 
    username:filtered[0].title,
    userimg:filtered[0]
    .profileimg, 
    coment:comment 
  });
  
  setComment(filtered[0].comments);
  setComment("")
}
return (
    <div className='container'>
        <i onClick={()=>main()}  class="fa-solid fa-angle-left icon2 point"></i>
        <div className='d-flex justify-content-center align-items-center top'>
        <h4>Comments</h4>
        <hr/>  
        </div>
      <div className="profile2 d-flex">
      <img src={filtered[0]
        .profileimg} alt="Profile"/>
      <h4 className='mar'>{filtered[0].title}</h4>
      <p className='state'>{filtered[0].postDetails}</p>
      </div>
      <hr/>
      {filtered[0].comments.map((item)=>{
        return(
        <div className="profile2 d-flex">
        <img src={item.userimg} alt="User"/>
        <h4 className='mar'>{item.username}</h4>
        <p className='state'>{item.coment}</p>
        </div>
        )
      })}
      <div className="input-comment">
      <input type="text" placeholder='Add a comment' className='mt-2 wid border' value={comment} onChange={(e)=>setComment(e.target.value)} ></input>
      <img src = "https://c8.alamy.com/zooms/9/7cd99af91c364a6283e6b3f62d56dd0a/2e2f1f3.jpg" alt="Message Icon" onClick={addComment} className="messagewidth"/>
      </div>
      </div>
  )
} 

export default Comments