import React, { useEffect, useRef, useState } from "react";
// import close from "../../assets/icons/close.svg";
import upload from "../assets/icons/upload-img.svg";
import { useSelector } from "react-redux";

function ImageUploader({ formik, name, isDisabled }) {
  const [image, setImage] = useState(formik.values[name]);
  const { oneMovie } = useSelector((state) => state.movie);
  const imageRef = useRef();
  console.log(formik, image);
  useEffect(() => {
    console.log("aaaaaaaaaaa");
    if (oneMovie._id) {
      console.log("sdasdasdasdasd");
      setImage(`http://localhost:8001${oneMovie?.cover_pic}`);
      formik.setFieldValue(name, `http://localhost:8001${oneMovie?.cover_pic}`);
    }
  }, [oneMovie]);
  const handleClick = () => {
    console.log(imageRef);
    imageRef.current?.click();
  };

  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
    formik.setFieldValue(name, e.target.files[0]);
  };

  const handleCancel = () => {
    setImage("");
  };

  return (
    <div className="">
      {image ? (
        <>
          <div className="flex justify-center items-center w-[473px] h-[504px] disabled:cursor-not-allowed disabled:opacity-50 border-dotted border-[2px] border-white bg-[#224957] text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-12 text-sm rounded-lg edit-img-listing">
          <div className="flex flex-col items-center item-edit">
            <div className={` ${isDisabled ? "pointer-events-none" : ""}`}>
              {/* <span aria-disabled={isDisabled} onClick={handleCancel}>
                <img src={close} className="absolute top-[-7px] right-[235px] cursor-pointer" alt="close" width={"25px"} height={"25px"} />
              </span> */}
            </div>
            <div className="border-[5px] p-3">
              <img src={image} alt="imge" width={"473px"} height={"504px"} />
            </div>
            {/* <div className="flex flex-col items-center" onClick={handleClick}> */}
          </div>
          <div className="mt-2 flex items-center justify-center btn-edit-one">
            <button
              type="button"
              className="btn btn-primary p-2 border-o rounded rounded-[10px]"
              onClick={handleClick}
            >
              Click here to upload
            </button>
            {/* <img src={upload} alt="upload-icon" />
              <p>Drop an image here</p> */}
            {/* </div> */}
            <input
              ref={imageRef}
              className="hidden"
              type="file"
              name={name}
              onChange={handleChange}
            />
          </div>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center w-[473px] h-[504px] disabled:cursor-not-allowed disabled:opacity-50 border-dotted border-[2px] border-white bg-[#224957] text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 p-12 text-sm rounded-lg">
          <div className="flex flex-col items-center" onClick={handleClick}>
            {/* <button onClick={handleClick} disabled={isDisabled}>
              Click here to upload cover image
            </button> */}
            <img src={upload} alt="upload-icon" />
            <p>Drop an image here</p>
          </div>
          <input
            ref={imageRef}
            className="hidden"
            type="file"
            name={name}
            onChange={handleChange}
          />
        </div>
      )}
      {formik.errors[name] && (
        <p className="text-red-700">{formik.errors[name]}</p>
      )}
    </div>
  );
}

export default ImageUploader;
