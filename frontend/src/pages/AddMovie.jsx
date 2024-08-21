import React, { useEffect } from "react";
import ImageUploader from "../components/ImageUploader";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovie,
  getOneMovieToUpdate,
  updateMovie,
} from "../middlewares/movie.middleware";
import { useLocation, useNavigate, useParams } from "react-router";
import ErrorList from "../components/error-list/ErrorList";
import { resetState } from "../store/slices/movie.slice";

function AddMovie() {
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    oneMovie,
    oneMovieLoading,
    oneMovieSuccess,
    oneMovieError,
    addMovieLoading,
    addMovieSuccess,
    addMovieError,
    updateMovieLoading,
    updateMovieSuccess,
    updateMovieError,
  } = useSelector((state) => state.movie);

  useEffect(() => {
    if (id) {
      dispatch(getOneMovieToUpdate(id));
    }
  }, [id]);

  useEffect(() => {
    if (
      (!updateMovieLoading && updateMovieSuccess) ||
      (!addMovieLoading && addMovieSuccess)
    ) {
      navigate("/");
    }
    return () => {
      dispatch(resetState());
    };
  }, [addMovieSuccess, updateMovieSuccess]);

  useEffect(() => {
    if (oneMovie?._id) {
      formik.setFieldValue("name", oneMovie?.name);
      formik.setFieldValue("publishing_year", oneMovie?.publishing_year);
      // formik.setFieldValue("file", `http://localhost:8001${oneMovie?.cover_pic}`);
      // formik.setFieldValue()
    }
  }, [oneMovieSuccess, oneMovie]);

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("publishing_year", values.publishing_year);
    formData.append("file", values.file);
    if (id) {
      dispatch(updateMovie(id, formData));
    } else {
      dispatch(addMovie(formData));
    }

    // navigate("/");
  };
  useEffect(() => {
    return () => {};
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      publishing_year: "",
      file: "",
      id: "",
    },
    onSubmit: handleSubmit,
    //   validationSchema: adminSchema.LoginSchema(),
  });

  return (
    <main className=" flex flex-col justify-center items-center bg-img add-mov-wrapper">
    <div className="container">
      <div className="flex gap-5 flex-col w-[100%] edit-wrap">
        <div className="flex flex-row gap-3 items-center edit-head">
          <h2>{pathname.includes("edit") ? "Edit" : "Create a new movie"}</h2>
        </div>
        <ErrorList error={"hello this is erro"} />
        <div className="flex drop-wrapper">
          <div className="div-drop-img"><ImageUploader formik={formik} name={"file"} /></div>
          <div className="flex flex-col gap-5 edit-img-input">
            <div className="flex flex-col justify-evenly gap-2">
              <div className=" ">
                <input
                  type="text"
                  name="name"
                  placeholder="Title"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  className="p-2 w-[260px] outline-none rounded-md"
                />
              </div>
              {formik.errors.name && (
                <p className="text-red-600 inline-block">
                  {formik.errors.name}
                </p>
              )}
            </div>
            <div className="flex flex-col justify-evenly gap-2">
              <div className="pub">
                <input
                  type={"number"}
                  name="publishing_year"
                  value={formik.values.publishing_year}
                  onChange={formik.handleChange}
                  placeholder="Publishing year"
                  className="p-2 outline-none rounded-md"
                />
              </div>
              {formik.errors.publishing_year && (
                <p className="text-red-600 inline-block">
                  {formik.errors.publishing_year}
                </p>
              )}
            </div>
            <div className="flex pt-5 btn-b">
              <button
                type="button"
                onClick={formik.resetForm}
                className="py-2 px-8 rounded-md border"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={formik.handleSubmit}
                className="py-2 px-8 rounded-md btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default AddMovie;
