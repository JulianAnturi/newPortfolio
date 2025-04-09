import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeLayout from './components/HomeLayout';
// import { Profile } from './pages/Profile.jsx'
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import Libraries from './pages/Libraries';
import Background from './components/background/Background';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Background />}>
          {/* <Route index element={<Navigate to="/perfil" />} /> */}
          {/* <Route path="perfil" element={<Profile />} /> */}
          {/* <Route path="proyectos" element={<Projects />} /> */}
          {/* <Route path="librerias" element={<Libraries />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
