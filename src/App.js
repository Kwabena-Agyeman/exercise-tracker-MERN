import './App.css';
import Navbar from './components/Navbar.jsx';
import Exercises from './components/Exercises';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <div className='container'>
            <Route exact path='/' component={Exercises}></Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
