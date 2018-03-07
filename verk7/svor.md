## Verkefni 7

1. Callback er einhver kóði sem er settur í fall sem parameter og er keyrður aftur í því falli.
    ```javascript 
    function myfunc(callback){
        let variable_from_db = "kalli";
        callback(variable_from_db);
    }
    
    myfunc(function(var){
        console.log(var);
    });
    ```
  
2. Það er loop sem athugar hvort breyting hafi verið og kallar svo á event ef breyting fannst.

3. 
    ```javascript 
    function checkUsername(e) {
        var target = e.target;
        }
        var el = document.getElementById('username');
        el.addEventListener('blur', checkUsername, false);
    ```
 
 4. Það er fyrir useCapture og ef True þá eru öll þessi event þessi event skráð í listener áður en það er sent í eventTarget.
 
 5. stopPropagation(): Þetta stoppar önnur events frá því að verða skráð eftir að þetta hefur verið kallað.
    preventDefault(): Kemur í veg fyrir að venjulegi eventinn gerist t.d. right click á síðum o.s.fv.
    
6.  [Linkur að "quiz"](https://fisedush.com/js/v7)
