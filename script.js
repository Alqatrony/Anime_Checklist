let counter = 0;

document.querySelectorAll('.small-drop-li, .text-pointer').forEach(el => {
  el.addEventListener('click', function () {
    const li = this.closest('li');
    const img = li.querySelector('.small-drop-li img');
    const state = li.getAttribute('data-state');

    if (state === 'hidden') {
      img.style.display = 'block';
      li.setAttribute('data-state', 'shown');
      counter++;
    } else if (state === 'shown') {
      img.style.display = 'none';
      li.setAttribute('data-state', 'hidden');
      counter--;
    }

    document.querySelector('.small-drop-counter').innerHTML = `<span class="counter">${counter}</span><span class="slash">1</span><span class="hundred">100</span>`;
  });
});