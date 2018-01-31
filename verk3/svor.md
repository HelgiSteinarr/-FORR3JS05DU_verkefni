
## Verkefni 3

1. Template literals leyfa þér að gera bæði multiline strings og nota breytur eða keyra breytu innan strengs notandi " ${} " fyrir breytur og " ` " (back-tick) utan um strenginn.

2. for lykkja ( for (x = 1, x > 0, x++){} ) er þessi hefðbundna "C-style" for lykkja og ekki mikið sem þarf að segja, forEach lykkja      ( array.forEach(function(){}) ) er til þess að loopa í gegnum hluti í arrays aka listum, for-in lykkja ( for (key in object){} ) er til þessa að loopa í gegnum objects eins og dictionaries en ekki arrays, for-of lykkja er nýjasta lykkjan og kemur með ECMAScript 2015 og hægt að nota á lang flestar datatýpur

3. 
    1.   array.reverse()
    2.   array.sort()
    3.   array.slice()
    4.   array.join()
    
 
4. 
    ```javascript
    var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
      19, 300, 3775, 299, 36, 209, 148, 169, 299,
      6, 109, 20, 58, 139, 59, 3, 1, 139
    ];

    test.forEach(function(value, index){
      if(value % 3 === 0)
      {
          test.splice(index, 1, value += 100)
      }
    });
    console.log(test)
    ```

5. 
    ```javascript
    var bills = [50.23, 19.12, 34.01,
      100.11, 12.15, 9.90, 29.11, 12.99,
      10.00, 99.22, 102.20, 100.10, 6.77, 2.22
    ];

    var totals = bills.map(function(bill){
      bill *= 1.15;
      return Number(bill.toFixed(2));
    });
      console.log(totals)
    ```
6.
    ```javascript
    var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
    ];

    // your code goes here

    for (var x = 0; x < numbers.length; x++)
    {
      for (var y = 0; y < numbers[x].length; y++)
      {
        if (numbers[x][y] % 2 === 0)
        {
            numbers[x][y] = "even";
        }else{
            numbers[x][y] = "odd";
        }
      } 
    }
    console.log(numbers);
    ```
7.
    ```javascript
    var breakfast = {
    name : "The Lumberjack",
    price : "$9.95",
    ingredients : [
        "eggs",
        "sausage",
        "toast",
        "hashbrowns",
        "pancakes"
        ]
    };
    console.log(breakfast);
    ```
8.
    ```javascript
    var savingsAccount = {
      balance: 1000,
      interestRatePercent: 1,
      deposit: function addMoney(amount) {
          if (amount > 0) {
              savingsAccount.balance += amount;
          }
      },
      withdraw: function removeMoney(amount) {
          var verifyBalance = savingsAccount.balance - amount;
          if (amount > 0 && verifyBalance >= 0) {
              savingsAccount.balance -= amount;
          }
      },
      // your code goes here
      printAccountSummary: function(){
          return "Welcome!\nYour balance is currently $" + this.balance + " and your interest rate is " + this.interestRatePercent + "%.";
      }
    };

    console.log(savingsAccount.printAccountSummary());
    ```
    
9.
    ```javascript
    var donuts = [
      { type: "Jelly", cost: 1.22 },
      { type: "Chocolate", cost: 2.45 },
      { type: "Cider", cost: 1.59 },
      { type: "Boston Cream", cost: 5.99 }
    ];

    // your code goes here

    donuts.forEach(function(donut){
      console.log(donut.type + " donuts cost $" + donut.cost + " each");
    });
    
    ```
10.
    ```javascript
    function Pizza(size, topping, price)
    {
        return {price: price, size: size, topping: topping};
    }

    var order1 = new Pizza("Large", "BBQtopping, Pulled Pork", "500kr");
    var order2 = new Pizza("Small", "Ananas, Bananar x2", "2500kr");

    ```
    
