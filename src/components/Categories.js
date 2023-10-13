import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/catagories/catagoriesSlice';

export default function Categories() {
  const dispatch = useDispatch();
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <>
      <button type="button" className="categories-btn" onClick={handleStatus}>Check status</button>
    </>
  );
}
