
const inputSearch = document.querySelector('.repositories__search');
const repositoriesList = document.querySelector('.repositories__list');
const repositoriesDatalist = document.querySelector('.repositories__datalist');

let searchTimer;

inputSearch.addEventListener('input', (event) => {
    if (inputSearch.value === '') {
        clearTimeout(searchTimer);
        repositoriesDatalist.innerHTML = '';
    } else {
        clearTimeout(searchTimer);
        showLoading();
        searchTimer = setTimeout(() => {
            getOptions();
        }, 250);
    }
})