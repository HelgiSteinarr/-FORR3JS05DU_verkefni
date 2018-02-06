## Verkefni 4

1.
      ```javascript
      function spaceship(){
          this.name = "space racer";
          this.life = 10;
          this.showName = function () {
              console.log(this.name);
          };
      }
      var ship_1 = new spaceship();
      var ship_2 = new spaceship();
      var ship_3 = new spaceship();
      ship_1.name = "cargo spaceship";
      ship_1.showName();

      spaceship.prototype.fly = function () {
          this.speed + 1;
      };
      spaceship.prototype.speed = 5;

      var ship_4 = new spaceship();
      ship_4.damage = function () {
          this.life - 1;
      };
      ```
2. Erfðir virka með því að kalla á smið í objecti sem þú ætlar að erfa og virkar það eins og þú hefðir sama kóða í objectinu sem erfir.

3. Class í ES6 eru nánast eins og klasar í öðrum málum og geta gert það sama og prototype bara með öðrum syntax.
      ```javascript
      class testClass{
        constructor(){
          this.var1 = "class demo"
        }
        some_function(){
          console.log("called 'some_function()'")
          console.log(this.var1)
          // some code here
        }
        
      }
      
      ```
