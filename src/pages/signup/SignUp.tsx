import { Button } from "@mui/material"
import Navbar from "../../components/navbar/Navbar"
import "./signUp.scss"
import { useNavigate } from "react-router-dom"


const SignUp = () => {

    const navigate = useNavigate();

    const navigation = () => {
        navigate("/login");
    }


    return (
        <>
            <div className="signup">
                <Navbar />

                <div className="inner">

                    <div className="innerDiv1">
                        <section>Let’s Begin Your <br /> New <span>Journey</span> </section>
                    </div>

                    <div className="innerDiv2">
                        <div className="logHead">Sign Up</div>

                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Enter Your Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Mobile Number" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Create Password" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" placeholder="Confirm Password" />
                            </div>
                            <div className="form-group">
                                <Button variant="contained" className="bt1">Sign Up</Button>
                            </div>

                            <div className="already">Already have a account? <span onClick={navigation}>Login</span></div>

                        </form>

                    </div>
                </div>

            </div>
        </>
    )
}

export default SignUp