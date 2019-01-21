import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './footer.scss';

class Footer extends Component {
	path(page) {
		let path = '/'
		if(this.props.tag) {
			path += `tag/${this.props.tag}/`
		}
		 
		if(page > 1) {
			path += `page/${page}`
		}
		
		return path
	}

	previousLink() {
		if(this.props.currentPage === 1) {
			return null
		}

		return (
			<Link to={this.path(this.props.currentPage - 1)}>&#171; Previous</Link>
		)
	}

	nextLink() {
		if(this.props.currentPage >= this.props.totalPages) {
			return null
		}

		return (
			<Link to={this.path(this.props.currentPage + 1)}>Next &#187;</Link>
		)
	}

	render() {
		return (
			<div className="row py-" id="footer">
				<div className="col-sm-6 text-left">
					<span className="h1">{this.previousLink()}</span>
				</div>
				<div className="col-sm-6 text-right">
					<span className="h1">{this.nextLink()}</span>
				</div>
			</div>
		)
	}

}

Footer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  tag: PropTypes.string
}

export default Footer;