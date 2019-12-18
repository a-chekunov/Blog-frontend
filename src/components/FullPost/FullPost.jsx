import React from "react";
import { Link } from "react-router-dom";

import "./FullPost.scss";

const FullPost = ({ title, createdAt }) => {
	return (
		<div className="full-post">
			<div className="container">
				<Link to="/">
					<button className="btn btn-primary">Back</button>
				</Link>
				<p className="full-post__details">
					<i>Posted on {createdAt}</i>
				</p>
				<br />
				<p className="full-post__text">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Vero minus magnam ab. Reprehenderit nisi veritatis
					cupiditate doloribus quos distinctio quaerat vitae tempore
					voluptates quo, quae a suscipit. Esse, ea. Recusandae
					voluptatem porro consequuntur ab quam. Natus necessitatibus
					numquam porro error?
				</p>
			</div>
		</div>
	);
};

export default FullPost;
