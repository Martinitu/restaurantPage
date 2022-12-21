export function menuTab(){
    const main = document.querySelector('#main')
    main.replaceChildren();

    var menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    main.appendChild(menu);

    var dishOneDiv = document.createElement("div");
    dishOneDiv.setAttribute("class", "dish");
    menu.appendChild(dishOneDiv);

    var dishOneImg = document.createElement("img");
    dishOneImg.setAttribute('class', 'img');
    dishOneImg.setAttribute("src", "../src/dish.png");
    dishOneDiv.appendChild(dishOneImg);

    var dishOneInfo = document.createElement('a');
    dishOneInfo.setAttribute("href", "");
    dishOneInfo.setAttribute("class", "dishInfo");
    dishOneInfo.innerText = "Estofado de Vegetales";
    dishOneDiv.appendChild(dishOneInfo);

    var dishTwoDiv = document.createElement("div");
    dishTwoDiv.setAttribute("class", "dish");
    menu.appendChild(dishTwoDiv);

    var dishTwoImg = document.createElement("img");
    dishTwoImg.setAttribute('class', 'img');
    dishTwoImg.setAttribute("src", "../src/dish.png");
    dishTwoDiv.appendChild(dishTwoImg);

    var dishTwoInfo = document.createElement('a');
    dishTwoInfo.setAttribute("href", "");
    dishTwoInfo.setAttribute("class", "dishInfo");
    dishTwoInfo.innerText = "Majado de Verde";
    dishTwoDiv.appendChild(dishTwoInfo);

    var dishThreeDiv = document.createElement("div");
    dishThreeDiv.setAttribute("class", "dish");
    menu.appendChild(dishThreeDiv);

    var dishThreeImg = document.createElement("img");
    dishThreeImg.setAttribute('class', 'img');
    dishThreeImg.setAttribute("src", "../src/dish.png");
    dishThreeDiv.appendChild(dishThreeImg);

    var dishThreeInfo = document.createElement('a');
    dishThreeInfo.setAttribute("href", "");
    dishThreeInfo.setAttribute("class", "dishInfo");
    dishThreeInfo.innerText = "Berenjenas  Apanadas";
    dishThreeDiv.appendChild(dishThreeInfo);

    var dishFourDiv = document.createElement("div");
    dishFourDiv.setAttribute("class", "dish");
    menu.appendChild(dishFourDiv);

    var dishFourImg = document.createElement("img");
    dishFourImg.setAttribute('class', 'img');
    dishFourImg.setAttribute("src", "../src/dish.png");
    dishFourDiv.appendChild(dishFourImg);

    var dishFourInfo = document.createElement('a');
    dishFourInfo.setAttribute("href", "");
    dishFourInfo.setAttribute("class", "dishInfo");
    dishFourInfo.innerText = "Locro de Papas";
    dishFourDiv.appendChild(dishFourInfo);
}