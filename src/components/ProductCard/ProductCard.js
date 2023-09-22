import Link from "next/link";
import Ratings from "react-star-rating-component";
import AddBtn from "../AddBtn/AddBtn";

const ProductCard = ({ product }) => {
  return (
    <div className="cursor-pointer">
      <Link href={`/product/${product.id}`}>
        <div
          className="max-w-xs bg-white shadow-md hover:shadow-xl transition duration-100 ease-in-out rounded-lg overflow-hidden my-10"
          style={{ width: "300px" }}
        >
          <div className="px-4 py-2">
            <h1 className="text-gray-900 font-bold text-2xl truncate uppercase">
              {product.name}
            </h1>
            <p className="text-gray-900 text-md font-medium mt-1 uppercase">
              {product.brand}
            </p>
            <p className="text-gray-600 text-sm mt-1 truncate">
              {product.description}
            </p>
          </div>
          <img
            className="h-56 w-full object-cover mt-2"
            src={product.image}
            alt="NIKE AIR"
          />

          <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
            <h1 className="text-gray-200 font-bold text-xl">
              Ksh {product.price}
            </h1>
            <span onClick={(e) => e.stopPropagation()}>
              <AddBtn product={product} />
            </span>
          </div>

          <div className="flex justify-between px-4 py-2 bg-gray-900">
            <Ratings
              name="rate1"
              starCount={5}
              value={product.ratings}
              starColor="#f00"
              emptyStarColor="grey"
              editing={false}
              className="text-2xl"
            />
            <h1 className="text-white">{product.reviews} reviews </h1>
          </div>
          <div className="my-6 pt-3 flex flex-wrap mx-6 border-t">
            {product.tags.map((tag) => {
              return (
                <div
                  key={product.tags.indexOf(tag)}
                  className="text-xs mr-2 my-1 uppercase tracking-wider border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
