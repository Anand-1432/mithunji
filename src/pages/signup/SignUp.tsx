import { Button } from "@mui/material"
import Navbar from "../../components/navbar/Navbar"
import "./signUp.scss"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { registerUser } from "../../store/user-slice/userSlice"
import { ThunkDispatch } from "@reduxjs/toolkit"

const SignUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

    const navigation = () => {
        navigate("/login");
    }

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        confirmPass: ""
    });

    const handleChange = (e: any) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    }

    const submit = () => {
        dispatch(registerUser(userData));
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
                                <input type="text" className="form-control" name="name" placeholder="Enter Your Name" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" placeholder="Enter Your Email" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="phoneNumber" placeholder="Mobile Number" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Create Password" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="confirmPass" placeholder="Confirm Password" onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <Button variant="contained" className="bt1" onClick={submit}>Sign Up</Button>
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