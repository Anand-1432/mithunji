import { Button } from "@mui/material"
import "./advanceDetails.scss"

const AdvanceDetails = () => {
    return (
        <>
            <div className="advanceDetails">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Product Code" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Select Business Type" />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Delivery Time" />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" placeholder="Additional Information" />
                    </div>
                    <div className="form-group">
                        <Button variant="contained" className="bt">Add Product</Button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdvanceDetails