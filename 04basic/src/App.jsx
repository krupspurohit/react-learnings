import { useState } from "react"


function App() {
  const [color, setcolor] = useState("olive")



  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center w-full bottom-12 rounded-full" style={{ backgroundColor: "#ffffff" }}>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">
            <button onClick={() => setcolor("red")} className="px-4 py-1 rounded-full outline-none shadow-lg" style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setcolor("blue")} className="px-4 py-1 rounded-full outline-none shadow-lg" style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setcolor("green")} className="px-4 py-1 rounded-full outline-none shadow-lg" style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setcolor("yellow")} className="px-4 py-1 rounded-full outline-none shadow-lg" style={{ backgroundColor: "yellow" }}>Yallow</button>
            <button onClick={() => setcolor("pink")} className="px-4 py-1 rounded-full outline-none shadow-lg" style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={() => setcolor("black")} className="px-4 py-1 rounded-full outline-none shadow-lg" style={{ backgroundColor: "black" }}>Black</button>
            <button onClick={() => setcolor("chocolate")} className="px-4 py-1 rounded-full outline-none shadow-lg" style={{ backgroundColor: "chocolate" }}>Chocolate</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
