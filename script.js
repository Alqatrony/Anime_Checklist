let counter = 0;

document.querySelectorAll('li').forEach(li => {
  li.addEventListener('dblclick', function () {
    const img = this.querySelector('.small-drop-li img');
    const state = this.getAttribute('data-state');

    if (state === 'hidden') {
      img.style.display = 'block';
      this.setAttribute('data-state', 'shown');
      counter++;
    } else if (state === 'shown') {
      img.style.display = 'none';
      this.setAttribute('data-state', 'hidden');
      counter--;
    }

    document.querySelector('.small-drop-counter').innerHTML = `<span class="counter">${counter}</span><span class="slash">1</span><span class="hundred">100</span>`;
  });
});