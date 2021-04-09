import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/week10-day04/'>
              <Home />
            </Route>
            <Route path='/week10-day04/profile'>
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App
