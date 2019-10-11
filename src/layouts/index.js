import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, navigate, StaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Swipeable from 'react-swipeable';
import Transition from '../components/transition';
import Chrome from '../components/browser';

import './dm.css';
import './index.css';
import './normalize.css';

const Header = ({ name, title, date }) => (
  <header>
    <Link to="/1">
      <span>{title}</span>
    </Link>
    <b>{date}</b>
  </header>
);

const Text = [
  {
    slide: '19',
    title: 'useSmoosh',
    url: 'https://smoosh.fun',
  },
  {
    slide: '28',
    title: 'Uber',
    url: 'https://uber.com',
  },
  {
    slide: '34',
    title: 'Ikea',
    url: 'https://www.ikea.com/',
  },
  {
    slide: '31',
    title: 'Airbnb',
    url: 'https://airbnb.com',
  },
  {
    slide: '55',
    title: 'Is it Raining outside',
    url: 'https://isitrainingoutsi.de/',
  },
  {
    slide: '57',
    title: 'PostCSS Caralho',
    url: 'https://github.com/SaraVieira/postcss-caralho',
  },
  {
    slide: '59',
    title: 'Babel Plugin Caralho',
    url: 'https://github.com/SaraVieira/babel-plugin-caralho',
  },
  {
    slide: '61',
    title: 'Magic Piano',
    url: 'https://magicpiano.now.sh',
  },
  {
    slide: '62',
    title: 'Magic Drums',
    url: 'https://magicdrums.now.sh',
  },
  {
    slide: '64',
    title: 'BURNITDOWN',
    url: 'https://github.com/SaraVieira/BURNITDOWN',
  },
  {
    slide: '66',
    title: 'Mother CLI',
    url: 'https://github.com/SaraVieira/mother',
  },
  {
    slide: '70',
    title: 'NPM Drinking Game',
    url: 'https: //npmdrinkinggame.party',
  },
  {
    slide: '71',
    title: 'Make Frontend Shit Again',
    url: 'http://makefrontendshitagain.party',
  },
  { slide: '68', title: 'UseClippy', url: 'https://use-clippy.netlify.com/' },

  {
    slide: null,
    title: 'Build Dumb Shit',
    url: 'https://builddumbshit.wtf',
  },
];

const getText = path => {
  const text = Text.find(t => path.includes(t.slide));
  return text || Text.find(t => t.slide === null);
};

class TemplateWrapper extends Component {
  NEXT = [13, 32, 39];
  PREV = 37;

  swipeLeft = () => {
    this.navigate({ keyCode: this.NEXT[0] });
  };

  swipeRight = () => {
    this.navigate({ keyCode: this.PREV });
  };

  navigate = ({ keyCode }) => {
    const now = this.props.data.slide.index;
    const slidesLength = this.props.slidesLength;
    // eslint-disable-next-line no-restricted-globals
    if (now) {
      if (keyCode === this.PREV && now === 1) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1 && now === slidesLength) {
        return false;
      } else if (this.NEXT.indexOf(keyCode) !== -1) {
        navigate(`/${now + 1}`);
      } else if (keyCode === this.PREV) {
        navigate(`/${now - 1}`);
      }
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.navigate);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.navigate);
  }

  render() {
    const { location, children, site } = this.props;
    const slide = location.pathname;
    return (
      <div>
        <Helmet title={`Build Dumb Shit 💩`} />
        <Fragment>
          <Header
            name={site.siteMetadata.name}
            title={site.siteMetadata.title}
            date={site.siteMetadata.date}
          />

          <Swipeable
            onSwipedLeft={this.swipeLeft}
            onSwipedRight={this.swipeRight}
          >
            <div className="chrome">
              <Chrome title={getText(slide)} className="chrome-window">
                <Transition location={location}>
                  <div id="slide">{children}</div>
                </Transition>
              </Chrome>
            </div>
          </Swipeable>
        </Fragment>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.node,
  data: PropTypes.object,
};

export default props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            name
            title
            date
          }
        }
        allSlide {
          edges {
            node {
              id
            }
          }
        }
      }
    `}
    render={data => (
      <TemplateWrapper
        site={data.site}
        slidesLength={data.allSlide.edges.length}
        {...props}
      />
    )}
  />
);
