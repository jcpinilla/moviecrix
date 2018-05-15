import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Link } from "react-router-dom";

class MovieCard extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}	
	}

	componentDidMount() {
	}

	render() {
		return(
			<Link to="/detail" className="col-md-3 movie_card">
				<img src="https://image.tmdb.org/t/p/w500/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg" alt="movie"/>
				<Container className="card_desc">
					<Row className="card_title">
						TITLE
					</Row>
					<Row className="card_genre">
						Genre
					</Row>
					<Row className="card_rating">
						8.9
					</Row>
				</Container>
			</Link>
		);			
	}
}

export default withTracker((props) => {
	return {
	};
})(MovieCard);
