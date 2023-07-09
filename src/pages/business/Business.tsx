import "./business.scss"
import Navbar from "../../components/navbar/Navbar"
import business from "../../assets/business.png"
import { Button } from "@mui/material"

const Business = () => {
  return (
    <>
      <div className="business">
        <Navbar />

        <div className="innerGrid container">
          <div className="row">

            <div className="col-6 contentCon">
              <section>Take Your <br /> Business to <br /> New <br /> Heights</section>
              <div className="btcon"><Button className="bt1" variant="contained">Register</Button></div>
              <div className="btcon"><Button className="bt2" variant="contained">Need Help</Button></div>
            </div>

            <div className="col-6 imageCon">
              <img src={business} alt="" />
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Business