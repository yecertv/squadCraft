const serverIp = document.querySelector('.serverIp');

serverIp.addEventListener('click', () => {
navigator.clipboard.writeText(serverIp.innerText)
.then(() => {
console.log('Текст успешно скопирован');
})
.catch((err) => {
console.error('Ошибка, текст не скопирован: ', err);
});
});