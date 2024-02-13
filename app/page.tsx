// import Player from '@/componenets/lotties/animation'
import Search from '@/componenets/search-input/search'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main className="grid text-center p-8">
      <h1 className='main-header'>Store And Share</h1>  
      <div className='flex items-center justify-start pr-24'>
        {/* <Player/> */}
        <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <Search placeholder='Search Your Items'/>
    </main>
  );
}
