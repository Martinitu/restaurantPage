import './style.css';
import './home'
import { homeTab } from './homeTab';
import { contactTab } from './contactTab';
import { menuTab } from './menuTab';



homeTab();

let switchtab = (function(){
    var homeTabLink = document.querySelector('#homeTab');
    homeTabLink.addEventListener('click', function(){homeTab()});

   var contactTabLink = document.querySelector('#contactTab');
   contactTabLink.addEventListener('click', function(){contactTab() });

   var menuTabLink = document.querySelector('#menuTab');
   menuTabLink.addEventListener('click', function(){menuTab() });



})()






