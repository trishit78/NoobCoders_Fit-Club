import "./App.css";
// import Footer from './components/Footer/Footer';
import Hero from "./components/Herosection/Hero";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Programs from "./components/Programs/Programs";

import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyUs from "./components/Why Us/WhyUs";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Fixed position for Hero regardless of route */}

        <Routes>
          {/* Define routes for each page, nesting them if necessary */}

          <Route path="/" Component={Hero} />

          <Route path="/program" Component={Programs} />

          <Route path="/plans" Component={Plans} />
          <Route path="/testimonials" Component={Testimonials} />
          <Route path="/whyus" Component={WhyUs} />
          <Route path="/signin" Component={SignIn} />
          <Route path="/signup" Component={SignUp} />

          {/* <Route path="/reasons" element={<Reasons />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/join" element={<Join />} /> */}
        </Routes>

        {/* Footer is always displayed based on your feedback */}
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
