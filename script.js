const words=[
{
    word: "garden",
    hint:"space for planting flowers"
},
{
    word: "parents",
    hint:"unconditional love"
},
{
    word: "apple",
    hint:"keeps the doctor away"
},
{
    word: "soldiers",
    hint:"member of army"
},
{
    word: "computer",
    hint:"a programmable machine"
},
{
    word: "books",
    hint:"found in library"
},
{
    word: "rectangle",
    hint:"having four sides"
},
{
    word: "medicines",
    hint:"cures patients"
},
{
    word: "headphones",
    hint:"realted to music"
},
{
    word: "monkey",
    hint:"naughty animal"
},
{
    word: "smoking",
    hint:"related to lungs "
},
{
    word: "clock",
    hint:"tells time"
},
{
  word:"bag",
  hint:"Helps to carry"
},
{
  word:"cycle",
  hint:"keeps you fit"
},
{
  word:"airplane",
  hint:" that flys"
},
{
  word:"love",
  hint:"everyone needs this"
},
{
  word:"bucket",
  hint:"used for bathing"
},
{
  word:"mirror",
  hint:"never laughs when you cry"
},
{
  word:"shiva",
  hint:"beats damru,evil shakes and wise wakes"
},
{  word:"keshav",
   hint:"developer of this website"

}
];
const wordText=document.querySelector(".word");
hintText=document.querySelector(".hint span");
inputField=document.querySelector("input");
timeText=document.querySelector(".time b");
refreshBtn=document.querySelector(".refresh_word");
checkBtn=document.querySelector(".check_word");
let correctWord,timer;
const initTimer =maxTime=>{
timer=setInterval(()=>{
if(maxTime>0){
    maxTime--;
    return timeText.innerText=maxTime;
}
clearInterval(timer);
alert(`TIME OUT! ${userWord.toUpperCase()} was the correct answer`);
initGame();
},1000);


}
const initGame = () => {
    initTimer(30);
let randomObj=words[Math.floor(Math.random()* words.length)];
let wordArray=randomObj.word.split("");
// console.log(randomObj);
for (let i = wordArray.length - 1; i > 0; i--) {
    let j= Math.floor(Math.random() * (i + 1));
    [wordArray[i] , wordArray[j]] = [wordArray[j] , wordArray[i]]
    
}
wordText.innerText=wordArray.join("");
hintText.innerText=randomObj.hint;
correctWord=randomObj.word.toLocaleLowerCase();
inputField.value="";
inputField.setAttribute("maxlength", correctWord.length);
console.log(wordArray,randomObj.word);

}
initGame();
const checkWord=()=>{
let userWord=inputField.value.toLocaleLowerCase();
// console.log(userWord);
if(!userWord) return alert( `Empty word is not allowed!`);
if(userWord!==correctWord){
    return alert( `OOPs ${userWord} is not a correct word`);
}
return alert( `CONGRATULATIONS! ${userWord.toUpperCase()} is a CORRECT word`);
}
refreshBtn.addEventListener("click",initGame);
checkBtn.addEventListener("click",checkWord);
