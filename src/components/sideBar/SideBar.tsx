import { useNavigate } from "react-router-dom"
import "./sideBar.scss"
import { base_add_product, dashBoard } from "../../App";
import { CATEGORY } from "../../utils/constants";

const SideBar = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="sideBar">
                <div className="optionsCon" onClick={() => navigate(dashBoard)}>Dashboard</div>
                <div className="optionsCon" onClick={() => navigate(base_add_product + "/" + CATEGORY)}>Products</div>
                <div className="optionsCon">Analytics</div>
                <div className="optionsCon">Products</div>
                <div className="optionsCon">Products</div>
                <div className="optionsCon">Products</div>
            </div>
        </>
    )
}

export default SideBar