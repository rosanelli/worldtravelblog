import { Component } from 'react';
import { withRouter } from "react-router";
import ReactDOM from 'react-dom'

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      ReactDOM.findDOMNode(this).scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  render() {
    return this.props.children;
  }
}

export default withRouter(ScrollToTop);