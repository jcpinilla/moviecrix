import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { withRouter } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import CommentList from "../components/CommentList.jsx";
import TweetList from "../components/TweetList.jsx";

class MoviePage extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		if (!this.props.id) return
		Meteor.call('movies.getSpecificMovie', this.props.id, (error, res) => {
			this.setState({
				poster_path: res.poster_path,
				title: res.original_title,
				language: res.original_language,
				rating: res.vote_average,
				release_date: res.release_date + "",
				description: res.overview,
				genres: res.genres.map((g)=>{
					return g.name + " "
				})
			});
		});

	}

	renderGenres() {
		if (!this.state.genres) return
		this.state.genres.map((genre) => {
			return genre.name + " ";
		})
	}

	render() {
		return (
			<Container className="movie-content">
				<Row>
					<Col md="8">
						<Col md="5">
							<img className="movie_img" src={this.state.poster_path?"https://image.tmdb.org/t/p/w500" + this.state.poster_path: ""} alt="movie" />
						</Col>
						<Col md="7">
							<Row className="movie_name">{this.state.title}</Row>
							<Row className="sub_title_movie">Genre</Row>
							{this.state.genres}
							<Row className="sub_title_movie">Language</Row>
							{this.state.language}
							<Row className="sub_title_movie">Rating</Row>
							{this.state.rating}
							<Row className="sub_title_movie">Release Date</Row>
							{this.state.release_date}
							<Row className="sub_title_movie">Descripton</Row>
							{this.state.description}
						</Col>
					</Col>
					<Col md="4">
						<TweetList/>
					</Col>
				</Row>
				<Row>
					<Col md="8">
						<CommentList userId={this.props.userId} movieId={this.props.id}/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default withTracker((props) => {
	return {
		id: props.match.params.id,
		userId: Meteor.userId(),
	};
})(MoviePage);
