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
import { closeAddComment } from './redux/actions/events';
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


class App extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    openAddComment: PropTypes.bool.isRequired,
    closeAddComment: PropTypes.func.isRequired
  }
  componentDidMount () {
    this.props.fetchAllComments()
  }
  render() {
    // console.log(this.props)
    const { classes, openAddComment, closeAddComment } = this.props
    return (
      
        <div className={classes.root}>
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
              <Button onClick={() => console.log('submit')} color='primary'>Submit</Button>
            </DialogActions>
          </Dialog>
          
        </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    openAddComment: state.eventsStore.openAddComment
  }
}
const mapDispatchToProps = {
  closeAddComment,
  fetchAllComments
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(App));
