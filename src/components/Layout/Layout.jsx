// import HomePage from 'components/pages/HomePage';
// import Movies from 'components/pages/Movies';
import { Outlet, NavLink } from 'react-router-dom';

const Layout = () => {
    return (
        <>
        <header>
      <nav>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/movies'}>Movies</NavLink>
      </nav>
        </header>
        <Outlet/></>
    
    )
}

export default Layout;