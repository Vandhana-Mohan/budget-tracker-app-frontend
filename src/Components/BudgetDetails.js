import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function BudgetDetails() {
  const [budget, setBudget] = useState([]);
  let { index } = useParams(); //getting index from URL
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/budgets/${index}`)
      .then((res) => res.json())
      .then((data) => {
        setBudget(data);
      })
      .catch((error) => {
        navigate("/not-found");
        console.log(error);
      });
  }, [index, navigate]);

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/budgets/${index}`, {
      method: "DELETE",
    })
      .then(() => {
        navigate("/budgets");
      })
      .catch((error) => {
        console.log(error);
        navigate("/not-found");
      });
  };

  return (
    <div className="container mx-auto px-4 py-8" style={{ paddingBottom: "10rem" }}>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6 my-4">
          <h2 className="text-lg leading-6 font-medium text-gray-900 my-4">
            {budget.item_name} - From {budget.from}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 my-4">
            <strong> Date : {budget.date} </strong>
          </p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 my-4">
            <strong> Amount : {budget.amount} </strong>
          </p>
          <p className="mt-1 max-w-2xl text-sm text-gray-500 my-4">
            <strong> Category : {budget.category} </strong>
          </p>
        </div>
        <div className="px-4 py-3 bg-gray-50 sm:px-6">
          <div className="flex justify-center">
            <button className="mr-2 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              <Link to="/budgets">Back</Link>
            </button>

            <button className="mr-2 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <Link to={`/budgets/${index}/edit`}>Edit</Link>
            </button>
            <button
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BudgetDetails;
