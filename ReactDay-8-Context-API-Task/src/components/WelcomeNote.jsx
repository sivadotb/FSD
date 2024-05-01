import { useContext } from "react";
import AppContext from "../AppContext";

function WelcomeNote() {
  //const storeName = "Tamil - Digital Store";
  const { appData } = useContext(AppContext);
  //console.log(appData);
  //console.log(appData.storeName);
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Welcome to {appData.storeName}!</h1>
            <p>
              We're so excited to have you here. We're a new digital store that
              offers a wide variety of products at competitive prices. We're
              committed to providing our customers with the best possible
              shopping experience, and we're always looking for new ways to
              improve.
            </p>
            <p>
              We offer a wide variety of products for your most esteemed
              lifestyle experience right from groceries to latest gadgets. We're
              sure you'll find something you love in our selection. And if you
              don't, please let us know and we'll be happy to try to find it for
              you.
            </p>
            <p>
              We offer free shipping on all orders over $50, and we have a
              30-day return policy. So you can shop with confidence knowing that
              you're getting the best possible deal.
            </p>
            <p>
              We're always looking for new ways to improve our customer
              experience. If you have any suggestions, please don't hesitate to
              contact us. We want to make sure that you're happy with your
              shopping experience at {appData.storeName}.
            </p>
            <p>
              Thank you for choosing {appData.storeName}! We look forward to
              serving you.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeNote;
