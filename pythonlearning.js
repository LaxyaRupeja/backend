console.log("Hello World!");

let name = "laksh";
let height = 5.11;
let year_of_birth = 2004;
let myTupple = [1,2,3,4,5,6];
let myList = [1,2,3,4,5,6,7];
let myDictionary = {
  "name":"Laksh",
  "age":24,
  "city":"Kota"
};
console.log(typeof name);
console.log(typeof height);
console.log(typeof year_of_birth);
console.log(typeof myTupple);
console.log(typeof myList);
console.log(typeof myDictionary);

let my_list = Array.from(Array(10).keys()).map(x => x + 1);
console.log(my_list);
my_list.push(20);
console.log(my_list);
my_list.splice(my_list.indexOf(5), 1);
console.log(my_list);
my_list.sort();
console.log(my_list);

let nums = [10,20,30,40];
let sum = 0;
for (let i=0; i<nums.length; i++) {
  sum += nums[i];
}
console.log("Sum: " + sum);
console.log("Avg:" + sum/nums.length);

let s = "Python";
let str_length = s.length;
let newS = "";
for (let i=str_length-1; i >= 0; i--) {
  newS += s[i];
}
console.log(newS);

let list1 = ["M", "na", "i", "Ke"];
let list2 = ["y", "me", "s", "lly"];
for (let i=0; i<list1.length; i++) {
  list1[i] = list1[i] + list2[i];
}
console.log(list1);

let list1 = [10, 20, 30, 40];
let list2 = [100, 200, 300, 400];
for (let i=0; i<list1.length; i++) {
  console.log(list1[i], list2[i]);
}

let employees = ['Kelly', 'Emma'];
let defaults = {"designation": 'Developer', "salary": 8000};
let newDictionary = {};
for (let i=0; i<employees.length; i++) {
  newDictionary[employees[i]] = defaults;
}
console.log(newDictionary);

let sample_dict = {
    "name": "Kelly",
    "age": 25,
    "salary": 8000,
    "city": "New york"
}

let keys = ["name", "salary"];
let new_dic = {};
for (let i=0; i<keys.length; i++) {
  new_dic[keys[i]] = sample_dict[keys[i]];
}
console.log(new_dic);

let tuple1 = [11, [22, 33], 44, 55];
let list_inside_tuple = [...tuple1];
list_inside_tuple[1][0] = 222;
let modified_tuple = [...list_inside_tuple];
console.log(modified_tuple);