import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home/Home.component';

const App = () => (
  <div className="dark:bg-slate-700 dark:text-white h-full">
    <Router>
      <nav className="p-4 bg-gray-200 flex align-center justify-center dark:bg-slate-800">
        <ul className="flex gap-4 items-center">
          <li className="text-slate-800 dark:text-white">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  </div>
);

export default App;
