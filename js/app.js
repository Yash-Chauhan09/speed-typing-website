
const randomText = ["I am yash aryan chauhan and i am a web developer.",
                       "You have to be fast in typing to get your first typing job.",
                    "I am just adding some random text here for practising fast typing so type fast but dont hurt your keyboard buttons."]
let msg = document.getElementById('msg');
let inpText =  document.getElementById('inpText');
let btn = document.getElementById('btn');
let startTime,endTime;
inpText.disabled = true;
const playgame =()=>{
    let typeWord = Math.floor(Math.random()*randomText.length);
    msg.innerText = randomText[typeWord];
    let date = new Date();
startTime = date.getTime();
btn.innerText = "Done";
}
const endGame = ()=>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime = ((endTime-startTime)/1000);
    // console.log(totalTime);
    let totalStr = inpText.value;
    let wordCount = wordCounter(totalStr);
    let speed =Math.round(((wordCount / totalTime)*60));
    let finalMsg ="You typed total at "+ speed + " words per minutes "; 
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText = finalMsg;
}
 const compareWords = (str1,str2)=>{
  let word1 = str1.split(" ");
  let word2 = str2.split(" ");
  let count = 0;
  word1.forEach((item,index) => {
     if(item == word2[index]){
     count++;
}
});
let errorWords = (word1.length - count);
 
return( count + " correct out of " + word1.length + " words and the total number of errors are " + errorWords + ".");

 }
const wordCounter = (str)=>{
let response = str.split(" ").length;
// console.log(response);
return response;

}

btn.addEventListener('click', function(){
    // console.log(this);
    if(this.innerText == 'Start'){
        
        inpText.disabled = false;
        playgame();
        
    }
    else if(this.innerText =='Done'){
        inpText.disabled = true;
        btn.innerText = 'Start';
            endGame();

    }
})