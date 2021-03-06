import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import AllProducts from './screens/AllProducts.js';

const App = () => {
  return (
    <Router>
      <main>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/products' component={AllProducts} exact />
        <Route path='/products/:id' component={ProductScreen} />
      </main>
    </Router>
  );
};

export default App;
