import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login/LoginPage';
import RegisterPage from './pages/Register/RegisterPage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import NewsPagePage from './pages/NewsPage/NewsPagePage';
import UserPage from './pages/UserPage/UserPage'
import ArticlePage from './pages/Article/ArticlePage'


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<App />} />
          <Route path="/newsadmin" element={<NewsPagePage />} />
          <Route path="/usersadmin" element={<UserPage />} />
          <Route path="/article/:title/:urlToImage/:content" element={<ArticlePage />}/>
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
