import AddArticle from "./components/AddArticle";
import Articles from "./components/Articles";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={
          <div>
            <h1>Register</h1>
            <h1>xyz</h1>
          </div>
        }/>
        <Route path="/" element={
          <div className="row">
          <div className="col-md-8">
            <Articles />
          </div>
          <div className="col-md-4">
            <AddArticle />
          </div>
        </div>
        }/>

        
      </Routes>
        <Navbar />
        
       
      </BrowserRouter>
    </div>
  );
}

export default App;
