#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to letters and words counter App!\n");

let myLoop = true;while(myLoop){

     const userInput = await inquirer.prompt([
          {
               type: 'input',
               name: 'para',
               message: 'Enter your paragraph to count letters and words in it!'
          },
          {
               type: 'list',
               name: 'ask',
               message: 'What do you want to count in your paragraph?',
               choices: ["1. Letters", "2. Words", "3. Both letters and words"]
          }

     ]);

     let {para, ask} = userInput;

     if(para.length === 0) emptyInput();
     if(ask === "1. Letters") letterFun();
     if(ask === "2. Words") wordFun();
     if(ask === "3. Both letters and words") both();

     function emptyInput(){
          console.log(`Your input is empty! please try again with a valid input.\n`)

     }
     function letterFun(){
          const lettersWithoutSpace = para.replace(/\s/g, "");
          const letterCount = lettersWithoutSpace.length;
          console.log(`\nTotal letters in your paragraph are "${letterCount}"\n`)

     }
     function wordFun(){
          const wordsArray = para.split(" ")
          const wordCount = wordsArray.length;
          console.log(`\nTotal words in your paragraph are "${wordCount}"\n`)

     }
     function both(){
          letterFun();
          wordFun();

     }
     // to control loop

     let countMore = await inquirer.prompt({
          type: 'confirm',
          name: 'more',
          message: 'Do you want to count more?',
          default: false
     })
     if(!countMore.more){
          myLoop = false;
          console.log(`Thank you for using our letters and wordscount App!\n`)
     }
}


