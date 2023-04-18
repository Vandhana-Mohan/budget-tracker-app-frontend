// DEPENDENCIES

import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import NavBar from "./Components/NavBar";

// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1 className="text-6xl font-bold underline">Hello world!</h1>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/budgets/:index/edit" element={<Edit />} />
            <Route path="/budgets/new" element={<New />} />
            <Route path="/budgets/:index" element={<Show />} />
            <Route path="/budgets" element={<Index />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
