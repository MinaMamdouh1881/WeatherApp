'use client';

import axios from 'axios';
import { useRef } from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
function SearchInput() {
  const formRef = useRef(null);

  const formHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const res = await axios(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          Object.fromEntries(formData).q
        }&units=imperial&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      console.log(res.data);

      formRef.current.reset();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <div className='relative z-[2] flex flex-col'>
      <form
        onSubmit={formHandler}
        ref={formRef}
        className='flex justify-center item-center'
      >
        <div className='flex flex-row border p-3 rounded-2xl'>
          <input
            type='text'
            name='q'
            placeholder='Search City'
            className='bg-transparent outline-none w-72 md:w-96 text-gray-200 placeholder:text-gray-200'
          />
          <button>
            <LiaSearchSolid className='text-3xl' />
          </button>
        </div>
      </form>
    </div>
  );
}

export default SearchInput;
