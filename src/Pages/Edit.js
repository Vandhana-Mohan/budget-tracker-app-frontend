import BudgetEditForm from "../Components/BudgetEditForm";

function Edit() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Edit a Transaction</h2>
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
        <BudgetEditForm />
      </div>
    </div>
  );
}

export default Edit;
