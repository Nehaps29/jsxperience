import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-primary text-white mb-4 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
            <h1 className="m-0" style={{ fontFamily: 'cursive', fontSize: '4em' }}>
              Friendly Fleur
            </h1>
          <p className="m-0" style={{ fontFamily: 'monospace', fontSize: '1.3em' }}>Where Plant Passion Blossoms</p>
        </div>
        <div>
          <Link className="btn btn-lg btn-light m-2" to="/">
            Home
          </Link>
          <Link className="btn btn-lg btn-light m-2" to="/blog">
            Blog
          </Link>
                    
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-light m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

