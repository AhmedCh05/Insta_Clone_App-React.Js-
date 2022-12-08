import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Back from "../assets/backIcon.png";


const Profile = ({ data }) => {
  const navigate = useNavigate();
  const params = useParams();
  const mainPage = () => {
    let path = "/";
    navigate(path);
  };
  const message = () => {
    let path = "/directMessages";
    navigate(path);
  };

  const filtered = data.filter((obj) => {
    return obj.id == params.id;
  });

  return (
    <div className = "App">
      <div>
      <img
						src={Back}
						onClick={() => mainPage()}
						className="back_icon"></img>
      </div>
      <div className="d-flex justify-content-center align-items-center top">
        <h4>{filtered[0].title}</h4>
        {filtered[0].followers > 1000 ? (
          <i class="fa-solid fa-check clr icon"></i>
        ) : (
          ""
        )}
      </div>
      <div className="evenly profile1">
        <img src={filtered[0].profileimg} alt="Profile" />
        <div className="d-flex flex-column tp">
          <div className="flex">
            <p>
              <b>{filtered[0].postImages.length}</b>
            </p>
          </div>
          <p>
            <b>Posts</b>
          </p>
        </div>
        <div className="d-flex flex-column tp">
          <div className="flex">
            <p>
              <b>{filtered[0].followers}</b>
            </p>
          </div>
          <p>
            <b>Followers</b>
          </p>
        </div>
        <div className="d-flex flex-column tp">
          <div className="flex">
            <p>
              <b>{filtered[0].following}</b>
            </p>
          </div>
          <p>
            <b>Following</b>
          </p>
        </div>
      </div>
      <h3>{filtered[0].title}</h3>
      <p>{filtered[0].subtitle}</p>
      <p>
        <b>Pakistan Zindabad</b>
      </p>
      <button onClick={() => message()} className="btn btn-primary">
        Message
      </button>
      <div className="d-flex widt flex-wrap mt-3">
        {filtered[0].postImages.map((item) => {
          return <img src={item.postImage} alt="Post" />;
        })}
      </div>
    </div>
  );
}

export default Profile;
