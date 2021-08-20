import logo from './logo.svg';
import './App.css';
import SignInScreen from './signup';
import firebase from "firebase";
import React from 'react';
import ReactDOM from 'react-dom';


function Header() {
    return (
        <header class="head">
            <ul>
                <li><img id="image" src="src\img\Newton-School-1.webp"></img></li>
                <li><h3 id="newton">Newton School</h3></li>
            </ul>

        </header>
    );
}
function Home() {
    return (
    <div className="App">
        <Header />
        <SignInScreen />
    </div>
    );
}
export default Home;