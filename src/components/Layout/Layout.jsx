import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from './Container.styled';
import Header from './Header.styled';
import  { Navigation, LinkNav } from './Navigation.styled';
import {Loader} from 'components/Loader/Loader.styled';

const Layout = () => {
    return (
      <Container>
        <Header>
      <Navigation>
        <LinkNav to={'/'}>Home</LinkNav>
        <LinkNav to={'/movies'}>Movies</LinkNav>
      </Navigation>
        </Header>
        <Suspense fallback={<Loader></Loader>}>
          <Outlet />
        </Suspense>
      </Container>
    
    )
}

export default Layout;