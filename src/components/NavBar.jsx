import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"
import Cart from "./Cart"
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
          <Link to={"/"} className="navbar-brand">
            <img src="/images/logo.png" alt="Logo PENTA" width="90" height="auto" />
          </Link>
      <Link to={"/"} className="navbar-brand">Penta</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse container-fluid" id="navbarNavDropdown">
        <ul className="navbar-nav container-fluid">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/catalogue"} className="nav-link">Catalogo</Link>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul className="dropdown-menu">
              <li><Link to={`/category/${"Departamento"}`} className="dropdown-item">Departamentos</Link></li>
              <li><Link to={`/category/${"Casa"}`} className="dropdown-item">Casas</Link></li>
              <li><Link to={`/category/${"Lote"}`} className="dropdown-item">Lotes</Link></li>
            </ul>
          </li>
          <div className="contianer-fluid d-flex justify-content-end">
                <li>
                  <Link to={"/cart"}><Cart /></Link>
                </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  )
}




export default NavBar