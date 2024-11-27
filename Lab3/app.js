  document.getElementById("message1").innerHTML = "Hello World!";


  // valuable
  let a = 5;
  var b = "Hello Wolrd!";
  const x = 10; // เปลี่ยนค่าไม่ได้

  console.log(b);
  add(5, 10);

  // function
  function add(aa, bb) {
    let cc = aa + bb;
    console.log(cc);
    return cc;
  }

  let result = add(5, 10);

  let add2 = function (aa, bb) {
    let cc = aa + bb;
    console.log(cc);
  };

  // arrow function
  let add3 = (aa, bb) => {
    let cc = aa + bb;
    console.log(cc);
  };

  // array
  let arr = [1,"test",2,3.14,4,5];

  const car = [];
  car[0] = "Toyota";
  car[1] = "Honda";
  console.log(car[1]);

  const fruit = new Array("Apple", "Banana", "Cherry");
  
  let colors =[[1,2,3], "green", "blue","red"];
  console.log(colors);

  // array method    // pop&push ใช้แบบ stack เพิ่ม-ลบตัวหลัง
  fruit.push("Orange");
  console.log(fruit);
  
  arr.map((item) => {
    console.log(item);
  });

 // Object

let person = {
    firstname: "John",
    lastname: "Dell",
    age: 50,
    child: ["Ann", "Bily"],
    fullname : function() {
        return this.firstname + " " + this.lastname;
    }
};

console.log(person.fullname());

person.address = {
    street: "123 Main St",
    city: "New York",
};


// spread operator
const arrCombine = [...car,...fruit];
const arrCombine2 = [car,fruit];
console.log(arrCombine);
console.log(arrCombine2);


if (x == 10) {
    let c = "test";
    var d = "test2";
    console.log("a is equal to b");
}

// short term if elsa
let e = x == 10 ? "Yes" : "No";

