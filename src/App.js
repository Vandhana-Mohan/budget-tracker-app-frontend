// DEPENDENCIES

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

// COMPONENTS
import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
// PAGES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";

function App() {
  const [totalBalance, setTotalBalance] = useState(0);

  let total = 0;
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/budgets`)
      .then((res) => res.json())
      .then((data) => {
        data.forEach((budget) => {
          if (budget.isWithdrawal) {
            total -= parseInt(budget.amount);
          } else {
            total += parseInt(budget.amount);
          }
        }, []);

        const totalBalance = total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        setTotalBalance(totalBalance);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Calculate the total amount color based on the total amount
  // let totalColor;
  // if (total > 100) {
  //   totalColor = { color: "green" };
  // } else if (total >= 0 && total <= 100) {
  //   totalColor = { color: "yellow" };
  // } else if (total < 0) {
  //   totalColor = { color: "red" };
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar totalBalance={totalBalance} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/budgets/:index/edit" element={<Edit />} />
            <Route path="/budgets/new" element={<New />} />
            <Route path="/budgets/:index" element={<Show />} />
            <Route path="/budgets" element={<Index />} />
            <Route path="*" element={<FourOFour />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
