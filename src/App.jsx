import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <Header />
      <Route exact path='/' component={Homepage} />
    </Router>
  );
}

export default App;
