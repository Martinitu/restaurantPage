
console.log("test")
var header = document.createElement("div");
var content =  document.getElementById("content");
header.setAttribute("id", "header" );
content.appendChild(header);

var title = document.createElement('h1');
title.innerText = "I-TAL LIVITY"
title.setAttribute("id", "title");
header.appendChild(title)

var headerContent = document.createElement("div");
headerContent.setAttribute("id", "headerContent" );
header.appendChild(headerContent)

var home = document.createElement("a");
home.setAttribute('id', 'homeTab');

home.innerText = "Home";
headerContent.appendChild(home);

var menu = document.createElement("a");
menu.setAttribute("id", "menuTab");

menu.innerText = "Menu";
headerContent.appendChild(menu);

var contact = document.createElement("a");
contact.setAttribute("id", "contactTab");

contact.innerText = "Contact";
headerContent.appendChild(contact);

var main = document.createElement("div");
main.setAttribute("id", "main" );
content.appendChild(main);

var footer = document.createElement("div");
footer.setAttribute("id", "footer");
content.appendChild(footer)

var credit = document.createElement("p");
credit.innerText = "created by Martin I 2022";
footer.appendChild(credit)


