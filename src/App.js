// import logo from './logo.svg';
// import './App.css';
import Course from "./pages/courseAdd"
import Batch from "./pages/batchAdd"
import Body from "./components/body"
import Header from "./components/header"
// import Accord from "./components/accord"
import Student from "./components/student";
import Studentprofile from "./components/studentprofile";
import Mentor from "./components/mentor";
import TicketsPage from "./components/ticketspage";
import Section from "./pages/sectionAdd"
import Module from "./pages/moduleAdd"
import Project from "./pages/projectAdd"
import {Route,Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
        
      <Routes>
        <Route path="/" element={<Course/>} />
        <Route path="/batches" element={<Batch/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/:module/:section" element={<Section/>} />
        <Route path="/:module" element={<Module/>} />
        <Route path="/section" element={<Section/>} />
        <Route path="/profiles" element={<Studentprofile />} />
        <Route path="/student" element={<Student />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/tickets" element={<TicketsPage />} />
      </Routes>

    </div>
  );
}

export default App;
