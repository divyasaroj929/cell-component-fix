import { Route, Routes } from "react-router-dom";
import Home from "./components/navbar/All-component/Home";
import YourWork from "./components/navbar/All-component/YourWork";
import PullRequest from "./components/navbar/All-component/PullRequest";
import Repositories from "./components/navbar/All-component/Repositories";
import People from "./components/navbar/All-component/People";
import Projects from "./components/navbar/All-component/Projects";
import More from "./components/navbar/All-component/More";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourwork" element={<YourWork />} />
        <Route path="/pullrequest" element={<PullRequest />} />
        <Route path="/repositories" element={<Repositories />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/people" element={<People />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </div>
  );
}

export default App;
