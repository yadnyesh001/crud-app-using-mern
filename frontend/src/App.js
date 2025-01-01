import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import AllPosts from './components/AllPosts';
import UpdatePost from './components/UpdatePost';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/all" element={<AllPosts />} />
        <Route path="/update/:id" element={<UpdatePost />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
