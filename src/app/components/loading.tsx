import React from 'react';

function Loading() {
    return (
        <div className='w-full h-[100vh] z-50 fixed top-0 right-0 bg-[#e3000f63] header_div flex justify-center items-center'>
            <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        </div>
    );
}

export default Loading;