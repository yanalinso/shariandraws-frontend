import React from 'react';
import Header from "./ui/Header";
import Body from "./ui/Body";
import custom from "./ui/custom.css"
import Footer from "./ui/Footer";


function App() {
    return (
        <>
            <div className={custom.bg}>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        </>
    );
}

export default App;
