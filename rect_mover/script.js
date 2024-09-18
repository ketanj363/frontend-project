window.addEventListener('mousemove',function(details){
    // mapRange(inMin , inMax, outMin , outMax, valueToMap)
    const rect = document.querySelector('#rect')
  const rectloc = gsap.utils.mapRange(0, 
    window.innerWidth, 
    100+rect.getBoundingClientRect().width/2, 
    window.innerWidth-(100+rect.getBoundingClientRect().width/2), 
    details.clientX,
)
    gsap.to('#rect',{
     left: rectloc+ 'px',
     ease: Power3,
    })
    
})

