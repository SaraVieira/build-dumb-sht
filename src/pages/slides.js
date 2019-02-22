import React, { Component } from 'react';
import { navigate } from 'gatsby';

class Slides extends Component {
  componentDidMount() {
    navigate(`/slides/1`, { replace: true });
  }
  render() {
    return <div />;
  }
}

export default Slides;
