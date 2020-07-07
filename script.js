const square = document.getElementById('square');

square.style.width = '600px';
// square.style.backgroundColor = 'lightblue';

const btn = document.getElementById('btn');

// btn.addEventListener('click', () => {
// 	console.log('My button works');
// });

// btn.addEventListener('click', () => {
// 	square.style.backgroundColor = 'lightblue';
// });

// const liD = document.getElementsByTagName('li')[2];
// liD.style.color = 'red';

const allLi = document.getElementsByTagName('li');

// allLi.forEach((l) => {
// 	l.style.color = 'red';
// });

for (let i = 0; i < allLi.length; i++) {
	const l = allLi[i];
	l.style.color = 'red';
}

btn.addEventListener('click', () => {
	allLi[1].style.color = 'lightblue';
	allLi[3].style.color = 'lightblue';
});

const head1 = document.getElementById('h1');

btn.addEventListener('click', () => {
	head1.textContent = 'world';
});

const img = document.getElementById('img');
img.addEventListener('mousemove', () => {
	img.src = 'https://picsum.photos/200/300';
});

const inp = document.getElementById('input');
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
	const bkColor = inp.value;
	console.log(bkColor);
	square.style.backgroundColor = bkColor;
});
