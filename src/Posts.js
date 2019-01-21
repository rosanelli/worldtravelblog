import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Footer from './Footer';

class Posts extends Component {
	postsHeader() {
		if(this.props.tag) {
			return <div className="h1 pb-3">Posts tagged <span className="font-italic">{this.props.tag}</span></div>
		}
	}

	showPosts() {
		if(this.props.posts.length > 0) {
			return this.props.posts.map(post => (<Post {...post} singlePage={this.props.singlePage} key={post.id} />))
		} else {
			return <div className="alert alert-danger" role="alert">No Posts Found</div>
		}
	}

	render() {
		return (
			<div>
				{this.postsHeader()}

				{this.showPosts()}

        <Footer currentPage={this.props.currentPage} totalPages={this.props.totalPages} tag={this.props.tag} />
			</div>
		)
	}
}

Posts.propTypes = {
	singlePage: PropTypes.bool.isRequired,
	tag: PropTypes.string,
	posts: PropTypes.array.isRequired, 
	currentPage: PropTypes.number.isRequired,
	totalPages: PropTypes.number.isRequired
}

export default Posts;