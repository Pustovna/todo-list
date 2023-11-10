import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* <Route path="task" element={<Task />} /> */}

      </Routes>
    </>
  );
}

export default App;
