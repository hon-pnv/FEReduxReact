import React, { Component } from "react";

import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class HardwareReplacePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hardware: [],
    };
  }
  async componentDidMount() {
    await axios.get(`http://127.0.0.1:8000/api/service/4`).then((res) => {
      this.setState({ hardware: res.data });
    });
    console.log("test");
  }
  render() {
    return (
      <div>
        {/* <Header></Header> */}
        <div className="prd-list">
          <nav className="linking">
            <a className="Itemlinking" href="http://localhost:3000/">
              Trang chủ
            </a>
            <span className="divider">/</span>
            <a className="Itemlinking" href="#">
              Thay Phần cứng
            </a>
          </nav>
          <div></div>
          <br></br>
          <div className="prd-container">
            {this.state.hardware.map((products, index) => (
              <a href={`/HardwareReplaceDetail/${products.id}`}>
                <div className="prd" key={index}>
                  <img
                    className="prd-img"
                    style={{ width: "200px", height: "200px" }}
                    src={products.img}
                    alt="file"
                  ></img>
                  <p className="prd-name">{products.product_name}</p>

                  <div>
                    <span className="prd-price">{products.price}VND</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <br></br>
        </div>
        {/* <Footer></Footer> */}
        <br></br>
        <br></br>
      </div>
    );
  }
}
