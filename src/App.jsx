import './App.css'
import MyGoogleMap from './components/GoogleMap'
import PropertiesForm from './components/PropertiesForm'

function App() {

  return (
    <>
      <h1 className='text-2xl text-center text-[#a48a5b] my-5'>Find the closest coffee shop that matches your vibe!</h1>
      <div className='w-full flex justify-center items-center'>
      <MyGoogleMap />
      <PropertiesForm/></div>
    </>
  )
}

export default App
