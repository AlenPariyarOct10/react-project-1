import React from 'react';

const Header = (props)=>{

    return (
        <div>
            <div className="text-base font-bold text-green-600">
                {props.name}
            </div>
        </div>
    )
}

export default Header;