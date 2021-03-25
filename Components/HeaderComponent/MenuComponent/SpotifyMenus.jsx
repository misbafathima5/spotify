import React,{Fragment} from 'react'
import { Link } from 'react-router-dom';
const SpotifyMenus = () => {
    return (
        <Fragment>
            <nav>
                <ul>
                    <li><Link to="/"></Link>Premium</li>
                    <li><Link to="/"></Link>Support</li>
                    <li><Link to="/"></Link>Download</li>
                     <li><Link to="/signup"></Link>SignUp</li>
                     <li><Link to="/signin"></Link>Login</li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default SpotifyMenus;
