import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ui/ScrollToTop';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-vic-dark">
        <Header />
        <AnimatedRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
