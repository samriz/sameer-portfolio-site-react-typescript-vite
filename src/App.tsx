/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//import { Index } from './entry';
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import PageShell from "./pageshell";

export default function App()
{
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route index element={<Index/>}/> */}
                <Route index element={<PageShell pages={[<Home/>]}/>}/>
                <Route path="/about" element={<PageShell pages={[<About/>]}/>}/>
                <Route path="/contact" element={<PageShell pages={[<Contact/>]}/>}/> 
                {/* <Route index element={<PageShell pages={[<Home/>, <About/>, <Contact/>]}/>}/> */}
            </Routes>
        </BrowserRouter>
    );
}
/* function App() 
{
	const [count, setCount] = useState(0)

  	return (
		<>
		<div>
			<a href="https://vite.dev" target="_blank">
				<img src={viteLogo} className="logo" alt="Vite logo" />
			</a>
			<a href="https://react.dev" target="_blank">
				<img src={reactLogo} className="logo react" alt="React logo" />
			</a>
		</div>
		<h1>Vite + React</h1>
		<div className="card">
			<button onClick={() => setCount((count) => count + 1)}>
			count is {count}
			</button>
			<p>
			Edit <code>src/App.tsx</code> and save to test HMR
			</p>
		</div>
		<p className="read-the-docs">
			Click on the Vite and React logos to learn more
		</p>
		</>
  	)
}

export default App */
