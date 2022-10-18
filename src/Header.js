import './Header.css';
import logo from './logo.png';
import avatar from './user-avatar.png';

function Header() {
  return (
    <header className="header">
      <div className="grid wide">
        <div className="header__content">

          {/* Logo webste */}
          <div className="header__logo">
                <img className="logo" src={logo} alt="logo"/>
          </div>  

          {/* User */}
          <div className="user">            
              <div className="col l-6">
                  <div className="user__details">
                      <p className="user__title">Handicrafted by</p>
                      <h4 className="user__name">Jim HLS</h4>
                  </div>
              </div>

              <div className="col l-6">
                  <div className="user__avatar">
                      <img className="avatar" src={avatar} alt="user-avatar"/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;