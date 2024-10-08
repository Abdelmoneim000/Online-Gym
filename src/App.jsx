import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from './pages/SignUp';
import Landing from './pages/landing';
import LogInPage from './pages/LogIn';
import Payment from './pages/Payment';
import './App.css';
import Courses from './pages/Courses';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/login' element={<LogInPage />}/>
        <Route path='/payments' element={<Payment />} />
        <Route path='/courses' element={<Courses />}/>
      </Routes>
    </Router>
  );
}

export default App;
