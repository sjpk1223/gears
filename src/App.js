import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import { Homepage } from './pages/homepage.component'
import ShopPage from './pages/shop_page.component'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/shop" component={ShopPage} />

        </Switch>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
