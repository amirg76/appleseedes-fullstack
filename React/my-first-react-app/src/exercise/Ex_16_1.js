import React from "react";
import styles from "../App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { storeData } from "./Store";

export class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page">
        <h1>This is my beautiful landing page</h1>
      </div>
    );
  }
}

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>{" "}
          </li>
        </ul>
      </nav>
    );
  }
}

export class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  componentDidMount() {
    this.setState({ data: storeData });
  }

  render() {
    return (
      <>
        {/* <div>hello</div> */}

        {this.state.data.map((storeElment) => (
          <div key={storeElment.id} className="product-link">
            <Link to={`/products/${storeElment.id}`}>{storeElment.title}</Link>
          </div>
        ))}
      </>
    );
  }
}

export class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "", image: "", price: "", id: "" };
  }

  componentDidMount() {
    const pageId = this.props.match.params.id;
    const findIDdata = storeData.filter((storeElment) => {
      return Number(pageId) === storeElment.id;
    });

    this.setState({
      title: findIDdata[0].title,
      image: findIDdata[0].imageUrl,
      price: findIDdata[0].price,
      id: findIDdata[0].id,
    });
  }

  render() {
    return (
      <>
        {this.state.id !== "" ? (
          <div>
            <div>{this.state.title}</div>
            <div>{this.state.price}</div>
            <img src={this.state.image}></img>
            <Link to="/products">
              <button>Back</button>
            </Link>
          </div>
        ) : (
          <h1>400 NOT FOUND</h1>
        )}
      </>
    );
  }
}
class Ex_16_1 extends React.Component {
  render() {
    return (
      <div className="styleMain">
        <BrowserRouter>
          <div className="nav-bar-continer">
            <Header />
          </div>
          <Route path="/" exact component={HomePage} />
          <div className="product-links">
            <Route path="/products" exact component={Products} />
          </div>
          <div className="productDetail">
            <Route path="/products/:id" exact component={ProductDetail} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default Ex_16_1;
