import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllLogo from './Components/Catagory/AllLogo';
import Bisiness from './Components/Catagory/Bisiness ';
import DataEntry from './Components/Catagory/DataEntry';
import Digital from './Components/Catagory/Digital';
import Fiyer from './Components/Catagory/Fiyer';
import Flat from './Components/Catagory/Flat';
import Logo from './Components/Catagory/Logo';
import Mascot from './Components/Catagory/Mascot ';
import Photo from './Components/Catagory/Photo';
import Tshart from './Components/Catagory/Tshart';
import Ux from './Components/Catagory/Ux';
import Website from './Components/Catagory/Website';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
     <Header></Header>
    <Routes>
      <Route path="/" element={<Home />}>
      <Route index element={<AllLogo></AllLogo>} ></Route>
        <Route path="flat" element={<Flat/>}></Route>
        <Route path="logo" element={<Logo/>}></Route>
        <Route path="moscot" element={<Mascot></Mascot>}></Route>
        <Route path="bisiness" element={<Bisiness></Bisiness>}></Route>
        <Route path="fiyer" element={<Fiyer></Fiyer>}></Route>
        <Route path="tshirt" element={<Tshart></Tshart>}></Route>
        <Route path="dataentry" element={<DataEntry></DataEntry>}></Route>
        <Route path="digital" element={<Digital></Digital>}></Route>
        <Route path="photo" element={<Photo></Photo>}></Route>
        <Route path="ux" element={<Ux></Ux>}></Route>
        <Route path="website" element={<Website></Website>}></Route>
      </Route>
        <Route path="*" element={''} />
    </Routes>
    </div>
  );
}

export default App;
