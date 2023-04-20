import BudgetEditForm from "../Components/BudgetEditForm";

function Edit() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Add New Transaction</h2>
      <BudgetEditForm />
    </div>
  );
}

export default Edit;
