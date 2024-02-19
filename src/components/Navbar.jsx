import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const setActiveClass  = ({isActive}) => isActive ? 'active' : 'inactive';

  return (
    <nav>
      <span><img className="nav-logo" src="https://img.freepik.com/vector-gratis/flying-slice-of-pizza-cartoon-vector-illustration-concepto-comida-rapida-vector-aislado-estilo-dibujos-animados-plana_138676-1934.jpg?size=626&ext=jpg&uid=R113155443&ga=GA1.1.1572591729.1692254360&semt=sph"></img></span>
      <div className="links">
        <NavLink to="/" className={setActiveClass} > Home </NavLink>
        <NavLink to="/carrito" className={setActiveClass} > Carrito </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;