import { useNavigate } from 'react-router-dom';
import image from '../assets/logo.png';
import './landing.css';



function Landing()
{
    const navigate=useNavigate()
    return (<div>
         <img src={image} className="image"/>
        <h1 className="lhead">Digital Credit Ledger for Small Businesses</h1>
        <h1 className="lheadline">Manage Your Shop's Credit. Simplify Your Business.</h1>
        <p className="ldescription" >Say goodbye to traditional paper-based bookkeeping. KhataSmart AI helps shopkeepers manage customer credit, track payments, send payment reminders and generate financial reports — all in one simple and secure platform.</p>
        <button type="submit"className='lbutton' onClick={() =>navigate("/login")}>GET STARTED</button>
       
    </div>
    )
}
export default Landing