import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { AddForm, NotFound } from "components";
import { PostsList, HeaderBlock, FullPost } from "modules";

const App = () => {
	return (
		<div className="App">
			<Router>
				<div>
					<HeaderBlock />
					<div className="container">
						<div className="content">
							<div className="content">
								<Switch>
									<Route
										exact
										path="/"
										component={() => <PostsList />}
									/>
									<Route
										path="/post/:id"
										exact
										component={FullPost}
									/>
									<Route
										path="/post/:id/edit"
										exact
										component={AddForm}
									/>
									<Route path="*" component={NotFound} />
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</Router>
		</div>
	);
};

export default App;
