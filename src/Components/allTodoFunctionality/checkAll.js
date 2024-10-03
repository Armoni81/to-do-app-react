

import trashCan from '../../Images/trash-can_7279437.png'

import React, { useRef, useEffect, useState } from 'react';

const CheckAll = ({ setCheckedStatus }) => {
    const checkAllRef = useRef(null);
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if (checkAllRef.current) {
            const el = checkAllRef.current.checked;
            console.log(el, 'Element with ref');
       
        }
    }, []); // No dependencies here, effect runs once after the initial render
    console.log(isChecked, 'ischexked')
const checkAll = () => {
    setIsChecked(true)
    console.log(isChecked, 'ischeck')
    if(isChecked === true){
        setCheckedStatus((prevStatus) => {
            console.log(prevStatus, 'here')
            prevStatus.map((el) => {
    
                console.log(el, 'el')
            })
        })
}

}
    return (
        <div>
            <input
                type="checkbox"
                id="checkAll"
                ref={checkAllRef}
                style={{ width: '63px' }}
                onChange={checkAll}
                
            />
        </div>
    );
}

export default CheckAll;
