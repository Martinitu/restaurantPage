export function contactTab(){
    const main = document.querySelector('#main')
    main.replaceChildren();

    var contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    main.appendChild(contact);
  
}