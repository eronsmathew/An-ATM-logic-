"use strict";
//set up an initial balance
 var balance = 0.00;

 function getBalance(){
   alert(`Your current balance is : ${balance}`);
   atm();
 }

 function makeDeposit(){
    var deposit = parseFloat(prompt('How much would you like to deposit?'));
    if(isNaN(deposit) || deposit === ""){
        alert('Error : Please enter a number!');
        makeDeposit();
    }
    else{
        balance += deposit;
        getBalance();
    }
 }


 function makeWithdrawal(){
     var withdrawal = parseFloat(prompt('How much would you like to withdraw?'));
     if(isNaN(withdrawal) || withdrawal === ""){
        alert('Error : Please enter a number!');
        makeWithdrawal();
    }
    else if(withdrawal > balance){
        alert('Insufficient funds!...kindly make deposit');
        makeDeposit();
    }
     else{
         balance -= withdrawal;
         getBalance();
     }
 }

 function error(){
     alert('Error: accepted numbers are 1 through 4!');
     atm();
 }
 function exit(){
     var confirmLeave = confirm('You have selected Exit!');
     if(confirmLeave){
         window.close();
     }else{
         atm();
     }
 }

 function atm(){
     var choice = parseInt(prompt('Select a choice 1.) Balance 2.) Deposit 3.) Withdrawal 4.) Exit'));
     if(choice === 1){
         getBalance();
     }
     else if(choice === 2){
         makeDeposit();
     }
     else if(choice === 3){
         makeWithdrawal();
     }
     else if(choice === 4){
         exit();
     }else{
         error();
     }
     atm();
















 }




