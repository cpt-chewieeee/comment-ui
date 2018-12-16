import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({})

class Comment extends Component {

  render () {
    return (
      <div>hello from comment</div>
    )
  }
}

export default withStyles(styles)(Comment);