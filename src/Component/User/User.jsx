import { Link, useNavigate } from 'react-router-dom';
import './User.css'

const User = ({user}) => {
   const {name,email,id,phone} = user;
   const nevigate = useNavigate();
   const handleNevigate = () => {
    nevigate(`/user/${id}`)
   }
    return (
        <div className='parentUser'>  
            <h2>{id}: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
            <Link to={`/user/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNevigate}>Nevigate detalis</button>
        </div>
    );
};

export default User;