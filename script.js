const bntMenu = document.querySelector('.bi-list')
const menu = document.querySelector('.menu nav')
const bntClose = document.querySelector('.bi-x-lg')

bntMenu.onclick = () =>{

    menu.classList.toggle('visible');
    bntClose.classList.toggle('visible');

}

bntClose.onclick = ()=>{
    menu.classList.toggle('visible');
}

if(!menu.classList.contains('visible')){
    bntClose.classList.remove('visible');
}