import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Reply from '@material-ui/icons/Reply';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import SecondLevelComment from './secondLevelComment';
import { addSecondLevelComment } from '../redux/actions/events';
import { connect } from 'react-redux';

const styles = theme => ({
  container: {
    backgroundColor: '#2c2f34',
    position: 'relative',
    color: '#ffffff',
    margin: '10px 20px 8px 60px',
    padding: '20px 60px 20px 20px',
    '& .title': {
      display: 'flex', 
      justifyContent: 'space-between'
    }
  },
  expand: {
    marginLeft: 60
  },
  fab: {
    position: 'absolute',
    bottom: 12,
    right: 12
  }
})

class Comment extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    rootId: PropTypes.number.isRequired,
    addSecondLevelComment: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {
      hover: false,
      open: false
    }
  }
  render () {
    const { children, classes, user, date, list, addSecondLevelComment, rootId } = this.props
    const { hover, open } = this.state

    return (
      <Fragment>
        <Paper 
          className={classes.container}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <div className='title'>
            <span>{user}</span>
            <b>{date}</b>
          </div>
          <p>{children}</p>
          {
            hover && <Fab 
              color='secondary' 
              className={classes.fab}
              onClick={() => addSecondLevelComment(rootId)}
            >
              <Reply />
            </Fab>
          }
        </Paper>
        {
          list.length > 0 && <div className={classes.expand}>
            <IconButton size='small' onClick={() => this.setState({ open: !open })}>
              {
                open 
                ? <ExpandLess/>
                : <ExpandMore/>
              }
            </IconButton>
          </div>
        }
        <Fragment>
          {
            open && list.map((subComment, i) => {
              return <SecondLevelComment 
                key={i}
                rootId={rootId}
                parentId={subComment.id}
                user={subComment.user}
                date={subComment.dateCreated.toString()}
                list={subComment.children}
              >
                {subComment.comment}
              </SecondLevelComment>
            })
          }
        </Fragment>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = {
  addSecondLevelComment
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Comment));