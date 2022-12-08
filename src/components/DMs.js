import React from "react";
import Back from "../assets/backIcon.png";
import { useParams, useNavigate } from "react-router-dom";

const DMs = ({ data }) => {
	const navigate = useNavigate();
	const params = useParams();
	const MainPage = () => {
		let path = "/";
		navigate(path);
	};

	const chatSection = (id) => {
		let path = `/DMs/${id}`;
		navigate(path);
	};
	const filtered = data.filter((obj) => {
		return obj.id === params.id;
	});

	return (
		<>
			<div className="App">
				<div>
					<img
						src={Back}
						onClick={() => MainPage()}
						className="back_icon"></img>
				</div>
				<div className="messageHeader">
					<h2>{filtered[0].username}</h2>
				</div>
				<div className="SearchBarMsg">
					<form>
						<input
							type="text"
							name="search"
							placeholder="Search "
							className="SearchBar"
						/>
					</form>
				</div>
				<div className="MsgContent">
					{data.map((item) => {
						return (
							<div className="msgprofile">
								<div className="imgmsg">
									<img
										src={item.profileimg}
										alt="Profile"
										className="profileimg"
									/>
								</div>
								<div className="msgcontenttext">
									<h3 onClick={() => chatSection(item.userid)}>
                    {item.username}
									</h3>
                  <p className="msgText">
                    {item.messageText}
                  </p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default DMs;
