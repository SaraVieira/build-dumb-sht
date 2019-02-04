import React from 'react';
import { graphql } from 'gatsby';

export default ({ data, transition }) => (
  <div
    className="content"
    style={transition && transition.style}
    dangerouslySetInnerHTML={{ __html: data.slide.html }}
  />
);

export const query = graphql`
  query SlideQuery($index: Int!) {
    slide(index: { eq: $index }) {
      html
      index
    }
  }
`;
