//  TASK - 1

// class Shape {
//   constructor (name, sides, side_length) {
//     this.name = name;
//     this.sides = sides;
//     this.side_length = side_length;
//   }
//   calcPerimeter() {
//     console.log(`The perimeter of ${this.name} is ${this.sides*this.side_length}`);
//   }
// }
// const square = new Shape("square",4,5);
// square.calcPerimeter();

// const triangle = new Shape("triangle",3,3);
// triangle.calcPerimeter();



//  TASK - 3
// var library = [ 
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }];

    // for (var x = 0 ; x <= library.length-1 ; x++) {
//     console.log(`The reading status of ${library[x].title} by ${library[x].author} is ${library[x].readingStatus}`);
//     // console.log(library[x].title);
//     // console.log(library[x].author);
//     // console.log(library[x].readingStatus);    
// }

// Alternate way (through classes)
// class Status2 {
//     constructor(author,title,readingStatus){
//         this.author = author
//         this.title = title
//         this.readingStatus = readingStatus
//     }
//     readingStatusIs(){
//         return (`The reading status of ${this.title} by ${this.author} is ${this.readingStatus}`)
//     }
    
// }

// const book1 = new Status2('Bill Gates','The Road Ahead',true)
// const book2 = new Status2('Steve Jobs','Walter Isaacson',true)
// const book3 = new Status2('Suzanne Collins','Mockingjay: The Final Book of The Hunger Games',false)

//    console.log(book1.readingStatusIs())
//    console.log(book2.readingStatusIs())
//    console.log(book3.readingStatusIs())

// Task - 4

// accountId , accountTitle, balance, emailID
// class BankAccount {
//   #accountId;
//   #accountTitle;
//   #balance;
//   #emailID;

//   constructor (accountId, accountTitle, balance, emailID) {
//     this.#accountId = accountId
//     this.#accountTitle = accountTitle
//     this.#balance = balance
//     this.#emailID = emailID
// }

// getaccountId() {
//   return this.#accountId  
// }
// setaccountId(newId) {
//   this.#accountId = newId
// }

// getaccountTitle() {
//   return this.#accountTitle  
// }
// setaccountTitle(newTitle) {
//   this.#accountTitle = newTitle
// }

// getbalance() {
//   return this.#balance 
// }
// setbalance(newBalance) {
//   this.#balance = newBalance
// }

// getemailID() {
//   return this.#emailID  
// }
// setemailID(newEmail) {
//   this.#emailID = newEmail
// }

// withdrawAmount(amount) {
// console.log(`The withdrawn amount is Rs.${amount} \nThe remaing balance is Rs.${this.#balance-amount}`);
// }

// depositAmount(amount) {
// console.log(`The deposited amount is Rs.${amount}\nThe current balance is Rs.${this.#balance+amount}`);
// }
// }
// const junaid = new BankAccount("123","HJA",100,"abc@abc.com")
// junaid.depositAmount(500);
// junaid.withdrawAmount(300);
// junaid.setbalance(200);
// console.log(junaid.getbalance());
// junaid.depositAmount(200);
// junaid.withdrawAmount(50);


//  TASK - 2

// class Player {
//     Name;
//     Runs;
//     static TotalRuns = 0;
//     constructor(Name, Runs) {
//       this.Name = Name;
//       this.Runs = Runs;
//       Player.TotalRuns = Player.TotalRuns + Runs;
//     }
  
//     //AddRuns(30)
//     AddRuns(run) {
//       //Runs += run
//       this.Runs = this.Runs + run;
//       Player.TotalRuns = Player.TotalRuns + run;
  
//     }
//   }
  
//   let Bilal = new Player('Bilal', 50);
  
//     console.log(Bilal.Runs);
//     console.log(Player.TotalRuns);
  
//   let Zuhaib = new Player('Zuhaib', 60);
//    console.log(Zuhaib.Runs);
//    console.log(Player.TotalRuns);
  
  
//   // //let Gafar = new Player("Gafar",50)
  
//   Bilal.AddRuns(30);
//   Bilal.AddRuns(30);
//   console.log(Bilal.Runs);
//   console.log(Player.TotalRuns);
  
  
  
//   console.log(Zuhaib.Runs);
  
//   console.log(Player.TotalRuns);
  
  // console.log(Player.TotalRuns);