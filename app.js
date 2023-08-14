/* CHPTER 58-67 
1. Consider you have following code snippet:

(Copy it in your HTML file)

<div>
<h1> DOM </h1>
<div id=”form-content” class=”content”>
<label for=”first-name”>First Name</label>
<input type=”text” id=”first-name” />
<label for=”last-name”>Last Name</label>
<input type=”text” id=”last-name” />
<label for=”email”>Email</label>
<input type=”text” id=”email” />
</div>
<div id=”main-content” class=”content”>
<p class=”render”> First Name : Alex</p>
<p class=”render” id=”lastName”>Last Name: Bank</p>
<p class=”render”> Email : alexbank@example.com</p>
<p class=”render”> Country : Pakistan </p>
<p class=”render”> contact : +92 300 1234567</p>
</div>
</div>
in browser.
*/

// i. Get element of id “main-content” and assign them in a variable.
var mainContent = document.getElementById("main-content");

// ii. Display all child elements of “main-content” element.

if (mainContent) {
  var childElements = mainContent.children;
  for (var j = 0; j < childElements.length; j++) {
    var child = childElements[j];
    console.log(child.textContent);
  }
} else {
  console.log("Element with ID 'main-content' not found.");
}


// iii. Get all elements of class “render” and show their innerHTML

document.addEventListener("DOMContentLoaded", function () {
  var renderElements = document.getElementsByClassName("render");
  for (var i = 0; i < renderElements.length; i++) {
    var innerHTML = renderElements[i].innerHTML;
    console.log(innerHTML);
  }
});

// iv. Fill input value whose element id first-name using javascript.

var firstNameInput = document.getElementById("first-name");
if (firstNameInput) {
  firstNameInput.value = "Your Desired First Name";
}

// v. Repeat part iv for id ”last-name” and “email”.

var lastNameInput = document.getElementById("last-name");
if (lastNameInput) {
  lastNameInput.value = "Your Desired Last Name";
}

var emailInput = document.getElementById("email");
if (emailInput) {
  emailInput.value = "your.email@example.com";
}


/* QUESTION 02
2. use HTML code of question 1 and show the result on browser.
i. What is node type of element having id “form-content”.
ii. Show node type of element having id “lastName” and its child node.
iii. Update child node of element having id “lastName”.
iv. Get First and last child of id “main-content”.
v. Get next and previous siblings of id “lastName”.
vi. Get parent node and node type of element having id “email”
 */

// i. Node type of element with id "form-content"
const formContentElement = document.getElementById("form-content");
console.log("Node type of 'form-content':", formContentElement.nodeType);

// ii. Node type of element with id "lastName" and its child node
const lastNameElement = document.getElementById("lastName");
console.log("Node type of 'lastName':", lastNameElement.nodeType);
console.log("Child node of 'lastName':", lastNameElement.firstChild.nodeValue);

// iii. Update child node of element with id "lastName"
lastNameElement.firstChild.nodeValue = "Last Name: Updated";

// iv. Get first and last child of element with id "main-content"
const mainContentElement = document.getElementById("main-content");
const firstChild = mainContentElement.firstElementChild;
const lastChild = mainContentElement.lastElementChild;
console.log("First child of 'main-content':", firstChild.outerHTML);
console.log("Last child of 'main-content':", lastChild.outerHTML);

// v. Get next and previous siblings of element with id "lastName"
const nextSibling = lastNameElement.nextElementSibling;
const previousSibling = lastNameElement.previousElementSibling;
console.log("Next sibling of 'lastName':", nextSibling.outerHTML);
console.log("Previous sibling of 'lastName':", previousSibling.outerHTML);

// vi. Get parent node and node type of element with id "email"
const emailElement = document.getElementById("email");
const parentNode = emailElement.parentNode;
const nodeType = emailElement.nodeType;
console.log("Parent node of 'email':", parentNode.outerHTML);
console.log("Node type of 'email':", nodeType);