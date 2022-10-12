import React from 'react';

const EmpleadoAvatar = ({avatar}) => {
    return (
        <div className='avatar my-1 mx-1'>
            <img className='w-100' src={avatar} alt={avatar}/>
        </div>
    );
};

export default EmpleadoAvatar;