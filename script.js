var xORo="X"
var xORo2="O"
var movesCount=0;
var movesCount2=0;
var count=0;
var players;
var d;

var youLose=false;
var box=document.getElementById('box');
var  cells = [];

for (var i = 1; i <= 9; i++) {
    cells.push(document.getElementById('cell' + i));
}

  

 function remove(){
for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
}
movesCount = 0;
movesCount2 = 0;
}

 var ran=0;
function run(){
  
  ran=Math.floor((Math.random() * 2) + 1);
  var ran2=Math.floor((Math.random() * 9) + 1);
  if (ran==1){
 
       box.innerHTML=("Computer goes first!")

    
    
    remove()
    
  
     cells[ran2 - 1].innerHTML = xORo2;

      }
   else if (ran==2){
     remove()
     
   
     
      box.innerHTML=("You go first!")
       
   
}
  moves()
  terminal()
}


function terminal(){
  if (cell1.innerHTML==xORo.value && cell2.innerHTML==xORo.value && cell3.innerHTML==xORo.value) {
    
    if (players.value=="one"){
    box2.innerHTML=("You win!");
     run() 
    }
    else{
      box2.innerHTML=("Player 1 wins!")
 remove()
    }
  }
  
else if  (cell1.innerHTML==xORo2 && cell2.innerHTML==xORo2 && cell3.innerHTML==xORo2){
   if (players.value=="one"){
    box2.innerHTML=("Computer wins!");
     run()
   }
    else{
      box2.innerHTML=("Player 2 wins!")
remove()
      }
 }
 else if (cell1.innerHTML==xORo.value && cell4.innerHTML==xORo.value && cell7.innerHTML==xORo.value){
    if (players.value=="one"){
    box2.innerHTML=("You win!");
      run()
    }
    else{
      box2.innerHTML=("Player 1 wins!")
remove()
    }
  }
      
 else     if (cell1.innerHTML==xORo2 && cell4.innerHTML==xORo2 && cell7.innerHTML==xORo2){
    if (players.value=="one"){
    box2.innerHTML=("Computer wins!");
     run() 
    }
    else{
      box2.innerHTML=("Player 2 wins!")
remove()
    }
  }
else  if (cell1.innerHTML==xORo.value && cell5.innerHTML==xORo.value && cell9.innerHTML==xORo.value) { 
  if (players.value=="one"){
    box2.innerHTML=("You win!");
   run() 
  }
    else{
      box2.innerHTML=("Player 1 wins!")
       remove()
    }
}
 else if (cell1.innerHTML==xORo2 && cell5.innerHTML==xORo2 && cell9.innerHTML==xORo2){
    if (players.value=="one"){
    box2.innerHTML=("Computer wins!");
     run() 
    }
    else{
      box2.innerHTML=("Player 2 wins!")
remove()
    }
  }
  
 else if (cell3.innerHTML==xORo.value && cell5.innerHTML==xORo.value && cell7.innerHTML==xORo.value) {if (players.value=="one"){
    box2.innerHTML=("You win!");
   run()
 }
    else{
      box2.innerHTML=("Player 1 wins!")
       remove() 
    }
                                                                                                      }
  else  if (cell3.innerHTML==xORo2 && cell5.innerHTML==xORo2 && cell7.innerHTML==xORo2){
    if (players.value=="one"){
    box2.innerHTML=("Computer wins!");
     run() 
    }
    else{
      box2.innerHTML=("Player 2 wins!")
remove()
    }
  }
 else  if (cell4.innerHTML==xORo.value && cell5.innerHTML==xORo.value && cell6.innerHTML==xORo.value){
  
             if (players.value=="one"){
             
   box2.innerHTML=("You win!");
  run()
               
             }
    else{
      box2.innerHTML=("Player 1 wins!")
       remove()  
    }
 }
 else if (cell4.innerHTML==xORo2 && cell5.innerHTML==xORo2 && cell6.innerHTML==xORo2){
     if (players.value=="one"){
    box2.innerHTML=("Computer wins!");
       run()
     }
    else{
      box2.innerHTML=("Player 2 wins!")
remove()
    }
  }
 else  if (cell7.innerHTML==xORo.value && cell8.innerHTML==xORo.value && cell9.innerHTML==xORo.value){if (players.value=="one"){
    box2.innerHTML=("You win!");
 run()
 }
    else{
      box2.innerHTML=("Player 1 wins!")
       remove()  
    }} 
  
else  if (cell7.innerHTML==xORo2 && cell8.innerHTML==xORo2 && cell9.innerHTML==xORo2){
     if (players.value=="one"){
    box2.innerHTML=("Computer wins!");
       run()
     }
    else{
      box2.innerHTML=("Player 2 wins!")
remove()
    }
  }
else   if (cell2.innerHTML==xORo.value && cell5.innerHTML==xORo.value && cell8.innerHTML==xORo.value) { if (players.value=="one"){
    box2.innerHTML=("You win!");
 run() 
}
    else{
      box2.innerHTML=("Player 1 wins!")
                                                                               remove()
    }
 }
  
else  if (cell2.innerHTML==xORo2 && cell5.innerHTML==xORo2 && cell8.innerHTML==xORo2){
    if (players.value=="one"){
    box2.innerHTML=("Computer wins!");
     run() 
    }
    else{
      box2.innerHTML=("Player 2 wins!")
remove()
    }
  }
 else  if (cell3.innerHTML==xORo.value && cell6.innerHTML==xORo.value && cell9.innerHTML==xORo.value){if (players.value=="one"){
    box2.innerHTML=("You win!");
   run()
 }
    else{
      box2.innerHTML=("Player 1 wins!")
           remove()        
    }} 
  
 else if (cell3.innerHTML==xORo2 && cell6.innerHTML==xORo2 && cell9.innerHTML==xORo2){
     if (players.value=="one"){
    box2.innerHTML=("Computer wins!");
       run()
     }
    else{
      box2.innerHTML=("Player 2 wins!")
  remove()
    }
  }
  
  else if (cell1.innerHTML!="" && cell3.innerHTML!=""&& cell4.innerHTML!=""&& cell5.innerHTML!=""&& cell6.innerHTML!=""&& cell7.innerHTML!=""&& cell8.innerHTML!=""&& cell9.innerHTML!=""){
    box2.innerHTML=("Tie!")
    run()
  }
}
function moves(){  


  cell1.onclick=function(){
        if (cell1.innerHTML==""){
       movesCount++;
     cell1.innerHTML=xORo.value;
    
        
    
 if (cell2.innerHTML==xORo2&&cell5.innerHTML==xORo2)
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo2&&cell8.innerHTML==xORo2)
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell8.innerHTML==xORo2)
      cell2.innerHTML=xORo2 
    
   else if (cell3.innerHTML==xORo2&&cell5.innerHTML==xORo2)
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo2&&cell7.innerHTML==xORo2)
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell7.innerHTML==xORo2)
      cell5.innerHTML=xORo2 
    
       else if (cell4.innerHTML==xORo2&&cell5.innerHTML==xORo2)
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo2&&cell6.innerHTML==xORo2)
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell6.innerHTML==xORo2)
      cell4.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell8.innerHTML==xORo2)
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo2&&cell9.innerHTML==xORo2)
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell9.innerHTML==xORo2)
      cell8.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell6.innerHTML==xORo2)
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo2&&cell9.innerHTML==xORo2)
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell9.innerHTML==xORo2)
      cell6.innerHTML=xORo2 
    
  else if (cell2.innerHTML==xORo.value&&cell5.innerHTML==xORo.value)
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo.value&&cell8.innerHTML==xORo.value)
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell8.innerHTML==xORo.value)
      cell2.innerHTML=xORo2 
    
   else if (cell3.innerHTML==xORo.value&&cell5.innerHTML==xORo.value)
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo.value&&cell7.innerHTML==xORo.value)
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell7.innerHTML==xORo.value)
      cell5.innerHTML=xORo2 
    
       else if (cell4.innerHTML==xORo.value&&cell5.innerHTML==xORo.value)
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo.value&&cell6.innerHTML==xORo.value)
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell6.innerHTML==xORo.value)
      cell4.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell8.innerHTML==xORo.value)
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo.value&&cell9.innerHTML==xORo.value)
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell9.innerHTML==xORo.value)
      cell8.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell6.innerHTML==xORo.value)
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo.value&&cell9.innerHTML==xORo.value)
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell9.innerHTML==xORo.value)
      cell6.innerHTML=xORo2
    
    else if (cell3.innerHTML=="" && movesCount>0)
      cell3.innerHTML=xORo2
    
    else if (cell5.innerHTML=="" && movesCount>0)
     cell5.innerHTML=xORo2
    
    else if (cell1.innerHTML==xORo.value && cell9.innerHTML=="")
      cell9.innerHTML=xORo2
    
    else if (cell3.innerHTML==xORo.value && cell7.innerHTML=="")
      cell7.innerHTML=xORo2
    
    else if (cell7.innerHTML==xORo.value && cell3.innerHTML=="")
      cell3.innerHTML=xORo2
      else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    
    else if (cell7.innerHTML==""&& movesCount>0)
      cell7.innerHTML=xORo2
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2
    
   
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2
    
    terminal()
   }
}
      
        cell2.onclick=function(){
          if (cell2.innerHTML==""){
          movesCount++;
       cell2.innerHTML=xORo.value;
          
          
          
          
          if (cell1.innerHTML==xORo2&&cell5.innerHTML==xORo2 && cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell4.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
          else if (cell3.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
       else if (cell4.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
          
        else  if (cell1.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell4.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
          else if (cell3.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
       else if (cell4.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
          
          else if (cell5.innerHTML==""&& movesCount>0)
     cell5.innerHTML=xORo2
          
          else if (cell1.innerHTML==xORo.value && cell9.innerHTML=="")
      cell9.innerHTML=xORo2
          
          else if (cell9.innerHTML==xORo.value && cell1.innerHTML=="")
      cell1.innerHTML=xORo2
    
    else if (cell3.innerHTML==xORo.value && cell7.innerHTML=="")
      cell7.innerHTML=xORo2
    
    else if (cell7.innerHTML==xORo.value && cell3.innerHTML=="")
      cell3.innerHTML=xORo2
     
          else if (cell1.innerHTML==""&& movesCount>0)
      cell1.innerHTML=xORo2
          
          else if (cell3.innerHTML==""&& movesCount>0)
      cell3.innerHTML=xORo2
    
    else if (cell7.innerHTML==""&& movesCount>0)
      cell7.innerHTML=xORo2
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2
          
          else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2
          terminal()
     }
        }
         cell3.onclick=function(){
           if (cell3.innerHTML==""){
           movesCount++;
       cell3.innerHTML=xORo.value;
           
           terminal()
           if (cell2.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2 
           
         else  if (cell1.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell4.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
    
       else if (cell4.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
    
        else   if (cell2.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2 
           
         else  if (cell1.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell4.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
    
       else if (cell4.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2
           
           else if (cell5.innerHTML==""&& movesCount>0)
     cell5.innerHTML=xORo2
           
            else if (cell1.innerHTML==xORo.value && cell9.innerHTML=="")
      cell9.innerHTML=xORo2
          
          else if (cell9.innerHTML==xORo.value && cell1.innerHTML=="")
      cell1.innerHTML=xORo2
    
    else if (cell3.innerHTML==xORo.value && cell7.innerHTML=="")
      cell7.innerHTML=xORo2
           
           else if (cell1.innerHTML==""&& movesCount>0)
      cell1.innerHTML=xORo2
          
    else if (cell7.innerHTML==""&& movesCount>0)
      cell7.innerHTML=xORo2
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2
           
     else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2
           terminal()
     }
         }
           cell4.onclick=function(){
             if (cell4.innerHTML==""){
             movesCount++;
       cell4.innerHTML=xORo.value;
             
             
             
             if (cell2.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2 
           
         else  if (cell1.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
    else if (cell3.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2    
    
    else if (cell7.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
             
      else if (cell3.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2        
          
             
          else   if (cell2.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2 
           
         else  if (cell1.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
    else if (cell3.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2    
    
    else if (cell7.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
             
      else if (cell3.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
             
             else if (cell7.innerHTML==""&& movesCount>0)
      cell7.innerHTML=xORo2 
             
          else if (cell5.innerHTML==""&& movesCount>0)
     cell5.innerHTML=xORo2
             
     else if (cell1.innerHTML==xORo.value && cell9.innerHTML=="")
      cell9.innerHTML=xORo2
          
          else if (cell9.innerHTML==xORo.value && cell1.innerHTML=="")
      cell1.innerHTML=xORo2
    
    else if (cell3.innerHTML==xORo.value && cell7.innerHTML=="")
      cell7.innerHTML=xORo2
    
    else if (cell7.innerHTML==xORo.value && cell3.innerHTML=="")
      cell3.innerHTML=xORo2
             
             
            
             else if (cell1.innerHTML==""&& movesCount>0)
      cell1.innerHTML=xORo2
          
          else if (cell3.innerHTML==""&& movesCount>0)
      cell3.innerHTML=xORo2
    
    
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2
             
             else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2
             
             terminal()
     }
           }
            cell5.onclick=function(){
              if (cell5.innerHTML==""){
              movesCount++;
       cell5.innerHTML=xORo.value;
              
             
              
                
    if (cell7.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
             
      else if (cell3.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2        
           
         else if (cell1.innerHTML==xORo2&&cell4.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
        else if (cell7.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
             
      else if (cell3.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2        
           
         else if (cell1.innerHTML==xORo.value&&cell4.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
    
       
           
           else if (cell1.innerHTML==xORo.value && cell9.innerHTML=="")
      cell9.innerHTML=xORo2
          
          else if (cell9.innerHTML==xORo.value && cell1.innerHTML=="")
      cell1.innerHTML=xORo2
    
    else if (cell3.innerHTML==xORo.value && cell7.innerHTML=="")
      cell7.innerHTML=xORo2
    
    else if (cell7.innerHTML==xORo.value && cell3.innerHTML=="")
      cell3.innerHTML=xORo2
              
              else if (cell1.innerHTML==""&& movesCount>0)
      cell1.innerHTML=xORo2
          
          else if (cell3.innerHTML==""&& movesCount>0)
      cell3.innerHTML=xORo2
    
    else if (cell7.innerHTML==""&& movesCount>0)
      cell7.innerHTML=xORo2
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2
              
     else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2     
              
      terminal()        
     }
            }
            cell6.onclick=function(){
              if (cell6.innerHTML==""){
              movesCount++;
       cell6.innerHTML=xORo.value;
              
               terminal()
            if (cell2.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2
              else if (cell1.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell4.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
          else if (cell3.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
       
    
    else if (cell7.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
    
    else if (cell2.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2
              
else if (cell1.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell4.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
          else if (cell3.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
       
    else if (cell7.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell8.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
    else if (cell7.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2 
              
           else if (cell5.innerHTML==""&& movesCount>0)
     cell5.innerHTML=xORo2
              
              else if (cell1.innerHTML==xORo.value && cell9.innerHTML=="")
      cell9.innerHTML=xORo2
          
          else if (cell9.innerHTML==xORo.value && cell1.innerHTML=="")
      cell1.innerHTML=xORo2
    
    else if (cell3.innerHTML==xORo.value && cell7.innerHTML=="")
      cell7.innerHTML=xORo2
    
    else if (cell7.innerHTML==xORo.value && cell3.innerHTML=="")
      cell3.innerHTML=xORo2
              
      else if (cell1.innerHTML==""&& movesCount>0)
      cell1.innerHTML=xORo2
          
          else if (cell3.innerHTML==""&& movesCount>0)
      cell3.innerHTML=xORo2
    
    else if (cell7.innerHTML==""&& movesCount>0)
      cell7.innerHTML=xORo2
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2
              
     else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2  
              
      terminal()        
     }
            }
             cell7.onclick=function(){
               if (cell7.innerHTML==""){
               movesCount++;
       cell7.innerHTML=xORo.value;
               
               terminal()
               
               if (cell2.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2 
               
              else if (cell1.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
       else if (cell4.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
               
   else if (cell2.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2 
               
   else if (cell1.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
       else if (cell4.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
               
           else if (cell5.innerHTML==""&& movesCount>0)
     cell5.innerHTML=xORo2
               
               else if (cell1.innerHTML==xORo.value && cell9.innerHTML=="")
      cell9.innerHTML=xORo2
          
          else if (cell9.innerHTML==xORo.value && cell1.innerHTML=="")
      cell1.innerHTML=xORo2
    
    else if (cell7.innerHTML==xORo.value && cell3.innerHTML=="")
      cell3.innerHTML=xORo2
               
    else if (cell1.innerHTML==""&& movesCount>0)
      cell1.innerHTML=xORo2
          
          else if (cell3.innerHTML==""&& movesCount>0)
      cell3.innerHTML=xORo2
  
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2           
               
    else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2   
               
               
       terminal()     
     }
             }
             cell8.onclick=function(){
               if (cell8.innerHTML==""){
               movesCount++;
       cell8.innerHTML=xORo.value;
               
               terminal()
               
               if (cell1.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
       else if (cell4.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell9.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
      
      else if (cell1.innerHTML==xORo2&&cell4.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
          else if (cell3.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell1.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
          
         else if (cell5.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
       else if (cell4.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell9.innerHTML=="")
      cell9.innerHTML=xORo2 
    
    else if (cell6.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell9.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
      
      else if (cell1.innerHTML==xORo.value&&cell4.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
   else if (cell4.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
          else if (cell3.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2         
               
           else if (cell5.innerHTML==""&& movesCount>0)
     cell5.innerHTML=xORo2
               
               else if (cell1.innerHTML==xORo.value && cell9.innerHTML=="")
      cell9.innerHTML=xORo2
          
          else if (cell9.innerHTML==xORo.value && cell1.innerHTML=="")
      cell1.innerHTML=xORo2
    
    else if (cell3.innerHTML==xORo.value && cell7.innerHTML=="")
      cell7.innerHTML=xORo2
    
    else if (cell7.innerHTML==xORo.value && cell3.innerHTML=="")
      cell3.innerHTML=xORo2
               
     else if (cell1.innerHTML==""&& movesCount>0)
      cell1.innerHTML=xORo2
          
          else if (cell3.innerHTML==""&& movesCount>0)
      cell3.innerHTML=xORo2
    
    else if (cell7.innerHTML==""&& movesCount>0)
      cell7.innerHTML=xORo2
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2 
               
     else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2 
               
               terminal()
     }
             }
              cell9.onclick=function(){
                if (cell9.innerHTML==""){
                movesCount++;
       cell9.innerHTML=xORo.value;
                
             
                
          if (cell2.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell8.innerHTML==xORo2&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2 
                
        else if (cell4.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo2&&cell6.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
    
      
      else if (cell1.innerHTML==xORo2&&cell4.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
         else if (cell1.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
          else if (cell4.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
          else if (cell3.innerHTML==xORo2&&cell5.innerHTML==xORo2&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo2&&cell7.innerHTML==xORo2&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
                
                
    else if (cell2.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell8.innerHTML=="")
      cell8.innerHTML=xORo2   
    
   else if (cell2.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell8.innerHTML==xORo.value&& cell2.innerHTML=="")
      cell2.innerHTML=xORo2 
                
        else if (cell4.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell6.innerHTML=="")
      cell6.innerHTML=xORo2 
    
     else if (cell4.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
    
    else if (cell5.innerHTML==xORo.value&&cell6.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
    
      else if (cell1.innerHTML==xORo.value&&cell4.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
          
else if (cell1.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell4.innerHTML=="")
      cell4.innerHTML=xORo2 
          
    else if (cell4.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell1.innerHTML=="")
      cell1.innerHTML=xORo2 
          
 else if (cell3.innerHTML==xORo.value&&cell5.innerHTML==xORo.value&& cell7.innerHTML=="")
      cell7.innerHTML=xORo2 
    
     else if (cell5.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell3.innerHTML=="")
      cell3.innerHTML=xORo2 
    
    else if (cell3.innerHTML==xORo.value&&cell7.innerHTML==xORo.value&& cell5.innerHTML=="")
      cell5.innerHTML=xORo2 
                
           else if (cell5.innerHTML==""&& movesCount>0)
     cell5.innerHTML=xORo2
          
    
    else if (cell7.innerHTML==xORo.value && cell3.innerHTML=="")
      cell3.innerHTML=xORo2
                
                else if (cell3.innerHTML==xORo.value && cell7.innerHTML=="")
      cell7.innerHTML=xORo2
                
                else if (cell1.innerHTML==""&& movesCount>0)
      cell1.innerHTML=xORo2
          
          else if (cell3.innerHTML==""&& movesCount>0)
      cell3.innerHTML=xORo2
    
    else if (cell7.innerHTML==""&& movesCount>0)
      cell7.innerHTML=xORo2
    
    else if (cell9.innerHTML==""&& movesCount>0)
      cell9.innerHTML=xORo2
                
    else if (cell4.innerHTML==""&& movesCount>0)
      cell4.innerHTML=xORo2
    
    else if (cell6.innerHTML==""&& movesCount>0)
      cell6.innerHTML=xORo2 
                
                terminal()
              }
                
}}

var movePosition;
var minimaxVal;
var send=0;

function sndForm(){

 
 document.getElementById("select").style.visibility = "hidden";

  xORo=document.getElementById('select');
  
 if (xORo.value=="X")
  xORo2="O"
  if (xORo.value=="O")
  xORo2="X"
    
  
}

 


function sndForm2(){

 document.getElementById("select2").style.visibility = "hidden"; 

 
  players=document.getElementById('select2');
  
  if (xORo.value==undefined)
alert("Please select either X or O")
  else{
if (players.value=="one"){

    cell1.onclick=function(){
        
       movesCount++;
     cell1.innerHTML=xORo.value;
     
        terminal()
      
   }

    run()
    
}
 else if (players.value=="two")
     {
       
       var ww=false;
       cell1.onclick=function(){
         if (cell1.innerHTML==""){
        terminal()
      if (ww==false){
     cell1.innerHTML=xORo.value
       ww=true; 
      }
     else{
       cell1.innerHTML=xORo2
      ww=false;  
     }
         terminal()
         }
   }
     
     cell2.onclick=function(){
        if (cell2.innerHTML==""){ 
      terminal()
     if (ww==false){
     cell2.innerHTML=xORo.value
       ww=true;
     }
     else{
       cell2.innerHTML=xORo2
     ww=false;
     }
       terminal()
        }
   }
     
     cell3.onclick=function(){
         if (cell3.innerHTML==""){
      terminal()
     if (ww==false){
     cell3.innerHTML=xORo.value
       ww=true;
     }
     else{
       cell3.innerHTML=xORo2
     ww=false;
     }
       terminal()
         }
   }
     cell4.onclick=function(){
        
       if (cell4.innerHTML==""){
     if (ww==false){
     cell4.innerHTML=xORo.value
       ww=true;
     }
     else{
       cell4.innerHTML=xORo2
     ww=false;
     }
       terminal()
       }
   }
     cell5.onclick=function(){
        
       if (cell5.innerHTML==""){
     if (ww==false){
     cell5.innerHTML=xORo.value
       ww=true;
     }
     else{
       cell5.innerHTML=xORo2
     ww=false;
     }
        terminal()
       }
   }
     cell6.onclick=function(){
        
     if (cell6.innerHTML==""){
     if (ww==false){
     cell6.innerHTML=xORo.value
       ww=true;
     }
     else{
       cell6.innerHTML=xORo2
     ww=false;
     }
        terminal()
     }
   }
     
     cell7.onclick=function(){
        
       if (cell7.innerHTML==""){
     if (ww==false){
     cell7.innerHTML=xORo.value
       ww=true;
     }
     else{
       cell7.innerHTML=xORo2
     ww=false;
     }
        terminal()
       }
   }
     cell8.onclick=function(){
        
       if (cell8.innerHTML==""){
     if (ww==false){
     cell8.innerHTML=xORo.value
       ww=true;
     }
     else{
       cell8.innerHTML=xORo2
     ww=false;
     }
        terminal()
       }
   }
     
     cell9.onclick=function(){
        
     if (cell9.innerHTML==""){
     if (ww==false){
     cell9.innerHTML=xORo.value
       ww=true;
     }
     else{
       cell9.innerHTML=xORo2
     ww=false;
     }
         terminal()
     }
     
       
   
     
     }
  }
     }}



  
  

