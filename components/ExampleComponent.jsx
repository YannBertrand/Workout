import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element,
};

function ExampleComponent({ children }) {
  let nav;
  if (children) {
    nav = (
      <nav>
        <span><Link to="/">Home</Link> / </span>
        <span><Link to="/example">Example</Link> / </span>
        <span><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
          Example two deep with query and hash
        </Link></span>
      </nav>
    );
  } else {
    nav = (
      <nav>
        <span><Link to="/">Home</Link> / </span>
        <span><Link to="/example">Example</Link></span>
      </nav>
    );
  }

  return (
    <div className="pages">
      <div data-page="example" className="page">
        <div className="page-content pull-to-refresh-content">
          <div className="content-block">
            {nav}
            <p>
              This is an example page. Refresh the page or copy/paste the url to
              test out the redirect functionality (this same page should load
              after the redirect).
            </p>
            {children ||
              <div><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
                Example two deep with query and hash
              </Link></div>}
          </div>
        </div>
      </div>
    </div>
  );
}

ExampleComponent.propTypes = propTypes;

export default ExampleComponent;
