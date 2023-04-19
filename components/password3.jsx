import { useEffect, useState } from "react";

function Password3({ Password3, setPassword3, validateNext }) {
  const [images, setImages] = useState([]);
  useEffect(() => {
    // get the images from the database
    // store the images in a state
    const second = fetch(
      `http://localhost:8080/api/login3?id=${sessionStorage.getItem("user")}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    ).then((response) => response.json());
    second.then((data) => {
      setImages(data.data.images);
    });
  }, []);

  // This component will be used to ask the user to select an image from a list of images which is stored in the database
  return (
    <div className="border border-3 p-32 rounded-lg w-1/3 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">Step Three</h1>
      <p className="text-gray-500">Select the image</p>
      <div className="mt-4 ">
        {/* Grid of 4 random images and one db image */}
        <div className="grid grid-cols-2 gap-4 w-full">
          {
            // This will be a grid of 4 random images
            images.map((item, i) => (
              <div className="border border-3 rounded-lg">
                <img
                  src={item}
                  alt="random"
                  className="w-full h-32 object-cover"
                  onClick={() => {
                    setPassword3({ image: item });
                  }}
                />
              </div>
            ))
          }
        </div>
      </div>
      <div className="mt-4 flex w-full items-center justify-center">
        <button className="btn btn-primary" onClick={validateNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Password3;
