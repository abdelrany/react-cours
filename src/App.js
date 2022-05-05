import React from 'react';
import Contacts from './component/Contacts';
import Navbar from './component/Navbar';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { Provider } from './component/Context';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './component/pages/About';
import PageNotFound from './component/pages/PageNotFound';

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Navbar home="Home " aboutus="About Us" addcontact='Add Contact' />
          <Routes>
            <Route path='/' element={<Contacts />} />
            <Route path='/contact/add' element={<AddContact />} />
            <Route path='/contact/edit/:id' element={<EditContact />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </Provider>

  );
}

export default App;
