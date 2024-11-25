const btnMore = document.querySelector('#btn-more');
const wrapperText = document.querySelector('#wrapper-text');

if (btnMore && wrapperText) {
    btnMore.addEventListener('click', () => {
        wrapperText.classList.toggle(`card__body_opened`);
    });
}
