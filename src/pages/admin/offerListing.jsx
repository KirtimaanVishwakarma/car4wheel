import { useEffect, useMemo, useState } from 'react';
import Modal from '../../components/modal';
import AdminMain from '../../utils/adminMain';
import Table from '../../components/forms/tabel';
import FormWrapper from '../../components/forms/formWrapper';
import { BrandForm } from '../../utils/constant';
import Button from '../../components/forms/button';
import { Image } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {
  addBrand,
  deleteBrand,
  getBrandList,
} from '../../redux/actions/brandAction';
import { deleteOffer, getOfferList } from '../../redux/actions/offerAction';
import { formatCurrency } from '../../utils/apiUtils';
import moment from 'moment/moment';
import { MdDeleteForever } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { LuBadgeInfo } from 'react-icons/lu';

const OfferListing = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => setModal(!modal);
  const [file, setFile] = useState();
  const [formObj, setFormObj] = useState();
  const [refetch, setRefetch] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const columns = useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'logo',
        Cell: ({ cell }) => (
          <Image
            src={cell?.row?.original?.car?.images?.url}
            className="!h-14"
            alt={'carLogo'}
          />
        ),
      },

      {
        Header: 'Original Price',
        accessor: 'price',
        Cell: ({ cell }) => (
          <span> {formatCurrency(cell?.row?.original?.car?.price)}</span>
        ),
      },

      {
        Header: 'Discount %',
        accessor: 'discountPercentage',
        Cell: ({ value }) => {
          return <span>{`${value}%`}</span>;
        },
      },
      {
        Header: 'Discounted Price',
        accessor: 'specialOfferPrice',
        Cell: ({ value }) => {
          return <span className="capitalize">{formatCurrency(value)}</span>;
        },
      },

      {
        Header: 'Offer Starts',
        accessor: 'offerStartDate',
        Cell: ({ value }) => {
          return (
            <span className="capitalize">
              {moment(value).format('DD-MM-YYYY')}
            </span>
          );
        },
      },

      {
        Header: 'Offer Ends',
        accessor: 'offerEndDate',
        Cell: ({ value }) => {
          return (
            <span className="capitalize">
              {moment(value).format('DD-MM-YYYY')}
            </span>
          );
        },
      },

      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div className="flex gap-2">
            <div data-tip="View" className="tooltip">
              <button
                className="btn  btn-square btn-sm  hover:bg-blue-b1"
                // onClick={() => deleteCarHandler(row?.original?._id)}
              >
                <LuBadgeInfo
                  style={{ width: '65%', height: '100%' }}
                  className="text-blue-700  hover:text-white-0"
                />
              </button>
            </div>
            <div data-tip="Edit" className="tooltip">
              <button
                className="btn btn-square btn-sm  hover:bg-green-300"
                // onClick={() => deleteCarHandler(row?.original?._id)}
              >
                <CiEdit
                  style={{ width: '65%', height: '100%' }}
                  className="text-green-700  hover:text-white-0"
                />
              </button>
            </div>
            <div data-tip="Delete" className="tooltip">
              <button
                className="btn  btn-square btn-sm  hover:bg-red-300"
                onClick={() => deleteHandler(row?.original?._id)}
              >
                <MdDeleteForever
                  style={{ width: '65%', height: '100%' }}
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

  const { loading, offerList, getOffer, message, error } = useSelector(
    (state) => state.offer
  );

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deleteOffer(id));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('file', file);
    myForm.append('name', formObj.name);
    dispatch(addBrand(myForm));
    setRefetch(!refetch);
    setModal(false);
  };

  useEffect(() => {
    dispatch(getOfferList());
  }, [dispatch, getOffer, message]);
  useEffect(() => {
    if (error) {
      dispatch({ type: 'clearError' });
    }
    if (message) {
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <AdminMain pageName={'Offers'}>
      <Table
        columns={columns}
        data={offerList?.list}
        loading={loading}
        pageCount={Math.ceil(offerList?.totalElement / offerList?.size)}
        totalElements={offerList?.totalElement}
        setPageIndex={setPageIndex}
        manualPage={pageIndex}
      />
      {modal && (
        <Modal
          setModal={modalHandler}
          heading={'Add New Brand'}
          maxWidth={'max-w-[50%]'}
        >
          <div className="p-4">
            <form onSubmit={submitHandler}>
              <div>
                <FormWrapper
                  formObj={BrandForm}
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

export default OfferListing;
