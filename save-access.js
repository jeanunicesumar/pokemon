document.addEventListener('DOMContentLoaded', () =>  {
    saveAccessLocalStorage();
})

function saveAccessLocalStorage() {
    localStorage.setItem('access', JSON.stringify(generateInfoAccess()));
}
  
function generateInfoAccess() {
    return {
        "count": getCount(),
        "lastVisit": getDateAccess()
    }
}

function getCount() {
    const access = JSON.parse(localStorage.getItem('access'));
    return access ? access.count + 1 : 0 + 1;
}

function getDateAccess() {
    return new Date();
}