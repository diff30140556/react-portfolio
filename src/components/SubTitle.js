import React from 'react';

function SubTitle({ title, children }) {
    return (
        <div className="content-section">
            <h2 className='text-center'>{title}</h2>
            {children}
        </div>
    )
}

export default SubTitle;