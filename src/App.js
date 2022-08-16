import "./App.css";
import Header from "./components/header";
import Home from "./pages/home";
import NewPost from "./pages/new-post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostContext";

function App() {
  return (
    <PostProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-post" element={<NewPost />} />
            <Route path="/edit-post/:id" element={<NewPost />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </Router>
    </PostProvider>
  );
}

export default App;
