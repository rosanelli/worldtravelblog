import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Disqus from 'disqus-react';
import './post.scss';
import Map from './Map';
import Tags from './Tags';
import Photos from './Photos';
import Video from './Video';
import { DISQUS_SHORTNAME } from './constants';

class Post extends Component {

	constructor(props) {
		super(props)

		this.commentRef = React.createRef();

		this.state = {
			disqusConfig: {
				shortname: DISQUS_SHORTNAME,
				config: {
					url: `http://worldtravelblog.com${this.buildUrl()}`
				}
			}
		}
	}

	renderDate() {
		const postDate = new Date(this.props.date)
		return `${this.getMonthAbbr(postDate.getMonth())} ${postDate.getDate()}, ${postDate.getFullYear()}`
	}

	getMonthAbbr(monthIndex) {
		const months = {
			0: 'Jan',
			1: 'Feb',
			2: 'Mar',
			3: 'Apr',
			4: 'May',
			5: 'June',
			6: 'July',
			7: 'Aug',
			8: 'Sep',
			9: 'Oct',
			10: 'Nov',
			11: 'Dec'
		}

		return months[monthIndex]
	}

	showPhotos() {
		if (this.props.photos) {
			return <div className="pb-3"><Photos photos={this.props.photos} /></div>
		}
	}

	showVideo() {
		if(this.props.video) {
			console.log(this.props.video)
			return (
				<div className="card mb-3 text-center">
					<div className="card-body">
						<Video video={this.props.video} />
					</div>		
				</div>
			)
		}
	}

	createMap() {
		if(this.props.location) {
			return <Map location={this.props.location} zoom={this.props.zoom} />
		}
	}

	buildUrl() {
		return `/post/${this.props.id}/${this.props.slug}`
	}

	showDisqus() {
		if(this.props.singlePage) {
			return <div id="comment"><Disqus.DiscussionEmbed ref={this.commentRef} {...this.state.disqusConfig} /></div>				
		}
	}

	render() {
		return (
			<div>
				<div className="row">
					<div className="col-md-8 col-sm-12">						

						{this.showPhotos()}

						{this.showVideo()}
						
						<div dangerouslySetInnerHTML={{__html: this.props.body}} />
					</div>
					<div className="col-md-4 col-sm-12">
						
						{this.createMap()}					
						
						<ul className="sidebar-list fa-ul pt-3">
							<li>
								<span className="fa-li"><i className="fas fa-calendar-alt"></i></span>
								Posted on {this.renderDate()}							
							</li>
							<li>
								<span className="fa-li"><i className="fas fa-map-marker-alt"></i></span>
								{this.props.location}
							</li>
							<li>
								<span className="fa-li"><i className="fas fa-link"></i></span>
								<Link to={this.buildUrl()}>Permalink</Link>
							</li>
							<li>
								<span className="fa-li"><i className="fas fa-comment"></i></span>
								<a href={this.props.singlePage ? '#comment' : `${this.buildUrl()}#comment` }>
									<Disqus.CommentCount {...this.state.disqusConfig}>
	                    Comments
	                </Disqus.CommentCount>
	              </a>  
							</li>							
							<li>
								<span className="fa-li"><i className="fas fa-tags"></i></span>
								<Tags tags={this.props.tags} />
							</li>
						</ul>
					</div>
				</div>
				<div className="row">
					<div className="col">	
						{this.showDisqus()}
						<hr />
					</div>
				</div>				
			</div>
		)
	}
}

Post.propTypes = {
	singlePage: PropTypes.bool.isRequired,
	date: PropTypes.number.isRequired,
	photos: PropTypes.array,
	video: PropTypes.string,
	location: PropTypes.string,
	zoom: PropTypes.number,
	id: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	body: PropTypes.string
}

export default Post;
