import React, { Component, Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  container: {
    backgroundColor: '#2c2f34',
    position: 'relative',
    color: '#ffffff',
    margin: '10px 20px 8px 180px',
    padding: '20px 60px 20px 20px',
    '& .title': {
      display: 'flex', 
      justifyContent: 'space-between'
    }
  },
  fab: {
    position: 'absolute',
    bottom: 12,
    right: 12
  }
})
class ThirdLeveComment extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }

  render () {
    const { children, classes, user, date } = this.props
  
    return (
      <Fragment>
        <Paper className={classes.container}>
          <div className='title'>
            <span>{user}</span>
            <b>{date}</b>
          </div>
          <p>{children}</p>
        </Paper>
        
      </Fragment>
    )
  }
}

export default withStyles(styles)(ThirdLeveComment);