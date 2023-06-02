import React from "react";
import { useNavigate } from "react-router-dom";
import Like from "../assets/like.png";
import Comment from "../assets/comment.png"

function UserPosts({ data }) {
	const navigate = useNavigate();
	const postDetail = (id) => {
		let path = `/${id}`;
		navigate(path);
	};

	const comment = (id, title) => {
		let path = `/${id}/${title}`;
		navigate(path);
	};

	return (
		<div  className="container">
			{data.map((item) => {
				return (
					<>
						<div className="postheader">
							<div className="profile">
								<img
									src={item.profileimg}
									alt="Profile"
									className="profileimg"></img>
							</div>
							<div className="postheaderwriting">
								<p onClick={() => postDetail(item.id)}>
									<b>{item.title}</b>
									<br />
									{item.subtitle}
								</p>
							</div>
						</div>

						<div className="postimg">
							<img src={item.postimg} alt="postImage" className="imgpost" />
						</div>
						<div className="underposticons">
							<img src={Like} alt="like" className="uposticon"></img>
							<img src={Comment} onClick={() => comment(item.id, item.title)} className="uposticon1"></img>
						</div>
						<div className="underpostdetails">
							<b>{item.title}</b>
							<span className="left">{item.postDetails}</span>
						</div>
						<p className="Comments">
							View All {item.comments.length} Comments
						</p>
					</>
				);
			})}
		</div>
	);
}

export default UserPosts;
