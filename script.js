var image;
var pimg;
var upimg;
function doUpload(){
  upimg=document.getElementById("finput");
  var imgR=upimg;
  pimg=document.getElementById("c1");
  image=new SimpleImage(imgR);
  image.drawTo(pimg);
}
function goGray(){
   
  for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  image.drawTo(pimg);
}
function goRed(){
   for(var pixel of image.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
     pixel.setRed(avg);
     pixel.setGreen(0);
     pixel.setBlue(0);
   }
  image.drawTo(pimg);
}
function goReset(){
  //var reset=document.getElementById("finput");
  
  pimg=document.getElementById("c1");
  image= new SimpleImage(upimg);
  image.drawTo(pimg);
}