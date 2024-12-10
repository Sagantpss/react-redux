import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Nestedroutingpage from './components/Nestedroutingpage';
import YouTube from './components/Youtube';
import Facebook from './components/Facebook';
import Instagram from './components/Instagram';
import Login from './components/Login';
import Protected from './components/Protected';
import ApiPage from './components/ApiPage';
import PreviousProps from './components/PreviousProps';
import ReactRedux from './ReactRedux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<Protected Component={Home}/>} />
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/app' element={<App />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/nestedrouting/' element={<Nestedroutingpage />}>
          <Route path='facebookpage' element={<Facebook />} />
          <Route path='youtubepage' element={<YouTube />} />
          <Route path='instagrampage' element={<Instagram />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/apipage' element={<ApiPage />} />
        <Route path='/react-redux' element={<ReactRedux />} />
        <Route path='/previousprops' element={<PreviousProps />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
