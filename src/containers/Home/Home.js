import React, { useState } from 'react';
import NeumorphicButton from '../../components/NeumorphicButton/NeumorphicButton';
import './Home.css'

const Home = () => {
    const [page, setPage] = useState(['home', 'about', 'portfolio']);
    
    return (
        <div className="home">
            <NeumorphicButton />
            <NeumorphicButton />
            <NeumorphicButton />
        </div>
    )
}

export default Home
