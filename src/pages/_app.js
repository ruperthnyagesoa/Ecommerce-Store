import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/index.css";
import "../styles/tailwind.css";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

function MyApp({ Component, pageProps }) {
  return (
    <Elements stripe={stripePromise}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Elements>
  );
}

export default MyApp;
