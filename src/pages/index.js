import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard/ProductCard";
import { clearCart } from "../store/cartSlice";
import { filters } from "../store/productCardSlice";

export default function IndexPage() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const Router = useRouter();
  const { success } = Router.query;
  useEffect(() => {
    if (Router.query.success) {
      dispatch(clearCart());
    }
  }, [success]);

  return (
    <div>
      <Layout>
        <Head>
          <title>E - Commerce</title>
        </Head>

        <div className="flex ml-6 items-center">
          <span className="mr-3">Sort By</span>
          <div className="relative">
            <select
              onChange={(e) => dispatch(filters(e.target.value))}
              className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10"
            >
              <option value="recommended">Default</option>
              <option value="highest">Highest</option>
              <option value="lowest">Lowest</option>
            </select>
            <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4"
                viewBox="0 0 24 24"
              >
                <path d="M6 9l6 6 6-6"></path>
              </svg>
            </span>
          </div>
        </div>

        <div className="flex justify-evenly flex-wrap">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Layout>
    </div>
  );
}
