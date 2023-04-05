let getDog = document.getElementById('dog');
let dogGo = document.getElementById('doggo');
let dogCo = document.getElementById('code');

dogGo.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
      getDog.src = data.message;
      dogCo.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error(error));
});