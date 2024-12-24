import { useLoaderData, useNavigate } from "react-router-dom";


const UserDetails = () => {
    const detailsData = useLoaderData();
    const {name,id,email,phone} = detailsData;
    const nevigate  = useNavigate();
    const handleGoBack = () => {
        nevigate(-1)
    }
    
    return (
        <div className='parentUser'>  
            <h2>{id}: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone Number: {phone}</p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default UserDetails;