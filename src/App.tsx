import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Segments } from './pages/Segments';
import { DripDetails } from './pages/DripDetails';
import { LabSelection } from './pages/LabSelection';
import { Checkout } from './pages/Checkout';
import { Appointment } from './pages/Appointment';
import { OrderConfirmation } from './pages/OrderConfirmation';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark transition-all duration-300">
        <Router>
          <Layout>
            <main className="pt-16 min-h-[calc(100vh-64px)]">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/segments" element={<Segments />} />
                <Route path="/drip-details/:segment" element={<DripDetails />} />
                <Route path="/lab-selection" element={<LabSelection />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/appointment" element={<Appointment />} />
                <Route path="/confirmation" element={<OrderConfirmation />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
              </Routes>
            </main>
            <Footer />
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;