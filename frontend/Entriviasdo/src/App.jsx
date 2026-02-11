import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Home from './pages/Home';
import Trivia from './pages/Trivia';
import LayoutSinFooter from './components/layout-sin-footer';
import Explain from './pages/Explain';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/trivia" element={<LayoutSinFooter />}>
          <Route index element={<Trivia />} />
        </Route>
        <Route path="/explain" element={<Layout />}>
          <Route index element={<Explain />} />
        </Route>
      </Routes>
    </Router>
  );
}
