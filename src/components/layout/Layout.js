import Navigation from './Navigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      <main className={classes.main}>{props.children}</main>
      <footer className={classes.footer}>
        made with love by Mohammed Alkordy
      </footer>
    </div>
  );
};

export default Layout;
