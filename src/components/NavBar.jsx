import { Link } from "react-router-dom"
import CartWidget from "./CartWidget" 

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="/images/logo.png" alt="Logo PENTA" width="90" height="auto" />
          </a>
      <Link to={"/"} className="navbar-brand">Penta</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse container-fluid" id="navbarNavDropdown">
        <ul className="navbar-nav container-fluid">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Catalogo</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Departamentos</a></li>
              <li><a className="dropdown-item" href="#">Casas</a></li>
              <li><a className="dropdown-item" href="#">Lotes</a></li>
            </ul>
          </li>
          <div className="contianer-fluid d-flex justify-content-end">
                <li>
                  <Link to={"/cart"}><CartWidget /></Link>
                </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  )
}




export default NavBar