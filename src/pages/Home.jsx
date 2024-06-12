import React from 'react';
import { Link, useParams } from 'react-router-dom'; 
import Card from '../components/Card';
import Pic1 from '../pages/Pic1';
import Pic2 from '../pages/Pic2';
import Pic3 from '../pages/Pic3';
import Pic4 from '../pages/Pic4';
import Pic5 from '../pages/Pic5';

let images = {
  pic1: { 
    url: "https://images.pexels.com/photos/25039669/pexels-photo-25039669/free-photo-of-a-view-of-mountains-and-valleys-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Mountains and Valleys at Sunset"
  },
  pic2: { 
    url: "https://images.pexels.com/photos/20721303/pexels-photo-20721303/free-photo-of-a-close-up-of-white-flowers-on-a-tree.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Close-up of White Flowers on a Tree"
  },
  pic3: { 
    url: "https://images.pexels.com/photos/25583967/pexels-photo-25583967/free-photo-of-a-hand-holding-a-red-flower-in-front-of-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Hand Holding a Red Flower"
  },
  pic4: { 
    url: "https://images.pexels.com/photos/13861099/pexels-photo-13861099.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Scenic View of the Landscape"
  }
  ,
  pic5: { 
    url: "https://images.pexels.com/photos/25626514/pexels-photo-25626514/free-photo-of-root-node-problems.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    title: "Tree View with Sky"
  }
};

export default function Home() {
  const { id } = useParams();
  const selectedImage = images[id] || images.pic1;

  return (
    <div>
      <Card imageUrl={selectedImage.url} title={selectedImage.title} />
      <div className='flex flex-wrap'>
        <Link to="/pic/pic1"><Pic1 /></Link>
        <Link to="/pic/pic2"><Pic2 /></Link>
        <Link to="/pic/pic3"><Pic3 /></Link>
        <Link to="/pic/pic4"><Pic4 /></Link>
        <Link to="/pic/pic5"><Pic5 /></Link>

      </div>
    </div>
  );
}
