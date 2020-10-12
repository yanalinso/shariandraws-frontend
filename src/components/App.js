import React from 'react';
import Header from "./ui/Header";
import Body from "./ui/Body";
import custom from "./ui/custom.css"


function App() {
    return (
        <>
            <div className={custom.bg}>
                <Header/>
                <Body/>
            </div>
        </>
    );
}

export default App;
