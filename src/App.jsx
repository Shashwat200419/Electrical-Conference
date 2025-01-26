import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import {Committees,Home, Papers, History, Author, FacultyMeet, StudentInfo, AboutNITH, Accommodations, ReachNITH, ConferenceVenue, ImpDates, ConferenceOverview, SessionInfo, KeynoteSpeakers, Contact } from "./components/pages";
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
        
        <Route path="/Committees" element={<Committees />} />
        <Route path="/History" element={<History />} />
        <Route path="/Papers" element={<Papers />} />
        <Route path="/Author" element={<Author />} />
        <Route path="/SessionInfo" element={<SessionInfo />} />
        <Route path="/FacultyMeet" element={<FacultyMeet />} />
        <Route path="/StudentInfo" element={<StudentInfo />} />
        <Route path="/AboutNITH" element={<AboutNITH />} />
        <Route path="/Accommodations" element={<Accommodations />} />
        <Route path="/ReachNITH" element={<ReachNITH />} />
        <Route path="/ConferenceVenue" element={<ConferenceVenue />} />
        <Route path="/ImpDates" element={<ImpDates />} />
        <Route path="/ConferenceOverview" element={<ConferenceOverview />} />
        <Route path="/Keynote" element={<KeynoteSpeakers />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      {/* <HeroSection/> */}
      {/* <DateSection/> */}
      {/* <FooterSection/> */}
    </div>
  );
}

export default App;
