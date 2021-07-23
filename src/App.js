import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path='/searchpage'>
            <SearchPage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
