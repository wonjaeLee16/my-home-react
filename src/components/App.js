import Home from 'views/Home';
import Tasks from 'views/Tasks';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
      </Routes>
    </div>
  );
}