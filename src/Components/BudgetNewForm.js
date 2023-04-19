import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function BudgetNewForm() {
  const [budget, setBudget] = useState({
    id: uuidv4(),
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    isWithdrawal: false,
  });

  const navigate = useNavigate();

  const [length, setLength] = useState([])

  const [categories, setCategories] = useState([
    "Taxes",
    "Entertainment",
    "Income",
    "Savings",
    "Food",
    "Pet-Care",
    "Bills",
    "Fees",
    "Rental",
  ]);

  function handleCategoryChange(event) {
    const { value } = event.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      category: value,
    }));
  }

  const handleCheckboxChange = (event) => {
    setBudget({ ...budget, isWithdrawal: event.target.checked });
  };

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

  function handleDateChange(event) {
    const { value } = event.target;
    setBudget((prevBudget) => ({
      ...prevBudget,
      date: value,
    }));
  }
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/budgets`)
      .then((res) => res.json())
      .then((data) => {
        setLength(data.length);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${process.env.REACT_APP_API_URL}/budgets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(budget),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(`/budgets/${length}`);
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  };

  return (
    <div className="p-4" style={{ paddingBottom: "20rem" }}>
      <h1 className="text-2xl font-bold mb-4"> Add a new item </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="date" className="mb-2 text-lg font-medium">
            Date
          </label>
          <input
            id="date"
            value={budget.date}
            type="date"
            onChange={handleDateChange}
            required
            placeholder="Enter in mm-dd-yyyy format"
            pattern="(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])-(19|20)[0-9]{2}"
            className="py-2 px-3 border border-gray-300 rounded-md"
            title="Please match valid format mm-dd-yyyy"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="withdrawal" className="flex items-center">
            <span className="mr-2">Withdrawal</span>
            <input
              id="withdrawal"
              type="checkbox"
              onChange={handleCheckboxChange}
              required
              className="mr-2"
            />
          </label>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="item_name" className="mb-2 text-lg font-medium">
            Name
          </label>
          <input
            id="item_name"
            type="text"
            required
            value={budget.item_name}
            placeholder="Enter the name of item"
            onChange={handleTextChange}
            className="py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="amount" className="mb-2 text-lg font-medium">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            placeholder="Enter amount"
            required
            value={budget.amount}
            onChange={handleTextChange}
            className="py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="from" className="mb-2 text-lg font-medium">
            From
          </label>
          <input
            id="from"
            type="text"
            value={budget.from}
            placeholder="Please enter the source or recipient of this income/spending"
            onChange={handleTextChange}
            className="py-2 px-3 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={budget.category}
            onChange={handleCategoryChange}
            className="py-2 px-3 border border-gray-300 rounded-md mt-1 block w-full"
          >
            <option value="">-- Choose a category --</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600"
          >
            Create New Item
          </button>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BudgetNewForm;
