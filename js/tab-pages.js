
const contentPageClass = '.content-page';
const tabClass = '.tab';

function activePage(pageId) {
    let activeIndex = 0;
    $(contentPageClass).map((index, el) => {
        if (el.id === pageId) {
            activeIndex = index;
            $(el).show();
        } else {
            $(el).hide();
        }
    });
    $(tabClass).map((index, el) => {
        if (index === activeIndex) {
            $(el).addClass('active');
        } else {
            $(el).removeClass('active');
        }
    });
}

function selectPageFromLocationHashOrDefault() {
    const hashIdFromUrl = window.location.hash || '#';
    const matchesPage = $(`${contentPageClass}${window.location.hash}`);
    const start = matchesPage.length ? matchesPage : $(contentPageClass).first();
    
    activePage(start.attr('id'));
}

$(`${tabClass} > a[href*=\\#]`).on('click', function () {
    activePage(this.hash.slice(1));
});

$(document).ready(function() {
    selectPageFromLocationHashOrDefault();
});
