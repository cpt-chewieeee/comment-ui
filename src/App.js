import React, { Component } from 'react';
import thunk from 'redux-thunk';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    height: '100%'
  }
})

const store = createStore(rootReducer, applyMiddleware(thunk))

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          
        </header>
      </div>
    );
  }
}

export default App;
