import React from 'react';
import { Oval } from 'react-loader-spinner';

const loaderStyle = {
  loaderContainer: {
    position: 'fixed', // Ensure it covers the entire viewport
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0,0.5)', 
    zIndex: 9, 
  },

};

const Spinner = () => {
  return (
    <div style={loaderStyle.loaderContainer}>
     <Oval
  height={80}
  width={80}
  color="#808080"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#000000"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>
    </div>
  );
};

export default Spinner;
