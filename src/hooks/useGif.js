import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
// ye uper nahi likh sakhte yaha kuki isme tag define nahi h toh yeaha code fat jayega

const useGif = () => {

    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState('false');
    
    async function fetchData(tag) {
        setLoading(true);
        
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url); // ye ek type ka promise h aur fetch api promise pe based hoti h
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData('car');
    }, [] )

    return {gif,loading, fetchData};

}

export default useGif

// toh useGif ek custom hook h jo hm random aur tag dono ke andar use akr rahe h jiski puri defination 
// yaha as a function likhi h
// aur isse random aur tag dono m code chota ho jayega const fn wala aur chahe jsx wala matlab return wala
// toh kitna bhi bda ho diakt nahi h lekin use pehle jo code hoga agar vo chota hua toh optimal hoga 