import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './SignupForm/SignupForm';
import UseComponent from './UseComponent/UseComponent';

const containerStyles = {
  maxWidth: 1170,
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: 15,
  paddingRight: 15,
};

export default function App() {
  return (
    <div style={containerStyles}>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/use" element={<UseComponent />} />
        </Routes>
      </Router>
    </div>
  );
}
