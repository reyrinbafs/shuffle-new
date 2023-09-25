"use client"

import React, {useState, useEffect} from "react";

const GiphyComponent = () => {
    const [gifUrl, setGifUrl] = useState('')

    useEffect(()=>{
        const searchTopic = 'one piece anime';

        const fetchGif = async () => {
            const apiKey = process.env.GIPHY_API_KEY
            const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${searchTopic}&api_key=d4NK4tQGg2eAkORn0CpFMYKdm4KQliIm&width=600&height=200`)
            const data = await response.json()
            console.log(data)
            setGifUrl(data.data.images.downsized_large.url);
           
        }


        fetchGif();
    }, [])

    return (
        <>
        {gifUrl && <img src={gifUrl} alt="Giphy GIF"/>}     
        </>
    )
}

export default GiphyComponent;