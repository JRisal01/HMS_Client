import Landing from './Component/Landing/Landing'
import Room from './Component/Room/Room';
import Login from './Component/Login/Login';
import GalleryPage from './Component/Gallery/GalleryPage';

// import Nav from './Component/Dashboard/Nav'


import './css/style.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RoomDetail from './Component/RoomDetail/RoomDetail';
import Dashboard from './Component/Dashboard/Dashboard';
import ContactPage from './Component/Contact/ContactPage';
import AdminRoom from './Component/Dashboard/Room/Room';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/room">
            <Room />
          </Route>
          <Route exact path="/gallery">
            <GalleryPage />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path="/room/:id">
            <RoomDetail />
          </Route>
          <Route exact path="/admin">
            <Dashboard />
          </Route>
          <Route exact path="/admin/room">
            <AdminRoom />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

