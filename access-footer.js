document.addEventListener('DOMContentLoaded', () =>  {
    addAccessInFooter();
})

function addAccessInFooter() {

    const access = getAccessStorage();
    const count = access ? access.count : 1;
    const date = access ? access.lastVisit : new Date();
    const dateFormat = catchDate(date);
    const hour = catchHour(date); 

    const p = catchElement("#info-access");
    p.textContent = `Esta página foi visitada ${count}. A última visita foi: ${dateFormat}, ${hour}.`;
}

function catchElement(selector) {
    return document.querySelector(selector);
}

function getAccessStorage() {
    return JSON.parse(localStorage.getItem('access'));
}

function catchDate(date) {
    const dateFormat = new Intl.DateTimeFormat("pt-BR").format(new Date(date));

    return dateFormat;
}

function catchHour(date) {
    const hour =  new Intl.DateTimeFormat("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    }).format(new Date(date));

    return hour;
}