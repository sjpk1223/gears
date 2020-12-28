import './App.css';
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import { Homepage } from './pages/homepage.component'
import ShopPage from './pages/shop_page.component'
import Header from './components/header/header.component'
import {SignInAndSignUp} from './components/sign-in-and-sign-up/sign-in-and-signup.component'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component ={SignInAndSignUp} />

        </Switch>
      </BrowserRouter>
      
    </div>

  );
}

export default App;
