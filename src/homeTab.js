
export function homeTab(){

    var main = document.querySelector('#main');
 
   main.replaceChildren();

    var home = document.createElement("div");
    home.setAttribute("id", "home");
    main.appendChild(home);

    var homeInfoTitle = document.createElement("p");
    homeInfoTitle.setAttribute("class", "homeInfo");
    homeInfoTitle.innerText = "Welcome to ITAL LIVING, a plant bassed restaurant.";
    home.appendChild(homeInfoTitle);

    var homeInfo = document.createElement("p");
    homeInfo.setAttribute("class", "homeInfo");
    homeInfo.innerText = "In sum, Ital food is all natural food. Ital cuisine involves a natural way of cooking. In addition, they dont contain pesticides and artificial fertilizers. Since the 1940s, Rastas have disapproved of processed foods because they arent vital and considered Junk Food by many. For the most part, the Rastafari diet is rich and nourishing.";
    home.appendChild(homeInfo);


}

//export hometab

