//UI
const boxes = document.querySelectorAll('.box');
// console.log(boxes);

window.addEventListener('scroll',checkboxes);

function checkboxes(){
	let innerheight = window.innerHeight / 5 *4;
	// console.log(innerHeight);

	// console.log('hay');

	boxes.forEach(box =>{
     // console.log(box);

     const boxtop = box.getBoundingClientRect().top;

     // console.log(boxtop);

     if (boxtop < innerheight) {
     	box.classList.add('show');
     }else{
     	box.classList.remove('show');
     }
	});
}