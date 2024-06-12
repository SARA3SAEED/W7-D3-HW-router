import React from 'react';

export default function Card({ imageUrl, title }) {
  return (
    <div className='hero min-h-screen w-[99%] h-[300px]' style={{ 
        backgroundImage: `url(${imageUrl})` ,
        backgroundRepeat: 'no-repeat' ,
        backgroundSize: 'cover'
        }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}
