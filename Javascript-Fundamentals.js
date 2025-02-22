//forEach

var arr = [1, 2, 3, 4];
arr.forEach(function (val) {
  console.log(val + " hello");
});

//map

var arr = [1, 2, 3, 4];

var newarr = arr.map((val) => {
  return 23;
});

console.lop(newarr);

//filter

var arr = [1, 2, 3, 4];

var ans = arr.filter((val) => {
  if (val > 3) {
    return true;
  }
});

console.log(ans);

//object

var obj = {
  name: "tonoy",
  age: 24,
};

console.log(obj.age);

//async func

function abc() {
  return 13;
}

var ans = abc();
console.log(ans);

//api

var blob = await fetch(`https://randomuser.me/api/`);
var res = await blob.json();

console.log(res);
