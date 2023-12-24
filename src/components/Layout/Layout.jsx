import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Container from './Container.styled';
import Header from './Header.styled';
import  { Navigation, LinkNav } from './Navigation.styled';
import {Loader} from 'components/Loader/Loader.styled';

const Layout = () => {
  const location = useLocation();
  const path = (location.pathname === '/goit-react-hw-05-movies/');

    return (
      <Container>
        <Header>
          {path ?
            (<Navigation>
              <LinkNav to={'/goit-react-hw-05-movies/'} className='active'
              >Home</LinkNav>
              <LinkNav to={'/goit-react-hw-05-movies/movies'}>Movies</LinkNav>
            </Navigation>)
            :(<Navigation>
              <LinkNav to={'/goit-react-hw-05-movies/'} 
              >Home</LinkNav>
              <LinkNav to={'/goit-react-hw-05-movies/movies'} className='active'>Movies</LinkNav>
            </Navigation>)
          }
        </Header>
        <Suspense fallback={<Loader></Loader>}>
          <Outlet />
        </Suspense>
      </Container>
    
    )
}

export default Layout;