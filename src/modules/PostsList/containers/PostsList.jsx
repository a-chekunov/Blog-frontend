import React, { useEffect } from "react";
import { connect } from "react-redux";
import { PostsList } from "components";
import PostsListActions from "../actions";

const PostsListContainer = (props) => {
	const { fetchItems } = props;
	useEffect(() => {
		fetchItems();
	}, []);

	return <PostsList items={props.items} />;
};

export default connect(
	({ posts }) => posts,
	PostsListActions
)(PostsListContainer);
