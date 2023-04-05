import { useState, useEffect } from "react";
import { Hearts } from "react-loader-spinner";
import Modal from "./Modal";

function App() {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])


  return (
    <>
      {
        loading ?
          <div className="flex items-center justify-center h-screen">
            <Hearts
              height="200"
              width="200"
              color="#4fa94d"
              ariaLabel="hearts-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            /></div> : <>
            <div className="items center justify-center grid grid-rows-2 grid-flow-col gap-5">
              <h1 className="text-8xl text-corinthia text-matcha mt-20">Happy Anniversary Baby!!</h1>
              <Modal />
            </div>
          </>
      }
    </>
  );
}

export default App;