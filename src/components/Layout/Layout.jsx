import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from './Container.styled';
import Header from './Header.styled';
import  { Navigation, LinkNav } from './Navigation.styled';

const Layout = () => {
    return (
      <Container>
        <Header>
      <Navigation>
        <LinkNav to={'/'}>Home</LinkNav>
        <LinkNav to={'/movies'}>Movies</LinkNav>
      </Navigation>
        </Header>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    
    )
}

export default Layout;