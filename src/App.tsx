import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { FindTalent } from './pages/FindTalent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/find-talent" element={<FindTalent />} />
      <Route path="/signin" element={<div className="p-8 text-center">Sign In Page (Coming Soon)</div>} />
      <Route path="/signup" element={<div className="p-8 text-center">Sign Up Page (Coming Soon)</div>} />
      <Route path="/become-provider" element={<div className="p-8 text-center">Become a Provider Page (Coming Soon)</div>} />
      <Route path="/profile/:id" element={<div className="p-8 text-center">Talent Profile Page (Coming Soon)</div>} />
      <Route path="/about" element={<div className="p-8 text-center">About Us Page (Coming Soon)</div>} />
      <Route path="/how-it-works" element={<div className="p-8 text-center">How It Works Page (Coming Soon)</div>} />
      <Route path="/terms" element={<div className="p-8 text-center">Terms of Service Page (Coming Soon)</div>} />
      <Route path="/privacy" element={<div className="p-8 text-center">Privacy Policy Page (Coming Soon)</div>} />
      <Route path="/help" element={<div className="p-8 text-center">Help Center Page (Coming Soon)</div>} />
      <Route path="/safety" element={<div className="p-8 text-center">Safety Tips Page (Coming Soon)</div>} />
      <Route path="/contact" element={<div className="p-8 text-center">Contact Us Page (Coming Soon)</div>} />
      <Route path="/faq" element={<div className="p-8 text-center">FAQ Page (Coming Soon)</div>} />
    </Routes>
  );
}

export default App;