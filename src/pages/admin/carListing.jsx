import { useEffect, useMemo, useState } from 'react';
import Modal from '../../components/modal';
import AdminMain from '../../utils/adminMain';
import Table from '../../components/forms/tabel';
import FormWrapper from '../../components/forms/formWrapper';
import {
  AppyOfferForm,
  carForm,
  carStatus,
} from '../../utils/constant';
import Button from '../../components/forms/button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCar,
  getAllCars,
  deleteCar,
  updateCar,
} from '../../redux/actions/car';
import { formatCurrency } from '../../utils/apiUtils';
import { Image } from 'antd';
import { getBrandList } from '../../redux/actions/brandAction';
import { MdDeleteForever } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { SiConvertio } from 'react-icons/si';
import { BiSolidOffer } from 'react-icons/bi';
import { createOffer } from '../../redux/actions/offerAction';

const CarListing = () => {
  const [modal, setModal] = useState(false);
  const [offerModal, setOfferModal] = useState(false);
  const [feildId, setFieldId] = useState('');
  const modalHandler = () => setModal(!modal);
  const [file, setFile] = useState();
  const [formObj, setFormObj] = useState();
  const [statusModal, setStatusModal] = useState(false);
  const [offerFormObj, setOfferFormObj] = useState();
  const [statusFormObj, setStatusFormObj] = useState();
  const [arrayValue, setArrayValue] = useState([]);
  const [pageIndex,setPageIndex]=useState(0)
  const dispatch = useDispatch();

  const columns = useMemo(
    () => [
      {
        Header: 'Image',
        accessor: 'images',
        Cell: ({ value }) => (
          <Image src={value?.url} className="!h-14" alt={value?.public_id} />
        ),
      },
      {
        Header: 'Brand Name',
        accessor: 'brand',
        Cell: ({ value }) => {
          return <span>{value?.name}</span>;
        },
      },
      {
        Header: 'Model',
        accessor: 'model',
      },
      {
        Header: 'Model Year',
        accessor: 'modelYear',
      },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: ({ value }) => {
          return <span>₹{formatCurrency(value)}</span>;
        },
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          return <span className="capitalize">{value}</span>;
        },
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div className="flex gap-2">
            <div data-tip="Change Status" className="tooltip">
              <button
                className="btn btn-square btn-sm  hover:bg-blue-b1"
                onClick={() => {
                  setFieldId(row?.original?._id);
                  setStatusModal(true);
                }}
              >
                <SiConvertio
                  style={{ width: '65%', height: '100%' }}
                  className="text-blue-700  hover:text-white-0"
                />
              </button>
            </div>
            <div
              data-tip={
                row?.original?.status === 'offer'
                  ? 'Aleady in offer'
                  : 'Apply Offer'
              }
              className={'tooltip'}
            >
              <button
                className="btn btn-square btn-sm  hover:bg-yellow-300"
                disabled={row?.original?.status === 'offer'}
                onClick={() => {
                  setOfferModal(true);
                  setFieldId(row?.original?._id);
                }}
              >
                <BiSolidOffer
                  style={{ width: '65%', height: '100%' }}
                  className="text-yellow-400  hover:text-white-0"
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
                onClick={() => deleteCarHandler(row?.original?._id)}
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

  const { loading, carList, error, message } = useSelector(
    (state) => state.cars
  );
  const { brandList } = useSelector((state) => state.brand);
  const { loading: offerLoading, getOffer } = useSelector(
    (state) => state.offer
  );

  const submitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('file', file);
    const multiInp = arrayValue.map((ele) => ele.value);
    myForm.append('features', multiInp);
    for (const key in formObj) {
      if (Object.prototype.hasOwnProperty.call(formObj, key)) {
        myForm.append(key, formObj[key]);
      }
    }
    dispatch(addCar(myForm));
    setModal(false);
  };

  const offerFormHandler = (e) => {
    e.preventDefault();
    const body = {
      car: feildId,
      discountPercentage: Number(offerFormObj?.discountPercentage),
      offerStartDate: offerFormObj?.offerStartDate,
      offerEndDate: offerFormObj?.offerEndDate,
    };

    dispatch(createOffer(body));
    setOfferModal(false);
  };

  const statusFormHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('status', statusFormObj.status);
    dispatch(updateCar(myForm, feildId));
    setStatusModal(false);
  };

  const deleteCarHandler = (id) => {
    dispatch(deleteCar(id));
  };
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch, message, error, getOffer]);

  useEffect(() => {
    dispatch(getBrandList());
  }, [dispatch]);

  useEffect(() => {
    const brand = carForm.find((ele) => ele.id === 'brand');
    const list = brandList?.list?.map((ele) => {
      return { label: ele.name, value: ele.name };
    });
    brand.options = list;
  }, [dispatch, brandList]);

  useEffect(() => {
    if (error) {
      dispatch({ type: 'clearError' });
    }
    if (message) {
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <AdminMain pageName={'Car Lists'}>
      <div className="flex justify-end">
        <div className="w-fit">
          <Button
            btnClass="primary"
            name="Add New Car"
            onClick={modalHandler}
          />
        </div>
      </div>
      <Table
        columns={columns}
        data={carList?.list}
        loading={loading}
        pageCount={Math.ceil(carList?.totalElement / carList?.size)}
        totalElements={carList?.totalElement}
        setPageIndex={setPageIndex}
        manualPage={pageIndex}
      />
      {modal && (
        <Modal
          setModal={modalHandler}
          heading={'Add New Car'}
          maxWidth={'max-w-[65%]'}
        >
          <div className="p-4">
            <form onSubmit={submitHandler}>
              <div>
                <FormWrapper
                  formObj={carForm}
                  setInputObj={setFormObj}
                  setFile={setFile}
                  arrayValue={arrayValue}
                  setArrayValue={setArrayValue}
                />
              </div>
              <div className="mt-5">
                <Button btnClass="primary" name="Create" type="submit" />
              </div>
            </form>
          </div>
        </Modal>
      )}
      {offerModal && (
        <Modal setModal={() => setOfferModal(false)} heading={'Apply Offer'}>
          <div className="p-4">
            <form onSubmit={offerFormHandler}>
              <div>
                <FormWrapper
                  formObj={AppyOfferForm}
                  setInputObj={setOfferFormObj}
                />
              </div>
              <div className="mt-5">
                <Button btnClass="primary" name="Create" type="submit" />
              </div>
            </form>
          </div>
        </Modal>
      )}

      {statusModal && (
        <Modal
          setModal={() => setStatusModal(false)}
          heading={'Change Status'}
          // maxWidth={"max-w-[65%]"}
        >
          <div className="p-4">
            <form onSubmit={statusFormHandler}>
              <div>
                <FormWrapper
                  formObj={carStatus}
                  setInputObj={setStatusFormObj}
                />
              </div>
              <div className="mt-5">
                <Button btnClass="primary" name="Change Status" type="submit" />
              </div>
            </form>
          </div>
        </Modal>
      )}
    </AdminMain>
  );
};

export default CarListing;
