const dateOfBirth=document.querySelector("#date-of-birth");
const luckyNumber=document.querySelector("#lucky-number");
const checkNumberButton=document.querySelector("#check-number");
const outputBox=document.querySelector("#output-box");

function compareValue(sum,luckyNumber){
    if(sum%luckyNumber.value===0){
        outputBox.innerText="Number is Lucky";
    }
    else{
        outputBox.innerText="Number is not that Lucky";
    }


}
function checkBirthDateIsLucky(){
    const dob=dateOfBirth.value;
    const sum=calculateSum(dob);
    compareValue(sum,luckyNumber);
}

function calculateSum(dob){
      dob=dob.replaceAll("-","");
      let sum=0;
      for(let index=0; index<dob.length; index++)
      {
        sum=sum+Number(dob.charAt(index));
      }
       return sum;
      
}
checkNumberButton.addEventListener("click",checkBirthDateIsLucky);
