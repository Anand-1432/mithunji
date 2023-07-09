import { useNavigate } from "react-router-dom"
import "./navBar.scss"

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navBar">
      <section>mithuji</section>
      <div className="d1">Sell</div>
      <div className="d2">Messages</div>
      <div className="d3" onClick={() => navigate("/login")}>Sign in</div>
    </nav>
  )
}

export default Navbar