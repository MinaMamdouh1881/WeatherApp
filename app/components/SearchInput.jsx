'use client';

import axios from 'axios';
import Result from './Result';
import { useEffect, useState } from 'react';
import { LiaSearchSolid } from 'react-icons/lia';
function SearchInput() {
  const [data, setData] = useState(null);

  //get weather data
  const fetchWeather = async (props) => {
    try {
      if (props.q) {
        const res = await axios(
          `https://api.openweathermap.org/data/2.5/weather?q=${props.q}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        setData(res.data);
        console.log(res.data);
      } else {
        const res = await axios(
          `https://api.openweathermap.org/data/2.5/weather?lat=${props.coords.latitude}&lon=${props.coords.longitude}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        );
        setData(res.data);
        console.log(res.data);
        console.log(res.data.weather[0].icon);
      }
    } catch (error) {
      setData(null);
      console.log('error');
    }
  };

  //get permissions to Geolocation
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        fetchWeather(pos);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const formHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    fetchWeather(Object.fromEntries(formData));
  };

  return (
    <div className='flex justify-center mx-5'>
      <div className='relative z-[2] flex flex-col h-screen pt-5 w-[500px]'>
        <div className='flex flex-col shrink pb-5'>
          <form
            onSubmit={formHandler}
            className='flex justify-center item-center'
          >
            <div className='flex flex-row border p-3 rounded-2xl w-full'>
              <input
                type='text'
                name='q'
                placeholder='Search City'
                className='bg-transparent outline-none w-full text-gray-200 placeholder:text-gray-200'
              />
              <button>
                <LiaSearchSolid className='text-3xl' />
              </button>
            </div>
          </form>
        </div>
        {data ? <Result data={data}/> : (
          <div className='grow flex justify-center items-center text-3xl'>
            Search To View Weather
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchInput;