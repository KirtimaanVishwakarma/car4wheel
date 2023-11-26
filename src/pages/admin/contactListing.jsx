import { useEffect, useMemo, useState } from "react";

import Loader from "../../assets/loader/loader";
import { useDispatch, useSelector } from "react-redux";
import { deleteInuqiry, getInquiry } from "../../redux/actions/inquiryAction";
import AdminMain from "../../utils/adminMain";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Table from "../../components/forms/tabel";
import { Image } from "antd";
import { LuBadgeInfo } from "react-icons/lu";
import { deleteContact, getContact } from "../../redux/actions/contactAction";

const Inquiry = () => {
  const columns = useMemo(
    () => [
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
                onClick={() => deleteBrandHandler(row?.original?._id)}
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

  const { loading, contact, message, error } = useSelector(
    (state) => state.contact
  );

  const dispatch = useDispatch();
  const deleteBrandHandler = (id) => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch, message]);
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
      <Table columns={columns} data={contact?.list} />
    </AdminMain>
  );
};

export default Inquiry;
