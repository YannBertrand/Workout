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
          <div className="navbar">
            <div className="navbar-inner">
              <div className="left">
                <a href="#" className="link icon-only open-panel"><i className="icon icon-bars"></i></a>
              </div>
              <div className="center sliding">Workout 💪</div>
            </div>
          </div>
          <div className="pages navbar-through toolbar-through">
            <div data-page="index" className="page">
              <div className="page-content">
                <a href={repoLink}>GitHub</a>
                <nav>
                  {generateMapMenu()}
                </nav>
                {children}
                <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
                  <a href="http://yann-bertrand.fr" className="extended-link">
                    Yann Bertrand
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="toolbar">
            <div className="toolbar-inner">
              <a href="#" className="link">Link 1</a>
              <a href="#" className="link">Link 2</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
