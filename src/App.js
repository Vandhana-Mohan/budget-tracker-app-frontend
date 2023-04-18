// DEPENDENCIES

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
// COMPONENTS
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

function App() {
  // const [total, setTotal] = useState();
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar />
        {/* <NavBar total={total} /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budgets/:index/edit" element={<Edit />} />
            <Route path="/budgets/new" element={<New />} />
            <Route path="/budgets/:index" element={<Show />} />
            <Route path="/budgets" element={<Index />} />
            {/* <Route
              path="/budgets"
              element={<Index setTotal={setTotal} total={total} />}
            /> */}
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
