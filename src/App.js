import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './lib/redux';


import PureTaskList from './components/TaskList';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PureTaskList />
      </Provider>
    )
  }
}

export default App;
