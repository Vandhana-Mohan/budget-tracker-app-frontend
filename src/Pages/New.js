import BudgetNewForm from "../Components/BudgetNewForm";

function New() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Add New Transaction</h2>
      <BudgetNewForm />
    </div>
  );
}

export default New;
