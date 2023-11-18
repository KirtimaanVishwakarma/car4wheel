import { useEffect, useMemo, useState } from "react";
import Modal from "../../components/modal";
import AdminMain from "../../utils/adminMain";
import Table from "../../components/forms/tabel";
import FormWrapper from "../../components/forms/formWrapper";
import { ReviewForm } from "../../utils/constant";
import Button from "../../components/forms/button";
import { Image } from "antd";
import Loader from "../../assets/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  deleteReview,
  getReviewList,
} from "../../redux/actions/reviewAction";
import { getBrandList } from "../../redux/actions/brandAction";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ReviewListing = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => setModal(!modal);
  const [file, setFile] = useState();
  const [formObj, setFormObj] = useState();
  const [refetch, setRefetch] = useState(false);
  const columns = useMemo(
    () => [
      {
        Header: "Image",
        accessor: "image",
        Cell: ({ value }) => (
          <Image src={value?.url} className="!h-12" alt={value?.public_id} />
        ),
      },
      {
        Header: "Customer Name",
        accessor: "customerName",
      },
      {
        Header: "Brand Name",
        accessor: "brand",
      },
      {
        Header: "Model",
        accessor: "model",
      },
      {
        Header: "Review",
        accessor: "review",
        Cell: ({ value }) => (
          <div className="group relative whitespace-nowrap">
            <div className="pointer-events-none w-44 overflow-hidden truncate">
              {value}
            </div>
            <div className="absolute top-[-10px] left-0 z-50 -ml-2 hidden rounded border border-gray-300 bg-white-0 p-2  group-hover:block">
              {value}
            </div>
          </div>
        ),
      },
      {
        Header: "Action",
        accessor: "action",
        Cell: ({ row }) => (
          <div className="flex gap-2">
            <div data-tip="Edit" className="tooltip">
              <button
                className="btn btn-square btn-sm  hover:bg-green-300"
                // onClick={() => deleteCarHandler(row?.original?._id)}
              >
                <CiEdit
                  style={{ width: "65%", height: "100%" }}
                  className="text-green-700  hover:text-white-0"
                />
              </button>
            </div>
            <div data-tip="Delete" className="tooltip">
              <button
                className="btn  btn-square btn-sm  hover:bg-red-300"
                onClick={() => deleteReviewHandler(row?.original?._id)}
              >
                <MdDeleteForever
                  style={{ width: "65%", height: "100%" }}
                  className="text-red-700  hover:text-white-0"
                />
              </button>
            </div>
          </div>
        ),
      },
    ],
    []
  );

  const { loading, reviewList, message, error } = useSelector(
    (state) => state.review
  );
  const { brandList } = useSelector((state) => state.brand);

  const dispatch = useDispatch();
  const deleteReviewHandler = (id) => {
    dispatch(deleteReview(id));
    setRefetch(!refetch);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append("file", file);
    myForm.append("customerName", formObj.customerName);
    myForm.append("brand", formObj.brand);
    myForm.append("model", formObj.model);
    myForm.append("review", formObj.review);
    dispatch(addReview(myForm));
    setRefetch(!refetch);
    setModal(false);
  };

  useEffect(() => {
    dispatch(getReviewList());
  }, [dispatch, message]);
  useEffect(() => {
    dispatch(getBrandList());
  }, [dispatch]);
  useEffect(() => {
    const brand = ReviewForm.find((ele) => ele.id === "brand");
    const list = brandList?.list?.map((ele) => {
      return { label: ele.name, value: ele.name };
    });
    brand.options = list;
  }, [dispatch, brandList]);
  useEffect(() => {
    if (error) {
      dispatch({ type: "clearError" });
    }
    if (message) {
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);
  if (loading) {
    return <Loader />;
  }
  return (
    <AdminMain pageName={"Reviews"}>
      <div className="flex justify-end">
        <div className="w-fit">
          <Button
            btnClass="primary"
            name="Add New Review"
            onClick={modalHandler}
          />
        </div>
      </div>
      <Table columns={columns} data={reviewList?.list} />
      {modal && (
        <Modal
          setModal={modalHandler}
          heading={"Add New Review"}
          maxWidth={"max-w-[50%]"}
        >
          <div className="p-4">
            <form onSubmit={submitHandler}>
              <div>
                <FormWrapper
                  formObj={ReviewForm}
                  setInputObj={setFormObj}
                  setFile={setFile}
                />
              </div>
              <div className="mt-5">
                <Button btnClass="primary" name="Create" type="submit" />
              </div>
            </form>
          </div>
        </Modal>
      )}
    </AdminMain>
  );
};

export default ReviewListing;
