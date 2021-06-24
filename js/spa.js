//דף המקשר בין הדפים באתר וגורם שנוכל לעשות פושסטייט כי נשמר בזכרון
const app = {
    pages: [],
    init: function () {
        app.pages = document.querySelectorAll('.page');
        document.querySelectorAll('.nav-link').forEach((link) => {
            link.addEventListener('click', app.nav);
        })
        history.replaceState({}, 'login', '#login');
        window.addEventListener('popstate', app.poppin);
    },
    nav: function (ev) {
        ev.preventDefault();
        let currentPage = ev.target.getAttribute('data-target');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        console.log(currentPage)
        history.pushState({}, currentPage, `#${currentPage}`);
    },
    poppin: function (ev) {
        console.log(location.hash, 'popstate event');
        let hash = location.hash.replace('#', '');
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        console.log(hash)
    
        document.getElementById(hash).dispatchEvent(app.show);
    },
    changePage: function (idCurrentPage) {
        document.querySelector('.active').classList.remove('active');
        document.getElementById(idCurrentPage).classList.add('active');
        console.log(idCurrentPage)
        history.pushState({}, idCurrentPage, `#${idCurrentPage}`);
    }
}

document.addEventListener('DOMContentLoaded', app.init);