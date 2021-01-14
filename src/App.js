import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Homepage } from './pages/homepage.component'
import ShopPage from './pages/shop_page.component'
import Header from './components/header/header.component'
import { SignInAndSignUp } from './components/sign-in-and-sign-up/sign-in-and-signup.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    // open subscription (we needd to close subscription as well)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // firebase.auth will eventually put currentUser: null
      // this.setState({ currentUser: user});
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: userAuth })
      }
      // createUserProfileDocument(user);
    });
    // we want to be aware of user sign in activity so we can rerender the page accordingly while not refreshing the page
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} unsubscribeFromAuth={this.unsubscribeFromAuth} />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUp} />

          </Switch>
        </BrowserRouter>

      </div>

    );
  }
}

export default App;
