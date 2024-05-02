import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import theme from './themes';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Shipments from './pages/Shipments';
import CreateOrder from './pages/CreateOrder';
import SidePanel from './components/SidePanel';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route element={<Navbar />}>
              <Route path='/' element={<Login />} />
              <Route path="/services/" element={<SidePanel />}>
                <Route path='shipments' element={<Shipments />} />
                <Route path='create' element={<CreateOrder />} />
              </Route>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
