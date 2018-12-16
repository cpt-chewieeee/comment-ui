import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = theme => ({
  container: {
    display: 'flex',
    height: '100%',
    color: '#2b2b2b',
    paddingBottom: '6%',
    
  }
})
class List extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired
  }

  render () {
    const { classes } = this.props
    return (
      <div className={classes.container}>hello world</div>
    )
  }
}

export default withStyles(styles)(List)