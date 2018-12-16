import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { addComment } from '../redux/actions/events';
import { connect } from 'react-redux';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const styles = theme => {
  return {
    container: {
      top: 'auto',
      bottom: 0
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -30,
      left: 0,
      right: 0,
      margin: '0 auto'
    }
  }
}
class Footer extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired
  }
  render () {
    const { classes, addComment } = this.props
    return (
      <AppBar position="absolute" color="primary" className={classes.container}>
        <Toolbar>
          <Fab color="secondary" aria-label="Add" className={classes.fabButton} onClick={addComment}>
            <AddIcon/>
          </Fab>
        </Toolbar>
      </AppBar>
    )
  }
}
const mapStateToProps = state => {

  return {}
}
const mapDispatchToProps = {
  addComment
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Footer));