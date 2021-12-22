import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Products from './Pages/Products';
import Offices from './Pages/Offices';
import News from './Pages/News';
import Contact from './Pages/Contact';
import Carries from './Pages/Carries';
import Header from './Organisms/Header/Header';
import ReadMoreProduct from './Pages/ReadMoreProduct';

const App = function () {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:id">
          <ReadMoreProduct />
        </Route>
        <Route path="/offices">
          <Offices />
        </Route>
        <Route path="/carriers">
          <Carries />
        </Route>
        <Route path="/news">
          <News />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
