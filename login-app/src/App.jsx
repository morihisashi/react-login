import { Routes, Route } from 'react-router-dom';
import { Homepage } from './pages/Homepage';
import { SignUp } from './pages/SignUp';
import { Confirm } from './pages/SignUp/confirm';
import { Complete } from './pages/SignUp/complete';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/complete" element={<Complete />} />
    </Routes>
  );
}

export default App;
