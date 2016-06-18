import React, {Component, PropTypes} from 'react';
import {createStyleSheet} from 'stylishly/lib/styleSheet';
import Paper from '../components/Paper';
import PageTitle from './PageTitle';
import Toolbar, {ToolbarTitle} from '../components/Toolbar';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../components/Table';

export const styleSheet = createStyleSheet('Results', () => {
  return {
    example: {
      width: '100%',
      fabsolute: {
        position: 'fixed',
        bottom: 20,
        right: 20,
      },
    },
  };
});

export default class Results extends Component {
  static contextTypes = {
    styleManager: PropTypes.object.isRequired,
  };

  state = {
    dialogOpen: false,
  };

  handleDialogOpen = () => {
    this.setState({dialogOpen: true});
  };

  handleDialogClose = () => {
    this.setState({dialogOpen: false});
  };

  render() {
    const classes = this.context.styleManager.render(styleSheet);

    return (
      <div className={classes.example}>
        <PageTitle>Link Relevancy</PageTitle>
        <Paper zDepth={2}>
          <Toolbar>
            <ToolbarTitle>All Results</ToolbarTitle>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Webpage
                </TableCell>
                <TableCell numeric={true} width="15%" compact={true}>
                  Domain Auth.
                </TableCell>
                <TableCell numeric={true} width="15%" compact={true}>
                  Page Auth.
                </TableCell>
                <TableCell numeric={true} width="15%" compact={true}>
                  Ext.Eq. Links
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell>{result.url}</TableCell>
                  <TableCell numeric={true} width="15%" compact={true}>
                    {result.domainAuthority}
                  </TableCell>
                  <TableCell numeric={true} width="15%" compact={true}>
                    {result.pageAuthority}
                  </TableCell>
                  <TableCell numeric={true} width="15%" compact={true}>
                    {result.externalEquityLinks}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

const data = {
  error: null,
  loading: false,
  page: 1,
  perPage: 15,
  total: 2,
  results: [
    {
      id: 144,
      pageId: 10,
      reportId: 26,
      url: 'http://nextrestaurants.com/social-media/beginners-guide-restaurant-social-media-marketing/',
      domainAuthority: 26,
      pageAuthority: 20,
      externalEquityLinks: 141,
    },
  ],
};
