import CartWidget from "./CartWidget" 

const NavBar = () => {
  return (
    <div>
          {/*     <div>
              <nav className="navbar bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Bootstrap" width="30" height="24" />
          </a>
        </div>
      </nav>
        </div> */}
        <div>
        <nav className="container-fluid navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
  <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Bootstrap" width="90" height="auto" />
          </a>
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
           <CartWidget />
        </div>
    </div>    
  )
}

export default NavBar