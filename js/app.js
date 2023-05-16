
let userName = prompt('please enter your name');
let userGender=prompt('please enter your gender  male or female');
let userAge =parseInt(prompt('please enter your age'));

function userinformation(userName,userGender,userAge){
    if(userName=== ""){
        userName = prompt('please enter your name');
    }
   
    if(userAge=== "" ){
        userAge =parseInt(prompt('please enter your age'));
    }
    else if(userAge<=0){
        alert('your age is less than or equal to zero');
        userAge =parseInt(prompt('please enter your age'));
     }

     if(userGender=== ""){
        alert('your gender is invaled');
        userGender=prompt('please enter your gender male or female');
    }
    if( userGender!="female" && userGender !="male"){
        alert('your gender is invaled');
        userGender=prompt('please enter your gender male or female');
    }
    
   
        let answer = confirm("do you want to skip the welcoming message?");

        if(answer==false){
           if(userGender==="female"){
               alert(" welcome Mrs "+userName+" your gender is "+userGender+ " and your age is "+userAge);
           }else{
               alert(" welcome Mr "+userName+" your gender is "+userGender+ " and your age is "+userAge);
           }
        }
    
}

userinformation(userName,userGender,userAge)




















 let question1 = confirm("do you like playing football?");

 let question2 = confirm("do you like read books message?");

 let question3 = confirm("do you like learn more about technology?");


 function answerQuestions(arr){
    arr2=[];
    
    let answer1;
    let answer2;
    let answer3;


    for(var i=0; i<arr.length;i++){
        if(arr[i]){
            if(i==0){
                answer1="you like playing football";
                console.log(answer1)
            }else if(i==1){
                answer2="you like read books";
                console.log(answer2)
            }else {
                answer3="you like learn more about technology"
                console.log(answer3)
            }
        }else{

            if(i==0){
                answer1="you don't like playing football";
                console.log(answer1)
            }else if(i==1){
                answer2="you don't like read books";
                console.log(answer2)
            }else {
                answer3="you don't like learn more about technology"
                console.log(answer3)
            }

        }
    }

alert(answer1 +"\n"+answer2+"\n"+answer3)
 }


 answerQuestions ([question1,question2,question3])
