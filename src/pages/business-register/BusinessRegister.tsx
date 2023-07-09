import "./businessRegister.scss"
import Navbar from "../../components/navbar/Navbar"
import business from "../../assets/business.png"
import { Button } from "@mui/material"


const BusinessRegister = () => {
    return (
        <>
            <div className="businessRegister">
                <Navbar />

                <div className="innerGrid container">
                    <div className="row">

                        <div className="col-6 imageCon">
                            <div>
                                <section>Take Your Business <br /> to New Heights</section>
                                <img src={business} alt="" />
                            </div>
                        </div>

                        <div className="col-6 contentCon">
                            <div className="box">

                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Business Name" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Document Type" />
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control inp" placeholder="GST" />
                                        <input type="text" className="form-control inp" placeholder="PAN" />
                                    </div>

                                    <Button className="btn1" variant="contained">Register</Button>
                                    <Button className="btn2" variant="contained">Need Help</Button>

                                    <span>Take help to our executive</span>

                                </form>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default BusinessRegister