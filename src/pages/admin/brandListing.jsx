import { useEffect, useMemo, useState } from 'react';
import Modal from '../../components/modal';
import AdminMain from '../../utils/adminMain';
import Table from '../../components/forms/tabel';
import FormWrapper from '../../components/forms/formWrapper';
import { BrandForm, logInForm } from '../../utils/constant';
import Button from '../../components/forms/button';
import axios from 'axios';
import { BRAND, SINGLE_BRAND } from '../../utils/apiConstant';
import { useFetch } from '../../hooks/useFetch';
import { Image } from 'antd';

const BrandListing = () => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => setModal(!modal);
  const [file, setFile] = useState();
  const [barndList,setBrandList]=useState([])
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
  const deleteBrandHandler=async(id)=>{
    try {
      const {data}=await axios.delete(SINGLE_BRAND+id,{
        withCredentials:true
      })
      console.log(data);
      setRefetch(!refetch)
    } catch (error) {
      console.log(error);
    }
  }
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      const myForm = new FormData();
      myForm.append('file', file);
      myForm.append('name', formObj.name);

      await axios.post(BRAND, myForm, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        withCredentials: true,
      });
      setRefetch(!refetch)
     setModal(false)
    } catch (error) {
      console.log(error);
    }
  };

  const getBrandList = async () => {
    try {
      const {data} =await axios.get(BRAND, {
        withCredentials: true,
      });
      setBrandList(data?.brands)
    } catch (error) {}
  };
  

  useEffect(()=>{getBrandList()},[refetch])
 
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
      <Table columns={columns} data={barndList}/>
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
