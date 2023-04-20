// DEPENDENCIES
import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import DarkMode from "./Components/DarkMode";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DarkMode>
          <Header />
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/budgets/:index/edit" element={<Edit />} />
              <Route path="/budgets/new" element={<New />} />
              <Route path="/budgets/:index" element={<Show />} />
              <Route path="/budgets" element={<Index />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
          <Footer />
        </DarkMode>
      </BrowserRouter>
    </div>
  );
}

export default App;
