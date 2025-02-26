import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';

const ClipItem = ({ clip, hasUserRated, setExpandedClip, index }) => {
  const videoRef = useRef(null);
  const thumbnailRef = useRef(null);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <Link
      to={`/clips/${clip._id}`}
      state={{ from: location }}
      onClick={() => setExpandedClip(clip._id)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative w-[80vw] md:w-[30vw] lg:w-[25vw] max-w-[450px] aspect-video animate-fade hover:scale-105 transition duration-200`}
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {hasUserRated && (
        <div className="absolute z-30 top-2 right-2 bg-blue-500/50 border-blue-600 border-2 backdrop-blur-md text-white px-2 py-1 rounded-md flex items-center">
          <FaCheck className="mr-1" /> Rated
        </div>
      )}

      <div className="absolute z-30 top-2 left-2 bg-neutral-800/50 border-neutral-700 border-2 backdrop-blur-md text-white px-2 py-1 font-bold rounded-md flex items-center">
        <a href={clip.link} className="cursor-pointer">
          {clip.streamer}
        </a>
      </div>

      {clip.thumbnail && (
        <img
          ref={thumbnailRef}
          src={clip.thumbnail}
          alt={`${clip.streamer} thumbnail`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition rounded-xl duration-200 z-10 ${hasUserRated ? 'border-2 border-blue-500' : 'border-2 border-neutral-950'
        }`}
        />
      )}

      <video
        ref={videoRef}
        className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl transition duration-200 z-20
        ${clip.thumbnail ? 'opacity-0' : 'opacity-100'} ${hasUserRated ? 'border-2 border-blue-500' : 'border-2 border-neutral-950'
        }`}
        src={clip.url + '#t=0.001'}
        muted
        preload={clip.thumbnail ? "none" : "metadata"}
        onPlaying={(e) => {
          if(clip.thumbnail && !e.target.classList.contains(`group-hover:opacity-100`)) {
            e.target.classList.add(`group-hover:opacity-100`)

            if(!thumbnailRef?.current?.classList.contains(`group-hover:opacity-0`)) {
              thumbnailRef.current.classList.add(`group-hover:opacity-0`)
            }
          }
        }}
      >
        Your browser does not support the video tag.
      </video>
    </Link>
  );
};

export default ClipItem;