export function contactTab(){
    const main = document.querySelector('#main')
    main.replaceChildren();

    var contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    main.appendChild(contact);

    var homeInfoTitle = document.createElement("p");
    homeInfoTitle.setAttribute("class", "homeInfo");
    homeInfoTitle.innerText = "Contact Us";
    contact.appendChild(homeInfoTitle);

    var homeInfo = document.createElement("p");
    homeInfo.setAttribute("class", "homeInfo");
    homeInfo.innerText = "Jodoco Ricke y  Sodiro Quito Ecuador";
    contact.appendChild(homeInfo);

    var homeInfo = document.createElement("p");
    homeInfo.setAttribute("class", "homeInfo");
    homeInfo.innerText = "+593 2 345 6789";
    contact.appendChild(homeInfo);

  
}