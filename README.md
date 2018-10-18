# Array
array described a set of element in a particular order.
array declared  using square brackets.
ex=
var arr=[];

 Question
 What are the data types of elements in junkArray above?
.Array
.function
.object

# Question
Write an Array with Strings
Write an array literal with the names of the people in your group as strings.

ans   var cats = ["Elie", "Janey", "Matt", "Parker", "Tim"];

# Question 
What will the expression cats[index] produce?

ans  "Parker"

# question
What would happen if I specify cats[100]?
ans  undefined

# Question
What would happen if I specify cats[-1]?
ans  Undefinded

# length property
Every array has  a length property.
length property stores  the current length of an array.

# Question
Create an array called cheer and give it the values [1, 2, 3, 4].

Write a loop that iterates over the array, doubles each element, and stores it in the same index it got it from. It should look like: [2, 4, 6, 8] 


Ans  
var cheer = [1, 2, 3, 4];
var length = cheer.length;
for (var i = 0; i < length; i++) {
  cheer[i] *= 2;
}
console.log(cheer);


# Question
Adele is having trouble remembering her own song lyrics. For some reason, all she knows is the word "Hello". Let's help her out.

var lines = [
    "It's me.",
    'Can you hear me?',
    'from the other side',
    'from the outside'
];
Write a loop that logs to the screen each of her lines with the word "Hello" in front of it.

Ans  
for(var i=0;i<lines;i++>){
    console.log("Hello"+lines[i]);
}


# Question 
Why use single quotes or double quotes?
Ans  Both are equal,there is no difference. 

# Object
Ans
Objects start with an open curly brace and end with a closing curly brace.
we store data as key-value pairs. 
 key is similar to an index of an array.
 The value is similar to a value in an array.

# Question
Create your own person object
Ans
var person = {
  firstName: "nitu",
  lastName: "kumari",
  favoriteColors: ["black", "yellow"]
};
console.log(person);

# Question
How can we get Bruce Wayne's second favorite color?

var person = {
  firstName: "Bruce",
  lastName: "Wayne",
  favoriteColors: ["black", "yellow"]
};
Ans
console.log(favoriteColors[1]);

# Question
How can we update Bruce Wayne's second favorite color to pink?

var person = {
  firstName: "Bruce",
  lastName: "Wayne",
  favoriteColors: ["black", "yellow"]
};
Ans
 console.log(person.favoriteColors[1]="pink");

 # Question
 Help hide our superhero's identity by deleting any identifying information from this object:

var superHero = {
    name : "Bruce Wayne",
    alias: "Batman"
}
Ans
delete superHero.name;
console.log(superHero);


# Array checking
typeof []; // object
typeof {}; // object

# Array
Every array has access to a set of default properties and methods.
.length
.push([value])
.pop()
.slice(startIndex, endIndex)
.splice(startIndex, count)
.indexOf(element)

# Question
Question
On line 2, a variable called catsCurrentLength is set. Is this variable:

Options
1 A reference to the current length of the cats array
2 A copy of the current length of the cats array
3 A default value that doesn't mean anything

Ans
2 number
# Question
On line 5, catsCurrentLength is set to the value 3. The largest index in the array is 2. This is because...


.length gives you the next empty index so you know where to put new elements


.length was implemented incorrectly in the original JavaScript implementation


.length gives you the count of elements in the array, rather than their ordinal value

Ans
3
 
 # Question
 What does .push do?
Insert an element at the beginning of the array
Insert an element at the first empty space it finds
Insert an element at the end of the array
Ans
Insert an element at the end of the array(becuse .push insert last array)

# Question
What value does .push return?
The old length of the array
The new length of the array
The index where the element was inserted

ANS
The new length of the array


#Question
What action does .pop perform?
Remove the last element from the array
Remove the longest element from the array
Remove the first element from the array
Remove the last element that was added to the array with .push

ANS
Remove the last element from the array


#Question
What does .pop return?
The element that was removed from the array
The new last element of the array
The new length of the array
The index the element was removed from
ANS
The element that was removed from the array

# Question
What is the difference between .slice and .splice?

.splice removes elements from the original array, while .slice does not
.splice only copies and removes primitives, while .slice copies and removes everything
.splice only works on the end of the array .slice works everywhere
ANS
.splice removes elements from the original array, while .slice does not


#Question
Write the JavaScript to access the email of user 1.
ANS
data.users[0].email
#Question
Write the JavaScript to access the title of user 5.

AnS data.users[2].title

#Question
Write the JavaScript to access the user id of the first user in the users array.

ANS data.users[0].user_id

#Question

