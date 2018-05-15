import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { withRouter  } from "react-router-dom";
import { withTracker  } from "meteor/react-meteor-data";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {

		};
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<nav className="site-header sticky-top py-1">
					<Container className="d-flex flex-column flex-md-row justify-content-between">
						<a className="py-2" href="#">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
						</a>
						<a className="py-2 d-none d-md-inline-block" href="#">Popular</a>
						<a className="py-2 d-none d-md-inline-block" href="#">In Theaters</a>
						<a className="py-2 d-none d-md-inline-block" href="#">Coming Soon</a>
					</Container>
				</nav>
				{this.props.children}
			</div>
		);
	}
}
