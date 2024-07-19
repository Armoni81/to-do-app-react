import React from 'react';
import { header, stylesForHeader } from '../../Constants/consts';

  
  const Header = () =>  {
  
	return (
	  <div style={stylesForHeader.header}>
        {header}
	  </div>
	);
  }
  
  export default Header;
  