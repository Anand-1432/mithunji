import { Button } from "@mui/material"
import "./category.scss"

const Category = () => {
    return (
        <>
            <div className="categoryContainer">
                <div className="search">
                    <input type="text" placeholder="Search Category" />
                    <Button className="searchBt" variant="contained">Search</Button>
                </div>
                <div className="listCon">
                    <div className="item">LED Light and Materials</div>
                    <div className="item">Home Appliance</div>
                    <div className="item">Printing Equipment</div>
                    <div className="item">Indoor Lights</div>
                    <div className="item">Outdoor Lights</div>
                    <div className="item">Agricultural Equipment</div>
                </div>
            </div>

        </>
    )
}

export default Category