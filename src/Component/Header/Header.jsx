import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
           <h2>Navbar</h2>
           <nav>
            <Link to='/'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/about'>About</Link>
            <Link to='/users'>Users</Link>
            
           </nav>
        </div>
    );
};

export default Header;