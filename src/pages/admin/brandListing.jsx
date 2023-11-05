import { useEffect, useMemo, useState } from 'react';
import Modal from '../../components/modal';
import AdminMain from '../../utils/adminMain';
import Table from '../../components/forms/tabel';
import FormWrapper from '../../components/forms/formWrapper';
import { BrandForm } from '../../utils/constant';
import Button from '../../components/forms/button';
import { Image } from 'antd';
import Loader from '../../assets/loader/loader';
import { useDispatch, useSelector } from 'react-redux';
import { addBrand, deleteBrand, getBrandList } from '../../redux/actions/brandAction';

const BrandListing = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => setModal(!modal);
  const [file, setFile] = useState();
  const [formObj, setFormObj] = useState();
  const [refetch,setRefetch]=useState(false)
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
          <Image src={value?.url} className='!h-8 !w-8' alt={value?.public_id}/>
        ),
      },
      {
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row}) => (
          <div className='w-fit'>
          <Button name='Delete' btnClass="secondaey" onClick={()=>deleteBrandHandler(row?.original?._id)}/>
          </div>
        ),
      },
    ],
    []
  );

  const {loading,brandList,getBrand,message,error}=useSelector(state=>state.brand)

  const dispatch=useDispatch()
  const deleteBrandHandler=(id)=>{
      dispatch(deleteBrand(id))
      setRefetch(!refetch)
  }
  const submitHandler = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      myForm.append('file', file);
      myForm.append('name', formObj.name);
      dispatch(addBrand(myForm))
      setRefetch(!refetch)
     setModal(false)
  };

  useEffect(()=>{dispatch(getBrandList())},[dispatch,getBrand,message])
  useEffect(() => {
    if (error) {
      dispatch({ type: 'clearError' });
    }
    if (message) {
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);
  if(loading){
    return <Loader/>
  } 
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
      <Table columns={columns} data={brandList?.brands}/>
      {modal && (
        <Modal setModal={modalHandler} heading={'Add New Brand'} maxWidth={'max-w-[50%]'}>
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
