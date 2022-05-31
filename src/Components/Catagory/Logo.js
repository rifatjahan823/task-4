import React from 'react';
import Details from '../Details/Details';
import useLogo from '../Hooks/useLogo';

const Logo = () => {
    const logos =useLogo('logo.json');
    const logo = logos.filter((meal=>meal.strCategory=='logo'));
    return (
        <div>
           <div className='row g-4'>
           {
               logo.map(logo=><Details
                logo={logo}
               key={logo.id}
               ></Details>)
           }
         </div> 
        </div>
    );
};

export default Logo;