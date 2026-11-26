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
function App()
{
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/credit" element={<CreditLedger />}/>
      <Route path="/customers" element={<Customers />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path="/finance" element={<Finance />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/remainders" element={<Remainders />}/>
      <Route path="/rag" element={<Rag />}/>
      <Route path="/settings" element={<Settings />}/>
      
     </Routes>
    </BrowserRouter>
  )
}
export default App