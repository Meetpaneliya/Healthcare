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

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background dark:bg-background-dark text-foreground dark:text-foreground-dark transition-colors duration-300">
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/segments" element={<Segments />} />
              <Route path="/drip-details/:segment" element={<DripDetails />} />
              <Route path="/lab-selection" element={<LabSelection />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/confirmation" element={<OrderConfirmation />} />
            </Routes>
          </Layout>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;