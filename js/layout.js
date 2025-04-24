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
            },
            {
                title: 'Inline',
                href: '#;',
            },
            {
                title: 'uPlot',
                href: '#;',
            },
        ]
    },
    {
        title: 'UI Elements',
        href: '#;',
        icon: 'fa-tree',
        sub: [
            {
                title: 'General',
                href: '#;',
            },
            {
                title: 'Button',
                href: '#;',
            },
            {
                title: 'Sliders',
                href: '#;',
            },
            {
                title: 'Modals & Alerts',
                href: '#;',
            },
            {
                title: 'Navbar & Tabs',
                href: '#;',
            },
            {
                title: 'Timeline',
                href: '#;',
            },
            {
                title: 'Ribbons',
                href: '#;',
            },
        ]
    },
    {
        title: 'Forms',
        href: '#;',
        icon: 'fa-edit',
        sub: [
            {
                title: 'General',
                href: '#;',
            },
            {
                title: 'Advanced',
                href: '#;',
            },
            {
                title: 'Editor',
                href: '#;',
            },
            {
                title: 'Validation',
                href: '#;',
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
                href: '#;',
            },
            {
                title: 'DataTable',
                href: '#;',
            },
            {
                title: 'JSGrid',
                href: '#;',
            }
        ]
    },
];

let navTxt = `<ul>`;
for (const i of navArr) {
    navTxt += `<li class="nav_li">
         <a href="${i.href}" class="nav_link"><i class="nav-icon fas ${i.icon}"></i>${i.title}<span><i class="right ${i.sub != null && 'fas fa-angle-left'}"></i></span></a>
         <ol>`
        if (i.sub != null) {
            for (const j of i.sub) navTxt += `<li class="nav_sub"><a href="${j.href}">${j.title}</a></li>`;
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
    let subnav = document.querySelectorAll('.nav_sub')
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