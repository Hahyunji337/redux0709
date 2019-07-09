import React from 'react';
import '../assets/css/App.css';
import Footer from './Footer'
import AddTodo from '../containers/AddTodo';
import TodoList from '../containers/TodoList'

const App = () => (
  
    <div className="App">
      <AddTodo/>
      <TodoList/>
      {/* <Footer/> */}
    </div>
)

export default App;
