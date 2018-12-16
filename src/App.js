import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Footer from './components/footer';
import List from './components/list';
import { connect } from 'react-redux';
import AddComment from './components/addComment';
import { closeAddComment, handleSubmit } from './redux/actions/events';
import { fetchAllComments } from './redux/actions/comments';

const styles = theme => ({
  root: {
    display: 'flex',
    
    flexWrap: 'nowrap',
    height: '100%',
    '& .main-container': {
      maxWidth: 1080,
      width: '100%',
      position: 'relative',
      margin: '30px auto',
      display: 'flex',
      flexDirection: 'column'
    },
    '& .header': {
      padding: theme.spacing.unit * 2
    },
    '& .footer-container': {
      top: 'auto',
      bottom: 0
    }
  },
  dialog: {
    '& .dialog-content': {
      width: 200
    }
  }
})

function Transition(props) {
  return <Slide direction="up" {...props} />;
}
function validComment (comment) {
  const lower = comment.toLowerCase()
  return lower.indexOf('script') === -1
}
function formatComment (comment) {
  console.log(comment)


  return comment.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    openAddComment: PropTypes.bool.isRequired,
    closeAddComment: PropTypes.func.isRequired,
    comment: PropTypes.string,
    userName: PropTypes.string
  }
  componentDidMount () {
    this.props.fetchAllComments()
  }
  handleSubmit = () => {
    console.log(this.props.comment)
    const { comment, userName, handleSubmit } = this.props

    if(comment.length === 0 || userName === 0 || !validComment(comment)) {
      console.log('invalid or failed', )
      return
    }
    const validString = formatComment(comment)
    console.log('validComment', validString)
    handleSubmit()
  }
  render() {
    // console.log(this.props)
    const { classes, openAddComment, closeAddComment } = this.props
    return (
      
        <div className={classes.root}>
          <img src={'javascript:alert("XSS");'} />
          <Paper className='main-container'>
            <Typography className='header' variant='h5' gutterBottom>
              Comments
            </Typography>
            <List />
            <Footer />  
          </Paper>

          <Dialog 
            open={openAddComment}
            TransitionComponent={Transition}
            className={classes.dialog}
            keepMounted
            onClose={closeAddComment}
            aria-labelledby='add-comment-dialog-title'
            aria-describedby='add-comment-dialog-description'
          >
            <DialogTitle id='add-comment-dialog-title'>
              Add Comment
            </DialogTitle>
            <DialogContent className='dialog-content'>
              <AddComment />
            </DialogContent>
            <DialogActions>
              <Button onClick={closeAddComment} color='primary'>Close</Button>
              <Button onClick={this.handleSubmit} color='primary'>Submit</Button>
            </DialogActions>
          </Dialog>
          
        </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comment: state.eventsStore.comment,
    userName: state.eventsStore.userName,
    openAddComment: state.eventsStore.openAddComment
  }
}
const mapDispatchToProps = {
  closeAddComment,
  fetchAllComments,
  handleSubmit
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
