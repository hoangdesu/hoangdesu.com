const title = document.querySelector('h1');
let names = ['I am Hoang', 'Tớ tên Hoàng', '僕はホアンです'];
let index = 0;

setInterval(() => {
    if (index > names.length - 1) {
        index = 0;
    }
    title.textContent = names[index];
    console.log(index);
    index++;
}, 3000);