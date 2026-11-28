import { Link, Outlet } from "react-router-dom";


function Layout() {
  return (
    <>
    <nav>

        <Link to="/dashboard" className="ml-4 text-blue-500 hover:text-blue-700">Dashboard</Link>
        <Link to="/credit" className="ml-4 text-blue-500 hover:text-blue-700">Credit Ledger</Link>
        <Link to="/customers" className="ml-4 text-blue-500 hover:text-blue-700">Customers</Link>
        <Link to="/finance" className="ml-4 text-blue-500 hover:text-blue-700">Financial Reports</Link>
        <Link to="/remainders" className="ml-4 text-blue-500 hover:text-blue-700">Payment Remainders</Link>
        <Link to="/rag" className="ml-4 text-blue-500 hover:text-blue-700">RAG Knowledge Assistant</Link>
        <Link to="/settings" className="ml-4 text-blue-500 hover:text-blue-700">Settings</Link>
    </nav>
    <Outlet />
    </>  )
}

  


export default Layout;