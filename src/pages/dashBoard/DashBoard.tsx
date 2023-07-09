import Navbar from "../../components/navbar/Navbar"
import SideBar from "../../components/sideBar/SideBar"
import "./dashBoard.scss"

const DashBoard = () => {
    return (
        <>
            <div className="dashBoard">
                <Navbar />
                <div className="inner">
                    <div className="left"><SideBar /></div>

                    <div className="right">
                       <div className="top">
                        <div className="topLeft"></div>
                        <div className="topRight"></div>
                       </div>
                       <div className="bottom"></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashBoard