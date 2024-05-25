import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Onboarding from "../components/setup/onboarding/Onboarding";
import Example from "../components/example/Example";


const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/onboarding" element={<Onboarding />} />
         <Route path="/example" element={<Example />} />
        <Route path="/" element={<Navigate to="/onboarding" replace />} />
      </Routes>
    </Router>
  );
}

export default AllRoutes;
