const navArr = [
    {
        title: 'Dashboard',
        href: '/dashboard/list01.html',
        icon: 'fa-tachometer-alt',
        sub: null
    },
    {
        title: 'Charts',
        href: '#;',
        icon: 'fa-chart-pie',
        sub: [
            {
                title: 'ChartJS',
                href: '/charts/list01.html',
            },
            {
                title: 'Apex',
                href: '/charts/list02.html',
            }
        ]
    },
    {
        title: 'UI Elements',
        href: '#;',
        icon: 'fa-tree',
        sub: [
            {
                title: 'General',
                href: '/element/list01.html',
            },
            {
                title: 'Button',
                href: '/element/list02.html',
            },
            {
                title: 'Sliders',
                href: '/element/list03.html',
            },
            {
                title: 'Modals',
                href: '/element/list04.html',
            }
        ]
    },
    {
        title: 'Forms',
        href: '#;',
        icon: 'fa-edit',
        sub: [
            {
                title: 'General',
                href: '/form/list01.html',
            },
            {
                title: 'Editor',
                href: '/form/list02.html',
            }
        ]
    },
    {
        title: 'Tables',
        href: '#;',
        icon: 'fa-table',
        sub: [
            {
                title: 'Simple',
                href: '/table/list01.html',
            },
            {
                title: 'DataTable',
                href: '/table/list02.html',
            }
        ]
    },
];


let navTxt = `<ul>`;
for (const i of navArr) {
    navTxt += `<li class="nav_li">
         <a href="${i.href}" class="nav_link"><i class="nav-icon fas ${i.icon}"></i><p>${i.title}</p><span><i class="right ${i.sub != null && 'fas fa-angle-left'}"></i></span></a>
         <ol>`
        if (i.sub != null) {
            for (const j of i.sub) navTxt += `<li class="nav_sub"><a href="${j.href}"><i class="far">-</i><p>${j.title}</p></a></li>`;
        }
        navTxt += `</ol>
        </li>`;
}
navTxt += `</ul>`;
document.getElementById('sideNav').innerHTML = navTxt;

let navLinkBtn = document.querySelectorAll('.nav_link')
for ( const i of navLinkBtn ){
    i.addEventListener('click', () => {
        i.parentElement.classList.toggle('active');
    });
}

const ActiveMenu = ( idx, sub ) => {
    let nav = document.querySelectorAll('.nav_li')
    let subnav = nav[idx].querySelectorAll('.nav_sub');
    nav[idx].classList.add('active');
    if ( sub != null ){
        subnav[sub].classList.add('active');
        document.getElementById('breadcrumbTitle').innerHTML = subnav[sub].children[0].innerHTML;
        document.getElementById('pageTitle').innerHTML = subnav[sub].children[0].innerHTML;
        return;
    }
    document.getElementById('breadcrumbTitle').innerHTML = nav[idx].children[0].innerHTML;
    document.getElementById('pageTitle').innerHTML = nav[idx].children[0].innerHTML;
}

const ToggleNav = () => {
    let toggleBtn = document.getElementById('navToggle');
    toggleBtn.addEventListener( 'click', () => {
        document.getElementsByTagName('body')[0].classList.toggle('active')
    });
}

ToggleNav();





























