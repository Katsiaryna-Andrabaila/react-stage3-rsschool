import Nav from './Nav';
import Title from './Title';

const Header = (props: { page: string }) => {
  return (
    <header className="header" data-testid={props.page}>
      <Title page={props.page} />
      <Nav />
    </header>
  );
};

export default Header;
