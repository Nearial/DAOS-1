import { Routes, Route } from "react-router-dom";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import FindMusician from "./pages/FindMusician";
import Musician from "./pages/Musician";
import EditProfile from "./pages/EditProfile";

import HTag from "./components/atoms/HTag";

import "./App.css"

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/find-musician" element={<FindMusician />} />
          <Route path="/find-ensemble" element={<HTag hType="h1" hColor="blue" hText="Find ensemble" />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/complete-profile" element={<HTag hType="h1" hColor="blue" hText="Complete profile" />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/settings" element={<HTag hType="h1" hColor="blue" hText="Profile settings" />} />
          <Route path="/find-musician/:id" element={<Musician />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}