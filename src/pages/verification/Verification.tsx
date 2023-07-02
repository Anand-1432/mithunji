import { Button, TextField } from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import "./verification.scss"
import { MuiOtpInput } from 'mui-one-time-password-input'
import { useState } from "react";


const Verification = () => {

    const [otp, setotp] = useState();

    const handleChange = (newValue : any) => {
        setotp(newValue)
    }


    return (
        <div className="verification">
            <Navbar />

            <div className="inner">

                <div className="innerDiv1">
                    <section>Let’s Begin Your <br /> New <span>Journey</span> </section>
                </div>

                <div className="innerDiv2">
                    <div className="logHead">Verify Your Number</div>

                    <form>
                        <TextField className="num" id="outlined-basic" label="Mobile Number" variant="outlined" />

                        <MuiOtpInput className="otp" length={4} value={otp} onChange={handleChange} />

                        <div className="forgot"> <span>Resend OTP</span> in 60 sec </div>

                        <div className="form-group">
                            <Button variant="contained" className="bt1">Verify</Button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}

export default Verification