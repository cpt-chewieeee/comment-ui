import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RootComment from './rootComment';

const styles = theme => ({
  container: {
    display: 'flex',
    height: '100%',
    color: '#2b2b2b',
    overflow: 'auto',
    marginBottom: '6%',
    flexDirection: 'column',
    // justifyContent: 'flex-end'
  }
})
class List extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    comments: PropTypes.object.isRequired
  }

  render () {
    const { classes, comments } = this.props
    return (
      <div className={classes.container}>
        {
          Object.keys(comments).map((key, index) => {
            return <RootComment 
              key={index} 
              rootId={comments[key].id}
              user={comments[key].user} 
              date={comments[key].dateCreated.toString()}
              list={comments[key].children}
            > 
              {comments[key].comment}
            </RootComment>
          })
        }
      </div>
    )
  }
}
const mapDispatchToProps = {

}
const mapStateToProps = state => {

  return {
    comments: state.commentsStore.comments
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(List));