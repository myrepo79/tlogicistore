import React from 'react'

 import istore from '../../assets/istore.png';
 //import storelocator from '../../assets/store-locator.jpeg';





const Navbar = () => {
  return (
   
    <header>
        <div className='nav-bar'>
          <div >
            <img src={istore} alt="istore" />
          </div>
            {/* <div className='brand'>India- Store</div> */}
            <div className='search-bar'>
                <input type="text" placeholder='Locate a store near you...' className='input active' autoComplete='off' />
                <i className="ii-icon-search"> </i>
                <i className="ii-icon-close clear"> </i>
            </div>
            <div className='nav'>
            {/* <img src={storelocator} alt="store-locator" /> */}
            </div>
            <div className='cart'>store locator</div>
        </div>
       



    </header>
    
   
  );
};

export default Navbar