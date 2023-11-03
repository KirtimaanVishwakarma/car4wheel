import { useMemo, useState } from 'react';
import Modal from '../../components/modal';
import AdminMain from '../../utils/adminMain';
import Table from '../../components/forms/tabel';
import FormWrapper from '../../components/forms/formWrapper';
import { logInForm } from '../../utils/constant';
import Button from '../../components/forms/button';

const Dashboard = () => {
  const [modal, setModal] = useState(true);
  const modalHandler = () => setModal(!modal);
  const columns = useMemo(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Business Name',
        accessor: 'businessName',
      },
      {
        Header: 'Promoter',
        accessor: 'promoter',
      },
      {
        Header: 'Company GST',
        accessor: 'companygst',
      },
      {
        Header: 'Company PAN',
        accessor: 'panNumber',
      },
      {
        Header: 'Category',
        accessor: 'category',
      },
      {
        Header: 'Aadhar Number',
        accessor: 'aadhaarNumber',
      },
      {
        Header: 'Document Status',
        accessor: 'status',
      },
    ],
    []
  );
  return (
    <AdminMain>
      <Table columns={columns} />
      {modal && (
        <Modal setModal={modalHandler}>
          <div className="p-4">
            <div className="text-center p-4 mb-4">
              <h1 className="text-2xl font-semibold">Log In</h1>
              <p>
                {' '}
                Don't have an account?{' '}
                <span className="font-bold cursor-pointer">Sign Up</span>
              </p>
            </div>
            <div>
              <FormWrapper formObj={logInForm} />
            </div>
            <div className="mt-5">
              <Button btnClass="primary" name="Log In" />
            </div>
          </div>
        </Modal>
      )}
    </AdminMain>
  );
};

export default Dashboard;
