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
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';

const BrandListing = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => setModal(!modal);
  const [file, setFile] = useState();
  const [formObj, setFormObj] = useState();
  const [refetch, setRefetch] = useState(false);
  const [pageIndex,setPageIndex]=useState(0)
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: '_id',
      },
      {
        Header: 'Brand Name',
        accessor: 'name',
      },
      {
        Header: 'Image',
        accessor: 'logo',
        Cell: ({ value }) => (
          <Image
            src={value?.url}
            className="!h-8 !w-8"
            alt={value?.public_id}
          />
        ),
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div className="flex gap-2">
            {' '}
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
                onClick={() => deleteBrandHandler(row?.original?._id)}
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

  const { loading, brandList, getBrand, message, error } = useSelector(
    (state) => state.brand
  );

  const dispatch = useDispatch();
  const deleteBrandHandler = (id) => {
    dispatch(deleteBrand(id));
    setRefetch(!refetch);
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
    dispatch(getBrandList());
  }, [dispatch, getBrand, message]);
  useEffect(() => {
    if (error) {
      dispatch({ type: 'clearError' });
    }
    if (message) {
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <AdminMain pageName={'Brands'}>
      <div className="flex justify-end">
        <div className="w-fit">
          <Button
            btnClass="primary"
            name="Add New Brand"
            onClick={modalHandler}
          />
        </div>
      </div>
      <Table
        columns={columns}
        data={brandList?.list}
        loading={loading}
        pageCount={Math.ceil(brandList?.totalElement / brandList?.size)}
        totalElements={brandList?.totalElement}
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

export default BrandListing;
