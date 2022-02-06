# log-print
You can get different progress bars thro to the simple and useful **easy-progress** module.

## Using example
```js
let  progress = require("easy-progress")
let  bar =  new progress(":title=Simple Title :bar :current/:total :percent :time", 0);

console.log(bar.progressBar(10, 2))
//Output: Simple Title ####................ 2/10 8% 0.0s
```

### Arguments 
- `:title=Title`  - Add a title to the progress bar.
- `:bar` - Add the progress bar.
- `:total` - Add the total bar length. (2/**10**)
- `:current` - Add the current length. (**2**/10)
- `:time` - Add the processing of the progress bar.
- `:percent` - Add the percentage of the rest of the progress bar. (2/10 **8%**)

### Bar Styles
```js
//create progress bar
let  bar = new progress(":title=Simple Title :bar :current/:total :percent :time", 2);//>>>>----------------
```
```
0 > ####................
1 > ====----------------
2 > >>>>----------------
3 > ++++----------------
4 > @@@@----------------
5 > ===>----------------
6 > ▓▓▓▓░░░░░░░░░░░░░░░░
7 > ⌗⌗⌗⌗...............
8 > |||||...............
9 > ▤▤▤▤...............
10 > ▰▰▰▰▱▱▱▱▱▱▱▱
11 > ■■■■□□□□□□□□□□□□□□□□□
12 > ●●●●∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘∘
13 > ▪▪▪▪▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫▫
14 > ★★★★☆☆☆☆☆☆☆☆☆☆
15 > ◆◆◆◆◇◇◇◇◇◇◇◇◇◇
```
[Discord Server](https://discord.gg/64BVp8s) / Invalid invite | [~~Docs (soon)~~]