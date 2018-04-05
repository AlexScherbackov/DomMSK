svg4everybody();

// @include('detect.js')
// @include('globals.js')
// @include('formWorker.js')
// 

var _init = {
	_initialize(){
		_init._bindingEvent('#mobile-btn', 'click', toggleAnimate.bind('#mobile-menu', 'show','bounceInDown', 'bounceOutUp'));
		_init._bindingEvent('#mobile-btn', 'click', toggleClass.bind('#mobile-btn', 'show'));
		_init._bindingEvent('#mobile-btn', 'click', toggleClass.bind('#mobile-menu', 'show'));

		const form = new formWorker('#header-form');
	},
	_bindingEvent(elem, event, func){
		const element = document.querySelector(elem);
		element.addEventListener(event, func);

	}
}


$document.ready(_init._initialize); 


function toggleClass(className){
	const element = document.querySelector(this);
	element.classList.toggle(className);
}

function toggleAnimate(indent ,firstClass, secondClass){
	const element = document.querySelector(this);
	if(element.classList.contains('firstLoad')){
		element.classList.remove('firstLoad');
	}
	if(element.classList.contains(indent)){
		element.classList.remove(firstClass);
		element.classList.add(secondClass);
	} else if(element.classList.contains(secondClass)){
		element.classList.remove(secondClass);
		element.classList.add(firstClass);
	} 
}