function Result({data}) {
 console.log(data);
 
  return (
    <div className='flex flex-col'>
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col justify-center items-center'>
          <img
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
            alt='wether image'
            className='object-cover w-[100px]'
          />
          <h1 className='text-3xl'>{data.weather[0].main}</h1>
        </div>
        <h1 className='text-7xl relative'>
          {data.main.temp.toFixed(1)}{' '}
          <span className='absolute -top-5 right-0 text-xl'>c</span>
        </h1>
      </div>
      <div className='flex flex-col absolute bottom-5 w-full justify-center items-center bg-black/60 p-5 rounded-xl gap-y-5 text-center'>
        <div>Weather In {data.name}</div>
        <div className='flex flex-row gap-x-5 items-center'>
          <div>
            <p className='font-bold text-2xl'>
              {data.main.feels_like.toFixed(0)}
            </p>
            <p className='text-xl'>Feels Like</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>
              {data.main.humidity.toFixed(0)}
            </p>
            <p className='text-xl'>Humidity</p>
          </div>
          <div>
            <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)}</p>
            <p className='text-xl'>Winds</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result
