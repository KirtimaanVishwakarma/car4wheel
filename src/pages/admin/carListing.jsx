import { useEffect, useMemo, useState } from 'react';
import Modal from '../../components/modal';
import AdminMain from '../../utils/adminMain';
import Table from '../../components/forms/tabel';
import FormWrapper from '../../components/forms/formWrapper';
import { BrandForm, carForm, logInForm } from '../../utils/constant';
import Button from '../../components/forms/button';
import axios from 'axios';
import { BRAND, SINGLE_BRAND } from '../../utils/apiConstant';
import { useFetch } from '../../hooks/useFetch';
import { useDispatch, useSelector } from 'react-redux';
import { addCar, getAllCars,deleteCar } from '../../redux/actions/car';
import { formatCurrency } from '../../utils/apiUtils';
import { Image } from 'antd';
import Loader from '../../assets/loader/loader';
import { getBrandList } from '../../redux/actions/brandAction';



const CarListing = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => setModal(!modal);
  const [file, setFile] = useState();
  const [formObj, setFormObj] = useState();
  const [arrayValue, setArrayValue] = useState([]);
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
        Header: 'Action',
        accessor: 'action',
        Cell: ({ row }) => (
          <div className="w-fit">
            <Button
              name="Delete"
              btnClass="secondaey"
              onClick={() => deleteCarHandler(row?.original?._id)}
            />
          </div>
        ),
      },
    ],
    []
  );

  const { loading, carList, error,message} = useSelector((state) => state.cars);
  const {brandList}=useSelector(state=>state.brand)

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
    setModal(false)
  };
 const deleteCarHandler=(id)=>{
      dispatch(deleteCar(id))
  }
  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch,message,error]);

  useEffect(()=>{dispatch(getBrandList())},[dispatch])

  useEffect(()=>{
    const brand= carForm.find(ele=>ele.id==='brand');
    const list=brandList?.list?.map(ele=>{return{label:ele.name, value:ele.name}})
    brand.options=list
   },[dispatch,brandList])
   
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
      <Table columns={columns} data={carList?.list} />
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
    </AdminMain>
  );
};

export default CarListing;
