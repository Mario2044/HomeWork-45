
import './App.css';
import UsersList from './component/component';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Albums from './component/album';
import Photos from './component/photo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;
