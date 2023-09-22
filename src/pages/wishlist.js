import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";

const Wishlist = () => {
  const wishlists = useSelector((state) => state.wishlists);

  return (
    <div>
      <Layout>
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-between mt-5 items-start">
            <div className="w-full mb-6 lg:mb-0 lg:w-2/3 px-4 flex flex-col">
              <div className="flex flex-col">
                <div className="mb-4 bg-white border border-grey-lighter overflow-hidden">
                  <div className="px-6 mb-2">
                    <p className="text-black pt-4 font-bold text-2xl">
                      Your Wishlist
                    </p>
                  </div>
                  <ul className="list-reset px-6">
                    {wishlists.map((item) => {
                      return (
                        <li
                          key={item.id}
                          className=" border-b border-grey-lighter flex justify-between py-4"
                        >
                          <div className="flex items-s  tart w-4/5">
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
                            <div>
                              <img src={item.image} alt="" />
                            </div>
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
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Wishlist;
