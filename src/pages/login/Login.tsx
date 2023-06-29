import { Button } from "@mui/material"
import Navbar from "../../components/navbar/Navbar"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <Navbar />

      <div className="inner">

        <div className="innerDiv1">
          <section>Let’s Begin Your <br /> New <span>Journey</span> </section>
        </div>

        <div className="innerDiv2">
          <div className="logHead">Log In</div>

          <form>
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Mobile Number" />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="forgot"> <span>Forgot Password</span></div>

            <div className="form-group">
              <Button variant="contained" className="bt1">Log In</Button>
            </div>
            <div className="form-group">
              <Button variant="contained" className="bt2">Sign Up</Button>
            </div>

          </form>

        </div>
      </div>

    </div>
  )
}

export default Login