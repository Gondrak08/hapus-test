import React,{useState, useEffect} from 'react';
import './global.css'
// components
import Header from './container/Header';
import Footer from './container/Footer';

import SectionOne from './container/mainContainers/SectionOne';
import NewsLetter from './container/mainContainers/NewsLetter';
import SectionThree from './container/mainContainers/SectionThree';
import SectionFour from './container/mainContainers/SectionFour';
import SectionFive from './container/mainContainers/SectionFive';

import ClipLoader from "react-spinners/ClipLoader";


function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 800)
  }, [])



  return (
    <div className="container_app" >
      {
        isLoading ? 
          <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'}} >
                  <ClipLoader color="4FB378" loading={isLoading}  size={150} />
            </div>
        </>
       :
          <>
     
        <Header/>
        <main id="main" >      
          <SectionOne/>
          <div className="divider_one">
            <div/>
          </div>
          <NewsLetter/>
          <div className="divider_one">
            <div />
          </div>
          <SectionThree/>
          <div className="divider_one">
            <div />
          </div>
          <SectionFour/>
          <div className="divider_one">
            <div />
          </div>
          <SectionFive/>
      </main>
            <Footer />
      </>
      }
    </div>
  );
}

export default App;
