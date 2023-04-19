import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function BudgetNewForm() {
  const [budget, setBudget] = useState({
    id: uuidv4(),
    item_name: "",
    amount: null,
    date: "",
    from: "",
    category: "",
    isWithdrawal: false,
  });

  const navigate = useNavigate();
  const handleCheckboxChange = (event) => {
    setBudget({ ...budget, isWithdrawal: event.target.checked });
  };

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

  function handleNewCategory() {
    const newCategory = prompt("Enter the new category name:");
    if (newCategory) {
      setCategories([...categories, newCategory]);
      setBudget((prevBudget) => ({
        ...prevBudget,
        category: newCategory,
      }));
    }
  }

  const handleTextChange = (event) => {
    setBudget({ ...budget, [event.target.id]: event.target.value });
  };

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
        navigate("/budgets");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="p-4" style={{ paddingBottom: "20rem" }}>
      <h1 className="text-2xl font-bold mb-4"> Add a new item </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col w-1/2">
          <label htmlFor="budgetDate" className="mb-2 text-lg font-medium">
            Date
          </label>
          <input
            id="budgetDate"
            value={budget.date}
            type="date"
            onChange={handleTextChange}
            required
            placeholder="Enter in mm-dd-yyyy format"
            className="py-2 px-3 border border-gray-300 rounded-md"
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
            <option value="add_new" style={{ color: "blue" }}>
              Add new category...
            </option>
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
