import Image from 'next/image';
import SearchInput from './components/SearchInput';
export default function Home() {
  return (
    <div className='relative top-0 left-0 w-full h-screen'>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]'></div>
      <Image
        src='https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='Weather BackGround'
        fill
        className=' object-cover'
      />
      <SearchInput />
    </div>
  );
}
