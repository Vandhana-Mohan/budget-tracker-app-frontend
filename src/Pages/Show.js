import BudgetDetails from "../Components/BudgetDetails";

function Show() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Show Transactions</h2>
      <BudgetDetails />
    </div>
  );
}

export default Show;
