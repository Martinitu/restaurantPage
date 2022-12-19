
console.log("test")
var header = document.createElement("div");
var content =  document.getElementById("content");
header.setAttribute("id", "header" );
content.appendChild(header);

var title = document.createElement('h1');
title.innerText = "ITAL LIVING"
title.setAttribute("id", "title");
header.appendChild(title)

var headerContent = document.createElement("div");
headerContent.setAttribute("id", "headerContent" );
header.appendChild(headerContent)

var home = document.createElement("a");
home.setAttribute("href", "");
home.innerText = "Home";
headerContent.appendChild(home);

var menu = document.createElement("a");
menu.setAttribute("href", "");
menu.innerText = "Menu";
headerContent.appendChild(menu);

var contact = document.createElement("a");
contact.setAttribute("href", "");
contact.innerText = "Contact";
headerContent.appendChild(contact);

var main = document.createElement("div");
main.setAttribute("id", "main" );
content.appendChild(main);

var homeInfoTitle = document.createElement("p");
homeInfoTitle.setAttribute("class", "homeInfo");
homeInfoTitle.innerText = "Welcome to ITAL LIVING, a plant bassed restaurant.";
main.appendChild(homeInfoTitle);

var homeInfo = document.createElement("p");
homeInfo.setAttribute("class", "homeInfo");
homeInfo.innerText = "In sum, Ital food is all natural food. Ital cuisine involves a natural way of cooking. In addition, they dont contain pesticides and artificial fertilizers. Since the 1940s, Rastas have disapproved of processed foods because they arent vital and considered Junk Food by many. For the most part, the Rastafari diet is rich and nourishing.";
main.appendChild(homeInfo);

var footer = document.createElement("div");
footer.setAttribute("id", "footer");
content.appendChild(footer)

var credit = document.createElement("p");
credit.innerText = "created by Martin I 2022";
footer.appendChild(credit)