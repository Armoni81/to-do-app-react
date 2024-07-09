import React from 'react';
  
  const Header = () =>  {
    const styles = {
        headerSytles: {
            fontSize:'30px',
            padding:'30px'
        }
    }
	return (
	  <div style={styles.headerSytles}>
        To-do
	  </div>
	);
  }
  
  export default Header;
  