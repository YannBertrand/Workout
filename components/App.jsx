import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  const repoLink = 'https://github.com/YannBertrand/Workout';

  return (
    <div>
      <div className="statusbar-overlay"></div>

      <div className="panel-overlay"></div>

      <div className="panel panel-left panel-reveal">
        <div className="content-block">
          <p>Left panel content goes here</p>
        </div>
      </div>

      <div className="views">
        <div className="view view-main">
          {children}
          <nav>
            {generateMapMenu()}
          </nav>
        </div>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
