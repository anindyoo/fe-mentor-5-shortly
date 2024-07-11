import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Main = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

export default Main;
