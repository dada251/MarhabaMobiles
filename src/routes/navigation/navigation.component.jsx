import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../contexts/user.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss'

const Nevigation = () => {
    const { currentUser } = useContext(UserContext);

    // console.log(currentUser.email)

    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrwnLogo className='logo' />
                </Link>
                <div className='nav-links-container'>
                    {
                        <Link className='nav-link' to='/'>
                            SHOP
                        </Link>
                    }
                    { currentUser && currentUser.email === 'admin@gmail.com' &&
                        <Link className='nav-link' to='/addnewitem'>
                            ADD NEW ITEM
                        </Link>
                    }
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>
                                SIGN OUT
                            </span>
                        ) : (
                            <Link className='nav-link' to='/sign-in'>
                                SIGN IN
                            </Link>
                        )
                    }
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Nevigation;