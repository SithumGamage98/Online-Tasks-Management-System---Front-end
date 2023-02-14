
import './App.css';

import Task from './components/Tasks';
import taskHome from './components/TasksHome';

import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    
  <Router>
    <div class="1">
    <Route path="/task" exact component={Task}></Route>
    <Route path="/task1" exact component={taskHome}></Route>
  </div> 
</Router> 

);
} 

export default App;


