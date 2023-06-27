import "./home.scss"

const Home = () => {
    return (
        <>
            <div className="home">

                <nav> mithuji </nav>

                <div className="topContainer">
                    <div className="topInner">
                        <div className="options">
                            <div>Product</div>
                            <div>Category</div>
                            <div>Seller</div>
                        </div>

                        <div className="searchSection">
                            <input type="text" className="form-control" placeholder="Search for Anything..." />
                            <button className="btn">sds</button>
                        </div>

                        <div className="selectCon">
                            <select name="" id="">
                                <option value="">All India</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="contentSection"></div>

                <div className="midContainer"></div>

                <div className="productCategoryCon"></div>
                <div className="productCategoryCon"></div>
                <div className="productCategoryCon"></div>

            </div>
        </>
    )
}

export default Home