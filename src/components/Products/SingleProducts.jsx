import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { useGetProductQuery } from '../../features/api/apiSlice';
import { ROUTES } from '../../utils/routes';

const SingleProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({id});

  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME)
    }
    
  }, [isLoading, isFetching, isSuccess]);

  return (
    <div>SingleProducts</div>
  );
};


export default SingleProducts;