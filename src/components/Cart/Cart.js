import { useStripe } from "@stripe/react-stripe-js";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const stripe = useStripe();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    cart.map((item) => {
      setTotal((prev) => {
        return prev + item.price * item.quantity;
      });
    });
  }, [cart]);

  const handleCheckout = async () => {
    const res = await fetch("/api/payout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cart }),
    });
    const session = await res.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    console.log(result);
  };

  return (
    <div className="container mx-auto">
      {cart.length ? (
        <div className="flex flex-wrap justify-between mt-5 items-start">
          <div className="w-full mb-6 lg:mb-0 lg:w-2/3 px-4 flex flex-col">
            <div className="flex flex-col">
              <div className="mb-4 bg-white border border-grey-lighter overflow-hidden">
                <div className="px-6 mb-2">
                  <p className="text-black pt-4 font-bold text-2xl">
                    Your Cart
                  </p>
                </div>
                <ul className="list-reset px-6">
                  {cart.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className=" border-b border-grey-lighter flex justify-between py-4"
                      >
                        <div className="flex items-s  tart w-4/5">
                          <div className="w-1/5 mr-6">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="flex-1 overflow-hidden">
                            <Link href={`/product/${item.id}`}>
                              <div className="pb-2 cursor-pointer hover:text-blue-800">
                                <span className="text-lg font-bold">
                                  {item.name}
                                </span>
                              </div>
                            </Link>
                            <p className="text-lg font-normal text-grey-dark">
                              Price : Ksh {item.price}
                            </p>
                          </div>
                        </div>
                        <div className="w-1/5 text-right relative">
                          <h1 className="appearance-none text-center bg-white border-solid rounded-none border border-grey-light text-black py-2 px-4 pr-8 focus:outline-none focus:bg-white focus:border-black">
                            Quantity
                          </h1>
                          <h1 className="appearance-none text-center bg-white border-solid rounded-none border border-grey-light text-black py-2 px-4 pr-8 focus:outline-none focus:bg-white focus:border-black">
                            {item.quantity}
                          </h1>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div className="px-6 py-4">
                  <div className="text-left font-normal text-sm text-blue-dark">
                    * Delivery Charges may apply
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-full mb-6 lg:mb-0 lg:w-1/3 px-4 lg:sticky"
            style={{ top: "1.25rem" }}
          >
            <div className="flex-grow bg-white border border-grey-lighter overflow-hidden">
              <div className="px-6 mb-2">
                <p className="text-black py-4 font-bold text-2xl">Total</p>
              </div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-3/4 pl-6">
                  <div className="w-full">
                    <span className="text-sm">Sub total</span>
                  </div>
                </div>
                <div className="w-1/4 pr-6 text-right">
                  <div className="w-full">
                    <span className="text-sm">Ksh {total}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center mb-4"></div>
              <div className="flex justify-between items-center mb-8">
                <div className="w-3/4 pl-6">
                  <div className="w-full">
                    <span className="text-sm font-bold">
                      Total (GST incluse)
                    </span>
                  </div>
                </div>
                <div className="w-1/4 pr-6 text-right">
                  <div className="w-full">
                    <span className="text-sm font-bold">Ksh {total}</span>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="w-full px-6">
                  <button
                    className="w-full mx-auto px-4 py-2 uppercase font-bold text-xs text-white bg-black lg:text-black lg:bg-white border-2 border-black border-solid hover:text-white hover:bg-black"
                    onClick={handleCheckout}
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="flex justify-center">
            <div className="py-3">
              <h1 className="text-xl">Your Cart is Empty</h1>
              <Link href="/">
                <p className="text-xl  font-semibold text-blue-500 underline cursor-pointer ">
                  Go shop some products
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
