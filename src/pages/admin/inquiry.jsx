import { useEffect, useMemo, useState } from "react";

import Loader from "../../assets/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { getInquiry } from "../../redux/actions/inquiryAction";
import AdminMain from "../../utils/adminMain";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Table from "../../components/forms/tabel";
import { Image } from "antd";
import { LuBadgeInfo } from "react-icons/lu";

const Inquiry = () => {
  const [refetch, setRefetch] = useState(false);
  const columns = useMemo(
    () => [
      {
        Header: "Email",
        accessor: "logo",
        Cell: ({ row }) => (
          <Image
            src={row?.original?.carId?.images?.url}
            className="!h-14 "
            alt={"car"}
          />
        ),
      },
      {
        Header: "User Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Contact No.",
        accessor: "contact",
      },

      {
        Header: "Message",
        accessor: "message",
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
            <div data-tip="View" className="tooltip">
              <button
                className="btn  btn-square btn-sm  hover:bg-blue-b1"
                // onClick={() => deleteCarHandler(row?.original?._id)}
              >
                <LuBadgeInfo
                  style={{ width: "65%", height: "100%" }}
                  className="text-blue-700  hover:text-white-0"
                />
              </button>
            </div>
            <div data-tip="Delete" className="tooltip">
              <button
                className="btn  btn-square btn-sm  hover:bg-red-300"
                // onClick={() => deleteBrandHandler(row?.original?._id)}
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

  const { loading, Inquiry, message, error } = useSelector(
    (state) => state.inquiry
  );

  const dispatch = useDispatch();
  //   const deleteBrandHandler = (id) => {
  //     dispatch(deleteBrand(id));
  //     setRefetch(!refetch);
  //   };
  //   const submitHandler = (e) => {
  //     e.preventDefault();
  //     const myForm = new FormData();
  //     myForm.append("file", file);
  //     myForm.append("name", formObj.name);
  //     dispatch(addBrand(myForm));
  //     setRefetch(!refetch);
  //     setModal(false);

  useEffect(() => {
    dispatch(getInquiry());
  }, [dispatch]);
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
    <AdminMain pageName={"Brands"}>
      <Table columns={columns} data={Inquiry?.list} />
    </AdminMain>
  );
};

export default Inquiry;
