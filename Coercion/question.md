1."'5' + 2" → '52'
2. "'5' - 2" → 3
3. "true + false" → 1
4. "null + 1" → 1
5. "undefined + 1" → NaN
6. "[] + []" → ''
7. "[] + {}" → '[object Object]'
8. "{}" + "[]" → 0
9. "'' == 0" → true
10. "'0' == false" → true
11. "null == undefined" → true
12. "null === undefined" → false
13. "[] == false" → true
14. "[1] + [2]" → '12'
15. "[] == ![]" → true
16. "0 == '0' == false" → false
17. "'' + 1 + 2" → '12'
18. "1 + 2 + ''" → '3'
19. "[] == 0" → true
20. "' \t\n' == 0" → true
21. "[] == ''" → true
22. "[] == '0'" → false
23. "[0] == 0" → true
24. "[0] == false" → true
25. "[null] == 0" → true
26. "[undefined] == 0" → true
27. "NaN == NaN" → false
28. "NaN === NaN" → false
29. "typeof NaN" → 'number'
30. "typeof null" → 'object'
31. "[] instanceof Array" → true
32. "[] instanceof Object" → true
33. "{}" == '[object Object]' → true
34. "Boolean('false')" → true
35. "Boolean(0)" → false
36. "Boolean([])" → true
37. "Number('')" → 0
38. "Number(' ')" → 0
39. "Number(null)" → 0
40. "Number(undefined)" → NaN