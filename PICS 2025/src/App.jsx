import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Program, Home, Students, Committees, Papers, History, Author, Workshops, FacultyMeet, StudentInfo, AboutNITH, Accommodations, ReachNITH, ConferenceVenue } from "./components/pages";
import { Travel } from "./components/pages/Travel";
import { Sponsor } from "./components/pages/Sponsor";
import ImageSlider from "./components/ImageSlider";
import HeroSection from "./components/HeroSection";
import DateSection from "./components/DateSection";
import FooterSection from "./components/FooterSection";
import PDFViewer from "./components/PDFviewer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Students" element={<Students />} />
        <Route path="/program" element={<Program />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/sponsors" element={<PDFViewer />} />
        <Route path="/Committees" element={<Committees />} />
        <Route path="/History" element={<History />} />
        <Route path="/Papers" element={<Papers />} />
        <Route path="/Author" element={<Author />} />
        <Route path="/Workshops" element={<Workshops />} />
        <Route path="/FacultyMeet" element={<FacultyMeet />} />
        <Route path="/StudentInfo" element={<StudentInfo />} />
        <Route path="/AboutNITH" element={<AboutNITH />} />
        <Route path="/Accommodations" element={<Accommodations />} />
        <Route path="/ReachNITH" element={<ReachNITH />} />
        <Route path="/ConferenceVenue" element={<ConferenceVenue />} />
      </Routes>
      {/* <HeroSection/> */}
      {/* <DateSection/> */}
      {/* <FooterSection/> */}
    </div>
  );
}

export default App;