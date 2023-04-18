import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div
      className="mx-auto px-4 py-10 max-w-7xl"
      style={{ paddingBottom: "10rem" }}
    >
      <h1 className="text-3xl font-bold text-gray-900">
        About Our Budget Tracking App
      </h1>
      <p className="mt-6 text-lg text-gray-500">
        Our budget tracking app is designed to help you keep track of your
        finances in a simple and efficient way. With our app, you can easily
        monitor your income and expenses, create budgets, and set financial
        goals. Creating a budget is easy with our app. You can set up a budget
        for each category, such as groceries, utilities, and entertainment.
      </p>
      <h2 className="mt-10 text-2xl font-bold text-gray-900">
        Track Your Expenses
      </h2>
      <p className="mt-6 text-lg text-gray-500">
        Our app allows you to track your expenses quickly and easily. You can
        categorize your expenses and see exactly where your money is going each
        month. This will help you identify areas where you can cut back and save
        money. Our app will help you stay on track by sending you notifications
        when you are close to reaching your budget limit.
      </p>
      <Link to="/budgets/new">
        <h2 className="mt-10 text-2xl font-bold text-blue-700">Get Started</h2>
      </Link>
    </div>
  );
}

export default AboutUs;
