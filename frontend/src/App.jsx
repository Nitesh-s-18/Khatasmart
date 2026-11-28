import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import CreditLedger from './pages/creditledger'
import Customers from './pages/customers'
import Dashboard from './pages/dashboard'
import Finance from './pages/financialreports'
import Landing from './pages/landing'
import Remainders from './pages/paymentremainders'
import Settings from './pages/settings'
import Rag from './pages/ragknowledgeassistant'
import './App.css'
import Register from './pages/register'
import Layout from './pages/layout'
import { ToastContainer } from 'react-toastify'
function App()
{
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login />}/>
       <Route path='/register' element={<Register/>}/>

       <Route element={<Layout />}>
      <Route path="/credit" element={<CreditLedger />}/>
      <Route path="/customers" element={<Customers />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/finance" element={<Finance />}/>      
      <Route path="/remainders" element={<Remainders />}/>
      <Route path="/rag" element={<Rag />}/>
      <Route path="/settings" element={<Settings />}/>
      </Route>
     
      
     </Routes>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        theme="colored"
      />
    </BrowserRouter>
  )
}
export default App