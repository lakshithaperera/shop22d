const blousebtn = document.getElementById("blouse");
var arrow = document.getElementById('arrow')
const blousesection = document.getElementById("blousesection");


blousebtn.addEventListener('click',function()

{
   blousesection.style.display = 'block';
   arrow.style.display = 'block';
   dressessection.style.display = 'none';
   topsection.style.display = 'none';
   casualsection.style.display = 'none';
   shirtsection.style.display = 'none';
   formalsection.style.display = 'none';


}
)


const dressesbtn = document.getElementById("dresses");
const dressessection = document.getElementById("dressessection");

dressesbtn.addEventListener('click',() => {
   dressessection.style.display = 'block';
   arrow.style.display = 'block';
   blousesection.style.display = 'none';
   topsection.style.display = 'none';
   casualsection.style.display = 'none';
   shirtsection.style.display = 'none';
   formalsection.style.display = 'none';
   

})


const topbtn = document.getElementById("top");
const topsection = document.getElementById("topsection");

topbtn.addEventListener('click',() =>{
  topsection.style.display = 'block';
  arrow.style.display = 'block';
  blousesection.style.display = 'none';
  dressessection.style.display = 'none';
  casualsection.style.display = 'none';
  shirtsection.style.display = 'none';
  formalsection.style.display = 'none';

})


const casualbtn = document.getElementById("casual");
const casualsection = document.getElementById("casualsection");

casualbtn.addEventListener('click',() => {
   casualsection.style.display = 'block';
   topsection.style.display = 'none';
   arrow.style.display = 'block';
   blousesection.style.display = 'none';
   dressessection.style.display = 'none';
   shirtsection.style.display = 'none';
   formalsection.style.display = 'none';
})


const tshirtbtn = document.getElementById("tshirt");
const shirtsection = document.getElementById("shirtsection");

tshirtbtn.addEventListener('click', () => {
   shirtsection.style.display = 'block';
   casualsection.style.display = 'none';
   topsection.style.display = 'none';
   arrow.style.display = 'block';
   blousesection.style.display = 'none';
   dressessection.style.display = 'none';
   formalsection.style.display = 'none';

})

const formalbtn = document.getElementById("formal");
const formalsection = document.getElementById("formalsection");

formalbtn.addEventListener('click', () => {
   formalsection.style.display = 'block';
   shirtsection.style.display = 'none';
   casualsection.style.display = 'none';
   topsection.style.display = 'none';
   arrow.style.display = 'block';
   blousesection.style.display = 'none';
   dressessection.style.display = 'none';

})

const men = document.getElementById("men");

men.addEventListener('click', () => {
   formalsection.style.display = 'block';
   shirtsection.style.display = 'block';
   casualsection.style.display = 'block';
   blousesection.style.display = 'none';
   dressessection.style.display = 'none';
   topsection.style.display = 'none';
   arrow.style.display = 'none';
})

const women = document.getElementById("women");

women.addEventListener('click', () => {
   formalsection.style.display = 'none';
   shirtsection.style.display = 'none';
   casualsection.style.display = 'none';
   blousesection.style.display = 'block';
   dressessection.style.display = 'block';
   topsection.style.display = 'block';
   arrow.style.display = 'none';
});



const cartbtn = document.querySelector(".price img");
const cart = document.querySelector(".cart");
let x = 1;
while(x<10){
   cartbtn.addEventListener('click', () => {
   
      if(g==b){
          cart.style.backgroundColor = '#ff0000';
          b = 5;
      }else{
         cart.style.backgroundColor = '#ffffff';
         b = 10
      }
      
   });
   
   x++;
}




let g = 10;
let b = 10;


