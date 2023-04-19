import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function ShopPage() {
  const navigate = useNavigate();
  // Guard ShopPage from unauthorized access by redirecting to / if not logged in
  const ShopPageGuard = () => {
    const auth = sessionStorage.getItem("user");
    const success = sessionStorage.getItem("success");
    if (auth && success) {
      return <ShopPage />;
    } else {
      return navigate("/");
    }
  };

  useEffect(() => {
    ShopPageGuard();
  });

  // This is the shop page which will show all the products
  return (
    <div className="flex items-center justify-center h-full w-full">
      {/*  Nav bar */}
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <img
              src="data:image/png;base64,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 "
              alt="logo"
              className="w-12 h-12"
            />
            <h1 className="text-2xl font-bold ml-2">Shop</h1>
          </div>
          <div className="flex items-center">
            <button
              className="btn btn-primary"
              onClick={() => {
                sessionStorage.removeItem("user");
                sessionStorage.removeItem("success");
                navigate("/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
        {/* Products */}
        <div className="flex flex-wrap justify-center">
          {
            // This will be a grid of 4 random images
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => (
              <div className="border border-3 rounded-lg m-4">
                <img
                  src={`http://picsum.photos/200/300/?random=${i + 1}`}
                  alt="random"
                  className="w-64 h-64 object-cover"
                />
                <div className="p-4">
                  <h1 className="text-xl font-bold">Product Name</h1>
                  <p className="text-gray-500">Product Description</p>
                  <div className="mt-4 flex items-center justify-between">
                    <h1 className="text-xl font-bold">$100</h1>
                    <button className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
