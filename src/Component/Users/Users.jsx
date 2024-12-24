import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <p>TOtall: {users.length}</p>
            <div className="usersConatiner">
            {
                users.map((user,ind)=> <User key={ind} user={user}></User> )
            }
            </div>
        </div>
    );
};

export default Users;