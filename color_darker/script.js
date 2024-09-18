var rect = document.querySelector('#center');

//  step 1 =  firsy find mouse is coming to reactange or not 
//  step 2 =  find the location of mouse in rectange  buy using get.boundingclienttrect
//  step 3 = find how much you are in lest or how much in right using maprange() function

rect.addEventListener('mousemove',function(details){
     var rectlocation = rect.getBoundingClientRect();
     var insiderectVal = details.clientX - rectlocation.left;
    
     if (insiderectVal < rectlocation.width / 2) {
        var redcolor = gsap.utils.mapRange(0,rectlocation.width/2,255,0,insiderectVal);

        gsap.to(rect,{
            backgroundColor :`rgb(${redcolor},0,0)`,
            ease : Power4,
                });
     }
     else{
        var bluecolor = gsap.utils.mapRange(rectlocation.width/2,rectlocation.width, 255,0,insiderectVal);
        
        gsap.to(rect, {
            backgroundColor :`rgb(0,0,${bluecolor})`,
            ease : Power4,
     })
}
});

rect.addEventListener('mouseleave',function(){
    gsap.to(rect, {
        backgroundColor :'white'
    })
});
