export function menuTab(){
    const main = document.querySelector('#main')
    main.replaceChildren();

    var menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.appendChild(menu);
  
}