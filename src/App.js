import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div>
      <h1> Hello </h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/Edit/:index" element=<Edit /> />
          <Route path="/New" element=<New /> />
          <Route path="/Show" element=<Show /> />
          <Route path="/Index" element=<Index /> />
          <Route path="*" element=<FourOFour /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
