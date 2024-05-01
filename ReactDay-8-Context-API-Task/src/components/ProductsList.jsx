import AppNav from "../AppNav";
import jsonData from "../assets/product.json";

function ProductsList() {
  return (
    <>
      <div className="container">
        <div>
          <AppNav />
        </div>
        <div>
          {jsonData.map((product) => {
            return (
              <div key={product.id}>
                <p>{product.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
