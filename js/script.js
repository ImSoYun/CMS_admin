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

