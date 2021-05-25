import './App.css';
import Navbar from './components/Navbar.jsx';
import Exercises from './components/Exercises';
import CreateExercise from './components/CreateExercise';
import EditExercise from './components/EditExercise';
import CreateUser from './components/CreateUser';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <div className='container'>
            <Route exact path='/' component={Exercises}></Route>
            <Route exact path='/create-exercise' component={CreateExercise}></Route>
            <Route exact path='/exercise/:id' component={EditExercise}></Route>
            <Route exact path='/create-user' component={CreateUser}></Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
