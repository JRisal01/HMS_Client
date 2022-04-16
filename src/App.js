import Landing from './Component/Landing/Landing'
import Room from './Component/Room/Room';
import GalleryPage from './Component/Gallery/GalleryPage';

import Main from './Component/Login/Main';
import Login from './Component/Login/Login/index';
import Signup from './Component/Login/Signup';


import './css/style.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import RoomDetail from './Component/RoomDetail/RoomDetail';
import Dashboard from './Component/Dashboard/Dashboard';
import ContactPage from './Component/Contact/ContactPage';
import AdminRoom from './Component/Dashboard/Room/Room';
import Message from './Component/Dashboard/Message/Message';
import Gallery from './Component/Dashboard/Gallery/Gallery';


function App() {

  const user = localStorage.getItem("token");

  // console.log(JSON.parse(localStorage.getItem("user")));

  return (
      // <div className="App">
      <Router>
        <Routes>

          { user && <Route path="/" exact element={<Landing />} />}
          { user && <Route path="/room" exact element={<Room/>} />}
          { user && <Route path="/gallery" exact element={<GalleryPage/>} />}
          {<Route path="/login" exact element={<Login/>} />}
          {<Route path="/signup" exact element={<Signup />} />}
          { user && <Route path="/contact" exact element={<ContactPage />} />}
          { user && <Route path="/room/:id" exact element={<RoomDetail />} />}
          { user && <Route path="/admin" exact element={<Dashboard />} />}
          { user && <Route path="/admin/room" exact element={<AdminRoom />} />}
          { user && <Route path="/admin/message" exact element={<Message />} />}
          { user && <Route path="/admin/gallery" exact element={<Gallery />} />}


        </Routes>
        </Router>
    
  );
}

export default App;
