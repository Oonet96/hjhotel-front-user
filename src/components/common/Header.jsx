import { Link } from "react-router-dom";

//24.11.12 지은 [완료] : ButteonEx 적용 테스트.
export default function Header() {
  return (
    <div className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">

          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
              <p>로고(홈)</p>
            </Link>
            <Link to="/about" className="nav-item nav-link">
              <p>About</p>
            </Link>
            <Link to="/room" className="nav-item nav-link">
              <p>room</p>
            </Link>
            <Link to="/special" className="nav-item nav-link">
              <p>special</p>
            </Link>
            <Link to="/reservation" className="nav-item nav-link">
              <p>reservation</p>
            </Link>
            <Link to="/community" className="nav-item nav-link">
              <p>community</p>
            </Link>
            <Link to="/user" className="nav-item nav-link">
              <p>user</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
