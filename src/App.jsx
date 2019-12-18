import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { HeaderBlock, FullPost, AddForm, NotFound } from "components";
import { PostsList } from "modules";

const App = () => {
	return (
		<div>
			<HeaderBlock
				title="Website title"
				description="description"
				imageUrl="https://images.unsplash.com/photo-1574092403000-ef9c803b84bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
			/>
			<div className="container">
				<div className="content">
					<div className="content">
						<Router>
							<div>
								<Switch>
									<Route
										exact
										path="/"
										component={() => <PostsList />}
									/>
									<Route
										path="/post/:id"
										exact
										component={() => {
											return (
												<FullPost
													title="Article title"
													createdAt={"" + new Date()}
												/>
											);
										}}
									/>
									<Route
										path="/post/:id/edit"
										exact
										component={AddForm}
									/>
									<Route path="*" component={NotFound} />
								</Switch>
							</div>
						</Router>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
