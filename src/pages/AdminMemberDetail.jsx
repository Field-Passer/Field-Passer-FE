import React from 'react';
import NavBar from '../components/Admin/NavBar';
import Main from '../components/Admin/MemberDetail';

const AdminMemberDetail = () => {
  return (
    <div className='flex'>
      <NavBar />
      <Main />
    </div>
  );
};

export default AdminMemberDetail;