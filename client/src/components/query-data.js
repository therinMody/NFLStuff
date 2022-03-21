import React from 'react';
import styled from '@emotion/styled';

/**
 * Query Results conditionally renders Apollo useQuery hooks states:
 * loading, error or its children when data is ready
 */
const QueryData = ({ loading, error, data, children}) => {
  if (error) {
    console.log(error);
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <LoadingContainer>
        <h1>Loading...</h1>
      </LoadingContainer>
    );
  }
  if (!data) {
    return <p>Nothing to show...</p>;
  }
  if (data) {
    return children;
  }
};

export default QueryData;

const LoadingContainer = styled.div({
  textAlign: 'center',
  color: '#FFFFFF'
});