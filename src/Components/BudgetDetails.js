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
        console.log(data);
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
    <div>
      <article>
        <h2>
          {budget.item_name} - From {budget.from}
        </h2>
        <p> {budget.date} </p>
        <p>
          {" "}
          <strong> Amount : {budget.amount} </strong>
        </p>
      </article>
      <div>
        <div>
          <button>
            <Link to="/budgets">Back</Link>
          </button>
        </div>

        <div>
          <button>
            <Link to={`/budgets/${index}/edit`}>Edit</Link>
          </button>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default BudgetDetails;
