const tabCtrl = (e, idx) => {
    const tabParent = e.parentElement.parentElement, tabLi = tabParent.querySelectorAll('.nav_li'),
        tabContent = tabParent.querySelectorAll('.tab_content');
    for (const i of tabLi) i.classList.remove('active');
    for (const i of tabContent) i.classList.remove('active');

    tabLi[idx].classList.add('active');
    tabContent[idx].classList.add('active');
}


const SwiperCtrl = ( target, opt ) => {
    let swiper = new Swiper(target, opt );
}
 
const modalCtrl = {
    open : (e) => {
        let modalTarget= document.querySelector(e.getAttribute('data-target'));
        activeCtrl.add(document.getElementById('dim'));
        activeCtrl.add(modalTarget);
        document.getElementsByTagName('body')[0].style.overflow = "hidden";
    },
    close : () => {
        let modalClose = document.querySelectorAll('.modal_wrap');
        activeCtrl.remove(document.getElementById('dim'));
        for ( let i of modalClose ) activeCtrl.remove(i);
        document.getElementsByTagName('body')[0].style.overflow = "auto";
    },
};

const activeCtrl = {
    add : ( target ) => {
        target.classList.add('active');
    },
    remove : (target) => {
        target.classList.remove('active');
    }
}

const expandTable = ( e ) => {
    e.nextSibling.nextSibling.classList.toggle('active');
}