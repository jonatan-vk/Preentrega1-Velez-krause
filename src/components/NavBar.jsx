import CartWidget from "./CartWidget" 

const NavBar = () => {
  return (
    <div className="container-fluid">
        <div>
        <nav className="container-fluid navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Logo PENTA" width="90" height="auto" />
          </a>
          <a className="navbar-brand" href="#">PENTA</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container-fluid" id="navbarNavDropdown">
            <ul className="navbar-nav container-fluid">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Venta</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Alquiler</a>
              </li>
              <div className="contianer-fluid d-flex justify-content-end">
                <li>
                  <a href="#"><CartWidget /></a>
                </li>
              </div>
           
      </ul>
    </div>
  </div>
</nav>
        
           
        </div>
    </div>    
  )
}

export default NavBar