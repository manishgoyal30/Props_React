import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";


ReactDOM.render(
  <>
  <Card 
  imgsrc="https://c4.wallpaperflare.com/wallpaper/433/476/987/dark-netflix-netflix-tv-series-abstract-3d-abstract-hd-wallpaper-preview.jpg" 
  title="A Netflix Series"
  sname="Dark" 
  link="https://www.netflix.com/in/title/80100172"/>

  <Card
  imgsrc="https://c4.wallpaperflare.com/wallpaper/576/997/289/stranger-things-text-poster-wallpaper-preview.jpg" 
  title="A Netflix Series"
  sname="Stranger Things" 
  link="https://www.netflix.com/in/title/80057281"/>

  <Card
  imgsrc="https://c4.wallpaperflare.com/wallpaper/241/910/337/la-casa-de-papel-series-netflix-netflix-tv-series-hd-wallpaper-preview.jpg" 
  title="A Netflix Series"
  sname="Extra Curricular" 
  link="https://www.netflix.com/in/title/80990668" />
  
 </>,
   document.getElementById('root')
);
