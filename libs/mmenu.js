
function mmenu() {
    let mm = [
{
 title: 'Бизнес-инкубатор',
 pic: 'menu1.svg',
 link: 'link1.html'
},
{
    title: 'Обучение',
    pic: 'menu2.svg',
    link: 'link2.html'
   },
   {
    title: 'Наши проекты',
    pic: 'menu3.svg',
    link: 'link3.html'
   },
   {
    title: 'Мероприятия',
    pic: 'menu4.svg',
    link: 'link4.html'
   },
   {
    title: 'Новости',
    pic: 'menu5.svg',
    link: 'link5.html'
   },
   {
    title: 'Контакты',
    pic: 'menu6.svg',
    link: 'link6.html'
   },

    ]

let ms='';
for (mi=0; mi<mm.length; mi++){
ms += `<div> <a href="${mm[mi].link}"><img src="img/${mm[mi].pic}" alt=""></a> <a href="${mm[mi].link}"><p>${mm[mi].title}</p> </a></div>`;

}
bMenu.innerHTML =ms;
}
    

