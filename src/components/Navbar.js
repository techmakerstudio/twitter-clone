import CreatePostButton from './posts/CreatePostButton'

function Navbar(props) {

  return (
    <nav className="navbar fixed-top">
      <div className='container'>
        <div className='col-3'>
          <a className="navbar-brand" href="#">Twitter Clone</a>
          <CreatePostButton />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
