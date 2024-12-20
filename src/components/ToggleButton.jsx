import React from 'react'

const ToggleButton = ({isChecked,setIsSummarizeOn}) => {

    const handleCheckboxChange = () => {
        setIsSummarizeOn(!isChecked)
      }

  return (
    <>
     <label className='autoSaverSwitch relative inline-flex cursor-pointer select-none items-center '>
        <input
          type='checkbox'
          name='autoSaver'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`slider mr-3 flex h-[26px] w-[50px]  items-center rounded-full p-1 duration-200 ${
            isChecked ? 'bg-green-500' : 'bg-[#CCCCCE]'
          }`}
        >
          <span
            className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
              isChecked ? 'translate-x-6' : ''
            }`}
          ></span>
        </span>
        {/* <span className='label flex items-center text-sm font-medium text-black'>
          Auto Saver <span className='pl-1'> {isChecked ? 'On' : 'Off'} </span>
        </span> */}
      </label>
    </>
  )
}

export default ToggleButton