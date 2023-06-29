import { useEffect, useState } from "react"
import "./home.scss"
import { Button } from "@mui/material"
import EastIcon from '@mui/icons-material/East';
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/product-card/ProductCard";
import Navbar from "../../components/navbar/Navbar";

const Home = () => {


    const [array, setArray] = useState([
        {}, {}, {}, {}, {}, {}, {}, {},
    ])

    useEffect(() => {
        console.log(setArray);
    }, []);


    return (
        <>
            <div className="home">

                <Navbar />

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

                <div className="midContainer">

                    <div className="left">
                        <section>Sponsored Products</section>
                        {array.map((val, index) => {
                            return (
                                <div className="boxCon" key={index} onClick={() => console.log(val)}>
                                    <div className="box"></div>
                                    <span>Product Name</span>
                                </div>
                            );
                        })}

                    </div>

                    <div className="right">
                        <div className="innerDiv">
                            <section>Tell Us What <br /> You Need</section>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter Product Name" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter your mobile number" />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter your name" />
                                </div>
                                <div className="form-group">
                                    <Button className="bt" variant="contained">Submit</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="productCategoryCon">
                    <div className="d1"></div>
                    <div className="d2">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="d3">
                        <section><EastIcon /> <br /> View All</section>
                    </div>
                </div>
                <div className="productCategoryCon">
                    <div className="d1"></div>
                    <div className="d2">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="d3">
                        <section><EastIcon /> <br /> View All</section>
                    </div>
                </div>
                <div className="productCategoryCon">
                    <div className="d1"></div>
                    <div className="d2">
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                        <ProductCard />
                    </div>
                    <div className="d3">
                        <section><EastIcon /> <br /> View All</section>
                    </div>
                </div>

                <Footer />

            </div>
        </>
    )
}

export default Home