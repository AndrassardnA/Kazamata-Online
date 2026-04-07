import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/main-layout';
import Home from './pages/home';
import AuthLayout from './layouts/auth-layout';
import About from './pages/about';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import NotFound from './pages/not-found';
import LearnHome from './pages/learn/learn-home';
import AdventureList from './pages/play/adventure-list';
import WriteHome from './pages/write/write-home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='learn' element={<LearnHome />}></Route>
          <Route path='play' element={<AdventureList />}></Route>
          <Route path='write' element={<WriteHome />}></Route>
        </Route>
        <Route element={<AuthLayout />}>
          <Route path='login' element={<Login />}></Route>
          <Route path='register' element={<Register />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
