import BudgetDetails from "../Components/BudgetDetails";

function Show() {
  return (
    <div className="flex flex-col p-4 justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Show Transaction</h1>
      <BudgetDetails />
    </div>
  );
}

export default Show;