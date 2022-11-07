const currentLocation = location.href; //informations sur l'URL 
//console.log(location)
const menuItem = document.querySelectorAll('a');

for(let i=0; i<menuItem.length; i++){
    if(menuItem[i].href === currentLocation){
        //console.log(menuItem[i].href)
        menuItem[i].classList.add('active');
    }
}