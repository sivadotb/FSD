import AppNav from "../AppNav";
import jsonData from "../assets/product.json";
import { useContext } from "react";
import AppContext from "../AppContext";

function ProductsList() {
  const { gblAppImageBasePath, setCart, cart } = useContext(AppContext);

  const addToCart = function (id) {
    //console.log(id);
    const selectedProduct = jsonData.filter((product) => product.id == id);
    console.log("Selected Product");
    console.log(typeof selectedProduct);
    console.log(selectedProduct);
    console.log("Current Cart Product");
    console.log(typeof cart);
    console.log(...cart);
    setCart([...cart, selectedProduct]);
    console.log("after setting the cart");
    console.log(cart);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <AppNav />
        </div>
        <div className="row">
          {jsonData.map((product) => {
            return (
              <div className="col-md-4" key={product.id}>
                <div className="card">
                  <img
                    src={gblAppImageBasePath() + product.thumbnail}
                    className="card-img-top ratio ratio-1x1"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <span>Rating : </span> {product.rating}
                    </li>
                    <li className="list-group-item">
                      <span>Price : </span>
                      {product.price} $
                    </li>
                  </ul>
                  <div className="card-body">
                    <a
                      href="#"
                      className="card-link"
                      onClick={() => {
                        addToCart(product.id);
                      }}
                    >
                      Add To Cart
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
