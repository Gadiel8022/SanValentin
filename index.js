const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
  alert('Te Amo💗')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mauseover',function () {
  const randomX = parseInt(match.random()*100);
  const randomY = parseInt(match.random()*100);
  noBtn.style.setProperty('top',randomY+'%');
  noBtn.style.setProperty('left',randomX+'%');
  noBtn.style.setProperty('transform','traslate(-${randomX}%,-${randomY}%)');
})