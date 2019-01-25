import React, { Component } from 'react';
import PropTypes from 'prop-types';
import blogData from './blogData.min.json';
import Posts from './Posts';
import { PER_PAGE } from './constants';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: blogData,
      totalPages: blogData.length / PER_PAGE
    })
  }

  selectPosts() {
    const start = (this.props.currentPage - 1) * PER_PAGE
    const end = start + PER_PAGE

    let posts = this.state.posts
    if(this.props.tag) {
      posts = this.getTaggedPosts(this.props.tag)
    } else if(this.props.id) {
      posts = this.getPostById(this.props.id)
    }

    return {
      singlePage: (this.props.id !== undefined),
      tag: this.props.tag,
      posts: posts.slice(start, end),
      currentPage: this.props.currentPage,
      totalPages: Math.ceil(posts.length / PER_PAGE)
    }
  }

  getTaggedPosts(tag) {
    return this.state.posts.filter(post =>
      post.tags.includes(this.props.tag.toLowerCase())
    )
  }

  getPostById(id) {
    const post = this.state.posts.find(post =>
      post.id === id
    )

    return (post) ? [post] : []
  }

  render() {
    return (
      <div>
        <Posts {...this.selectPosts()} />
      </div>
    )
  }
}

Main.propTypes = {
  currentPage: PropTypes.number.isRequired,
  tag: PropTypes.string,
  id: PropTypes.number
}

Main.defaultProps = {
  currentPage: 1
};

export default Main;