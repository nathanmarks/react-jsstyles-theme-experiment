/* eslint-disable react/no-danger */
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom/server';

/**
 * Wrapper component containing HTML metadata and boilerplate tags.
 * Used in server-side code only to wrap the string output of the
 * rendered route component.
 *
 * The only thing this component doesn't (and can't) include is the
 * HTML doctype declaration, which is added to the rendered output
 * by the server.js file.
 */
export default class Html extends Component {
  static propTypes = {
    app: PropTypes.func,
    assets: PropTypes.object
  };

  render() {
    const { assets, app } = this.props;
    const content = ReactDOM.renderToString(
      React.createElement(app)
    );
    const sheets = app.styleManager.jss.sheets.registry;

    return (
      <html lang="en-us">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>JS Styles Experiment</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:regular,bold,italic,thin,light,bolditalic,black,medium&amp;lang=en" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          {sheets.map((sheet, index) => (
            <style
              key={index}
              data-meta={sheet.options.meta}
              dangerouslySetInnerHTML={{ __html: sheet.toString() }}
              type="text/css"
            />
          ))}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
          <script src={assets.javascript.main} charSet="UTF-8" />
        </body>
      </html>
    );
  }
}
