import React from 'react';
import { Link } from 'react-router';

function Home() {
  const reactLink = 'https://github.com/facebook/react';
  const reactRouterLink = 'https://github.com/reactjs/react-router';
  const ghPagesLink = 'https://pages.github.com/';
  const repoReadmeLink = 'https://github.com/rafrex/spa-github-pages#readme';

  return (
    <div>
      <div className="pages">
        <div data-page="index" className="page">
          <div className="page-content">
            <div className="navbar no-border">
              <div className="navbar-inner">
                <div className="left">
                  <a href="#" className="link icon-only open-panel"><i className="icon icon-hamburger"></i></a>
                </div>
              </div>
            </div>
            <div className="content-block">
              <p className="center">
                Hello Eddie! Things looks alright.<br />
                Are you ready to rock?
              </p>
            </div>

            <div className="content-block">
              <div className="content-block-inner">Here comes another text block additionaly wrapped with "content-block-inner". Praesent nec imperdiet diam. Maecenas vel lectus porttitor, consectetur magna nec, viverra sem. Aliquam sed risus dolor. Morbi tincidunt ut libero id sodales. Integer blandit varius nisi quis consectetur. </div>
            </div>
            
            <div className="content-block">
              <nav><span><Link to="/">Home</Link></span></nav>
              <p>
                This is an example single page app built
                with <a href={reactLink}>React</a> and {' '}
                <a href={reactRouterLink}>React&nbsp;Router</a> using {' '}
                <code>browserHistory</code>. Navigate with the links below and
                refresh the page or copy/paste the url to test out the redirect
                functionality deployed to overcome {' '}
                <a href={ghPagesLink}>GitHub&nbsp;Pages</a> incompatibility
                with single page apps (like this one).
              </p>
              <p>
                Please see the <a href={repoReadmeLink}>repo readme</a> for
                instructions on how to use this boilerplate
                to deploy your own single page app using GitHub Pages.
              </p>
              <div><Link to="/example">Example page</Link></div>
              <div><Link to="/example/two-deep?field1=foo&field2=bar#boom!">
                Example two deep with query and hash
              </Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
