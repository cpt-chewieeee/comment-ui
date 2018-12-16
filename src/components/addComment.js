import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { handleTextFieldChange } from '../redux/actions/events';

const styles = theme => ({

})

class AddComment extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    comment: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    handleTextFieldChange: PropTypes.func.isRequired
  }
  render () {
    const { comment, userName, handleTextFieldChange } = this.props
    return <div>
      <TextField
        fullWidth
        value={userName}
        onChange={e => handleTextFieldChange('userName', e.target.value)}
        label='User Name' />
      <TextField
        multiline
        fullWidth
        value={comment}
        onChange={e => handleTextFieldChange('comment', e.target.value)}
        rowsMax="8"
        rows='4'
        label='Comment' />
    </div>
  }
}
const mapStateToProps = state => {
  return {
    comment: state.eventsStore.comment,
    userName: state.eventsStore.userName
  }
}
const mapDispatchToProps = {
  handleTextFieldChange
}
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddComment));