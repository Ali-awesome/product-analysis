import './App.css';
import Nav from './components/Nav/Nav';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Reviews from './components/Reviews/Reviews';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
