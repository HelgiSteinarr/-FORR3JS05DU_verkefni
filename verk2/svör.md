## Verkefni 2

1. ECMAScript er skriftumál gert til að staðla JavaScript en frá útgáfu upprunalegu útgáfunni hefur það einnig
   verið útfært með JScript og ActionScript.
   
2. Það að JavaScript sé loosely typed er verið að meina t.d. að ekki þarf að skilgreyna hvaða gerð breyta er
   (int, string, bool, float, o.s.fv ..) annað dæmi er að ef þú plúsar saman strengin 7 ("7") við töluna 7 
   mundi JavaScript hugsa "ok þetta dæmi byrjar á streng svo talan 7 á eftir á ábyggilega að vera strengur líka"
   og skilar þá 77 í staðin fyrir error eða 14. Góð skýring sem ég fann:   
   7 + 7 + 7; // = 21,   
                                                                         7 + 7 + "7"; // = 147,  
                                                                         "7" + 7 + 7; // = 777
            
3. Í JavaScript er ekki þannig séð neinn munur á þeim en það er mjög þægilegt að hafa bæði svo maður þarf ekki
   alltaf að escapa þá ef maður þarf að nota gæsalappir innan strengsins. Dæmi: var strengur = 'Maðurinn sagði "Halló"';

4. Null og Undefined er það sama og í raun ætti aðeins annað þeirra að vera í málinu. Það er einfaldlega ekkert, tómt eða 
   hvað þú villt kalla það.. Margir í JavaScript community-inu hafa ákveðið að hætta að nota Null og nota bara Undefined 
   þar sem það þarf enganvegin 2 gerðir af því. Mér finnst persónulega að Undefined á að hætta að nota í staðin fyrir Null
   þar sem Null er styttra og er eins og langflest önnur forritunarmál en ekki eins og það skipti miklu.

5. Munurinn á == og === er sá að === er strangara uppá það að það checkar líka á gagnar gerð hlutsins.                     
   Dæmi: if(10 == "10"){ // skilar True  };   --   if(10 === "10"){ // skilar False  };
   
6. Munurinn á let og var er eins og Local og Global breytur í öðrum málum svo í flestum tilfellum ertu frekar að nota
   let yfir var nema þú viljit sérstaklega Global breytu.

      ```javascript
      if (!false){
          let variable = 1;
      }
      console.log(variable); 
      // skilar villu um að 'variable' sé ekki defined
      // ---------------------------------------
      if (!false){
          var variable = 1;
      }
      console.log(variable);
      // skilar '1'
      ```
   
7. 
      ```javascript
      function sum(var1, var2){
          return var1 + var2;
      }
      
      // -----------------------------------
      
      var sum = (var1, var2) => var1 + var2;
      
      // -----------------------------------
      
      var sum = function (var1, var2) {
          return var1 + var2;
      }
      ```

8. Use strict eru strangari reglur yfir hvernig kóði á að vera og vegna þess er léttara að fá villur.

9. Það er vegna þess hvernig Javascript virkar, það er allt fært í efstu línu (ef hann getur það, annars bara eins ofarlega og hann kemst) við keyrslu kóða

10. Neðra fallið yfirskrifar það efra svo það ætti alltaf að skila tölunni 8.

11. Javascript býst bara við að það eigi að vera 'var' fyrir framan og bætir því við fyrir þig sem er ekki alltaf gott ef þú villt ekki hafa þessa breytu 'global' eins og 'var' er.

12. Hann skilar stengnum "Hello World" og svigarnir eru þarna til að keyra fallið í sýnu eigin 'scope' semsagt breytur innaní fallinu hafa ekki áhrif á 'global scope' kóðans, þóg þetta er nokkuð useless núna í ECMAScript 2015 þar sem 'let' er komið.

13. það er 'svæðið' sem breytan er nothæf í

14. Call stack local gagnagrunnur geymir alla beina sem á að keyra
