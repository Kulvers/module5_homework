
var arr = [3, 3, 3, 3];

 function foo(a) {
   for (var b = 0; b < a.length; b++)
     if (a[b] !== a[0]) return !1;
   return !0
 };

 alert([foo(arr)]);

