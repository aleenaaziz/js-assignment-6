var mainContent = document.getElementById("main-content");

var childElements = mainContent.childNodes;
for (var i = 0; i < childElements.length; i++) {
  console.log(childElements[i]);
}

var renderElements = document.getElementsByClassName("render");
for (var i = 0; i < renderElements.length; i++) {
  console.log(renderElements[i].innerHTML);
}

var firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Alex";

var lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Bank";

var emailInput = document.getElementById("email");
emailInput.value = "alexbank@example.com";

window.onload = function () {
  var formContent = document.getElementById("form-content");
  var formContentType = formContent.nodeType;
  document.getElementById("result1").innerHTML =
    "Node type of form-content: " + formContentType;

  var lastNameElement = document.getElementById("lastName");
  var lastNameNodeType = lastNameElement.nodeType;
  var lastNameChildNodeType = lastNameElement.childNodes[0].nodeType;
  document.getElementById("result2").innerHTML =
    "Node type of lastName: " +
    lastNameNodeType +
    "<br>Node type of its child node: " +
    lastNameChildNodeType;

  var lastNameChildNode = lastNameElement.childNodes[0];
  lastNameChildNode.nodeValue = "New Last Name: Johnson";
  var mainContent = document.getElementById("main-content");
  var firstChild = mainContent.firstChild;
  var lastChild = mainContent.lastChild;
  document.getElementById("result4").innerHTML =
    "First child of main-content: " +
    firstChild.nodeName +
    "<br>Last child of main-content: " +
    lastChild.nodeName;

  var lastNameElement = document.getElementById("lastName");
  var nextSibling = lastNameElement.nextSibling;
  var previousSibling = lastNameElement.previousSibling;
  document.getElementById("result5").innerHTML =
    "Next sibling of lastName: " +
    nextSibling.nodeName +
    "<br>Previous sibling of lastName: " +
    previousSibling.nodeName;

  var emailElement = document.getElementById("email");
  var parentNode = emailElement.parentNode;
  var nodeType = emailElement.nodeType;
  document.getElementById("result6").innerHTML =
    "Parent node of email: " +
    parentNode.nodeName +
    "<br>Node type of email: " +
    nodeType;
};
