// maintaining guess number
var number= Number(document.querySelector('.number').textContent);

//logic for code


document.querySelector(".check").addEventListener("click",function(){


  var numberName = Number(document.querySelector('.number').textContent=Math.floor(Math.random()*(5-1)+1));
  console.log(numberName)      
      var number = document.querySelector('.guess').value; 
      var n = document.querySelector('.score').textContent;

      
      if(!number){
         document.querySelector('.message').textContent="Pls Enter a number";
         document.querySelector('.number').textContent="?";

         document.querySelector('.score').textContent=10;
      }
      else if(number==numberName && n<=10){
        document.querySelector('.message').textContent="You Won ";
        document.body.style.backgroundColor = "green";
        
        document.querySelector('.highscore').textContent=inc;
        
      }else if(number>numberName && n<=10){
          document.querySelector('.message').textContent="to high";
          document.querySelector('.number').textContent="?";
        }else if(number<numberName && n<=10){
          document.querySelector('.message').textContent="to low";
          document.querySelector('.number').textContent="?";
        }
})






//chances
var inc=10;
function myFunction() {
   inc=inc-1;
   if(inc>=0){
    document.querySelector('.score').textContent=inc;
   }else if(inc==0){
     document.querySelector('.message').textContent="press Again"
     document.body.style.backgroundColor='red';
   }
   else{
     document.querySelector('.message').textContent="Start again";
   }  
}


// again button

document.querySelector('.again').addEventListener("click",function(){
  if(confirm("Are you sure, want to refresh?")){
    location.reload();
  }
})