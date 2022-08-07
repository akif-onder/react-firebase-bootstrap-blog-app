import AddArticle from "./components/AddArticle";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Article from "./components/Article";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/article/:id" element={<Article/>}/>
          <Route
            path="/"
            element={
              <div className="row">
                <div className="col-md-9">
                  <Articles />
                </div>
                <div className="col-md-3">
                  <AddArticle />
                </div>
              </div>
            }
          />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
