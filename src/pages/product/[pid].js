import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ratings from "react-star-rating-component";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import AddBtn from "../../components/AddBtn/AddBtn";
import Layout from "../../components/Layout";
import { addItem, removeItem } from "../../store/wishlistSlice";

const Product = () => {
  const Router = useRouter();
  const products = useSelector((state) => state.products);
  const wishlists = useSelector((state) => state.wishlists);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { pid } = Router.query;
  const [wishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (pid) {
      const product = products.filter((product) => product.id == pid);
      setProduct(product[0]);
      setLoading(false);
      const wishlistProduct = wishlists.filter((item) => item.id == pid);

      if (wishlistProduct.length > 0) {
        setIsWishlisted(true);
      }
    }
  }, [pid]);

  return (
    <div>
      <Layout>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <section className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
              <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img
                  alt="ecommerce"
                  className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  src={product.image}
                />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                    {product.brand}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product.name}
                  </h1>
                  <div className="flex mb-4">
                    <Ratings
                      name="rate1"
                      starCount={5}
                      value={product.ratings}
                      starColor="#f00"
                      emptyStarColor="grey"
                      editing={false}
                      className="text-2xl"
                    />
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                      <p>{product.reviews} Reviews </p>
                    </span>
                  </div>
                  <p className="leading-relaxed">{product.description}</p>
                  <div className="flex mt-auto items-center pb-5 border-b-2 border-gray-200 mb-5">
                    <hr />
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      Ksh {product.price}
                    </span>
                    <span className=" ml-auto bg-gray-200 py-2 px-4">
                      <AddBtn product={product} />
                    </span>
                    <button
                      className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                      onClick={() => {
                        if (wishlisted) {
                          dispatch(removeItem(product.id));
                          setIsWishlisted(false);
                        } else {
                          dispatch(addItem(product));
                          setIsWishlisted(true);
                        }
                      }}
                    >
                      <UseAnimations
                        animation={heart}
                        // strokeColor="red"
                        reverse={wishlisted}
                        size={25}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Layout>
    </div>
  );
};

export default Product;
