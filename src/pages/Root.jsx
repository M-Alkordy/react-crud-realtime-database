import { Outlet } from 'react-router-dom';
import Navigation from '../components/layout/Navigation';
import classes from './Layout.module.css';

const Root = () => {
  return (
    <div>
      <Navigation />
      <main className={classes.main}><Outlet/></main>
      <footer className={classes.footer}>
        made with love by Mohammed Alkordy
      </footer>
    </div>
  );
};

export default Root;
