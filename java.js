var click=0
  function getIncrement()
  {
    document.getElementById('display').style.background="white"
    document.getElementById('display').innerHTML=""
    click+=1;
  document.getElementById("inp").value=click
  

    
  }
  var click=0;
  function getDecrement()
  {
    document.getElementById('display').style.background="white"
    document.getElementById('display').innerHTML=""
   
    click-=1;
  document.getElementById("inp").value=click
  
  
  }

 
  function counterBegins()
  {
    if(click>0){
      
      var myVar = setInterval(function(){
          click --;
         document.getElementById('inp').value=click
     if(click==0){
       clearInterval(myVar)
       document.getElementById('display').innerHTML="Alert!!!<br>..................<br> value reached zero"
       document.getElementById('display').style.background="red"
     }
       else{
        document.getElementById('display').style.background="white"
       }
      
    
     
    
      
    },1000);
  }
  else{
    var myVar = setInterval(function(){
      click ++;
     document.getElementById('inp').value=click
     if(click==0){
      clearInterval(myVar)
      document.getElementById('display').innerHTML="Alert!!!<br>..................<br> value reached zero"
      document.getElementById('display').style.background="red"
     
    }
    else{
      document.getElementById('display').style.background="white"
     }
    
  
  
},1000);
  }
  

  }
 
  function setDefault(){
  
    document.getElementById('display').style.background="white"
document.getElementById("inp").value=10

click=10
clearInterval(myVar);
document.getElementById("display").innerHTML=""
  

  }

  
  

    