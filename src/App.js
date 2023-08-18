
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Login from './Pages/Login';
import Pricing from './Pages/Pricing';
import NotFound from './Pages/NotFound';
import Navigation from './Components/Navigation';
import Profile from './Pages/Profile';
import Project from './Pages/Project';
import Freeprice from './Pages/Freeprice';
import Premiumprice from './Pages/Premiumprice';
import Freemium from './Pages/Freemium';
import Forpremiumuser from './Pages/Forpremiumuser';
import ProtectedRoute from './Pages/ProtectedRoute';

function App() {
  return (
    <div className="App">
     <Navigation/>
     <Routes>
      {/* * is for not found element  */}
     <Route path='*' element={<NotFound/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/user/:userId' element={<Profile/>}></Route>
      <Route path='/user/:userId/:projectId' element={<Project/>}></Route>

      <Route element={<ProtectedRoute/>}>

          <Route path='/prime' element={<Forpremiumuser/>}></Route>
      </Route>
      
      <Route path='/pricing' element={<Pricing/>}>
        <Route path='free' element={<Freeprice />}/>
        <Route path='premium' element={<Premiumprice />}/>
        <Route path='freemium' element={<Freemium />}/>

      </Route>
     </Routes>
    </div>
  );
}

export default App;
