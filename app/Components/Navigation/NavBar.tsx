import { NavLink } from 'react-router';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="py-2">
            <div className="flex justify-between items-center p-3 border-2 border-gray-200 rounded-full mx-[2%]">
                <h1 className='px-3 text-xl'>Logo</h1>
                <div className="flex space-x-4">
                    <NavLink className='' to='/'>Features</NavLink>
                    <NavLink className='' to='/etc'>How it Works</NavLink>
                    <NavLink className='' to='/etc'>Integrations</NavLink>
                    <NavLink className='' to='/etc'>Pricing</NavLink>
                    <NavLink className='' to='/etc'>Support</NavLink>
                </div>
                <div>
                    <button className='custom-button p-3 text-white font-bold rounded-full'> Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;