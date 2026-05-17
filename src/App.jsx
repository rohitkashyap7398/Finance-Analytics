import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Platform from './pages/Platform';
import Pricing from './pages/Pricing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import BookDemo from './pages/BookDemo';
import Dashboard from './pages/Dashboard';

function MainLayout() {
  return (
    <div className="app-container">
      <div className="gradient-bg bg-primary" />
      <div className="gradient-bg bg-secondary" />
      <Navbar />
      <main className="main-content" style={{ minHeight: '100vh', paddingTop: '80px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/demo" element={<BookDemo />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
