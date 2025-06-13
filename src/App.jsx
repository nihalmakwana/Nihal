import React, { useState } from "react"
import MainPortfolio from "./MainPortfolio"
import Intro from "./components/Intro/Intro"

function App() {
  const[showIntro, setShowIntro] = useState(true)

  return (
    <>
      {showIntro ? (
        <Intro onFinish={() => setShowIntro(false)} />
      ) : (
        <MainPortfolio />
      )}
    </>
  )
}

export default App
