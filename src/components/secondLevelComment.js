import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import Reply from '@material-ui/icons/Reply';
import ThirdLevelComment from './thirdLevelComment';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import { connect } from 'react-redux';
import { addThirdLevelComment } from '../redux/actions/events';

const styles = theme => ({
  container: {
    backgroundColor: '#2c2f34',
    position: 'relative',
    color: '#ffffff',
    margin: '10px 20px 8px 120px',
    padding: '20px 60px 20px 20px',
    '& .title': {
      display: 'flex', 
      justifyContent: 'space-between'
    }
  },
  expand: {
    marginLeft: 120
  },
  fab: {
    position: 'absolute',
    bottom: 12,
    right: 12
  }
})
class SecondLevelComment extends Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    rootId: PropTypes.number.isRequired,
    parentId: PropTypes.number.isRequired,
    addThirdLevelComment: PropTypes.func.isRequired
  }
  constructor(props) {
    super(props)

    this.state = {
      hover: false,
      open: false
    }
  }
  render () {
    const { children, classes, user, date, list, addThirdLevelComment, rootId, parentId } = this.props
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
              onClick={() => addThirdLevelComment(rootId, parentId)}
            >
              <Reply />
            </Fab>
          }
        </Paper>
        {
          list.length > 0 && <div className={classes.expand} onClick={() => this.setState({ open: !open })}>
            <IconButton size='small'>
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

              return <ThirdLevelComment 
                key={i}
                user={subComment.user}
                date={subComment.dateCreated.toString()}
                list={subComment.children}
              >
                {subComment.comment}
              </ThirdLevelComment>
            })
          }
        </Fragment>
      </Fragment>
    )
  }
}
const mapStateToProps = state => ({})
const mapDispatchToProps = {
  addThirdLevelComment
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SecondLevelComment));