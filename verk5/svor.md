## Verkefni 5

1. Því það þarf ekki að fara í gegnum allt skjalið, bara þangað til hann finnur þetta id því það getur bara verið eitt id.

2. Skilar öllum elementum sem passa við parameterinn gefinn. Semsagt þú gefur því element sem þú villt fá og getur bætt við "." og svo nafn á klasa fyrir nákvæmari leit.

      ```javascript
          /* Skilar öllum h1 elementum með klasann 'title' */
          let h1TitleElements = document.querySelectorAll("h1.title");
      ```
      
3. Í fyrstu línu nær það í öllu node með li sem tag og geymir það í breytunni "elements". Síðan er if setning í næstu línu sem athugar hvort það eru einhver nodes í listanum (fleiri en 0) og ef það er þá býr það til nýja breytu sem geymir annað node listans og setur svo klasann á því elementi í "cool".

4. Það skilar öllum elementum með tagið sem gefið er og getur þá unnið með þau t.d. bætt við klasa eða streng.

      ```javascript
          /* Skilar öllum h1 elementum */
          let h1Elements = document.getElementByTagName('h1');
      ```
      
5. Það kemur á milli elements stundum og getur verið pirrandi og erfitt að vinna með. Til að koma í veg fyrir það nota sumir javascript föll sem athuga hvort whitespace sé til staðar og lagar það en svo er líka hægt að hafa tag lok í enda línu bara í línunni fyrir neðan dæmi:
    ```html
    <ul
      ><li
      ><li
    ><ul>
    ```
  
6. [Quiz linkur](https://http://helgisteinarr.com/js/v5/ "Helgisteinarr.com")
