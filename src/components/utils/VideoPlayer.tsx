"use client"
import { useState } from "react";
import YouTube from "react-youtube"
import { ToastContainer, toast } from 'react-toastify';

interface props {
    YoutubeId: string
}

const VideoPlayer = ({ YoutubeId }: props) => {
    const [isOpened, setIsOpened] = useState(true);

    const options = {
        height: '250', // Tinggi video
        width: '300',  // Lebar video
    };

    const handleVideoPlayer = () => {
        setIsOpened((prev) => !prev)
    }

    const Player = () => (
        <div className="fixed bottom-2 right-2">
            <button className="text-color-primary float-right bg-color-secondary px-3 mb-2" onClick={handleVideoPlayer}>
                X
            </button>
            <YouTube
                videoId={YoutubeId}
                onReady={(e) => e.target.pauseVideo()}
                opts={options}
                onError={() => toast.error("Video Error", {
                    position: "top-center",
                    autoClose: 2000,
                    theme: "dark",
                    draggable: "mouse"
                })}
            />
            <ToastContainer />
        </div>)

    const OpenTrailerButton = () => (
        <button
            className="fixed bottom-5 right-5 w-36 bg-color-primary text-color-dark text-xl hover:bg-color-accent transition-all shadow-xl rounded "
            onClick={handleVideoPlayer}>
            Open the trailer
        </button>
    )
    return (isOpened ? <Player /> : <OpenTrailerButton />)
}

export default VideoPlayer;