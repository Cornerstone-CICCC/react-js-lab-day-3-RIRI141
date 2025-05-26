import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/Blog';
import BlogDetail from './pages/BlogDetail';
import AddPost from './pages/AddPost';
import Layout from './components/Layout';
import EditPost from './pages/EditPost';

function App() {
  return (
    <Layout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<BlogList />} />
      <Route path="/blog/:id" element={<BlogDetail />} />
      <Route path="/blog/new" element={<AddPost />} />
      <Route path="/blog/edit/:id" element={<EditPost />} />
    </Routes>
  </Layout>
  );
}

export default App;
