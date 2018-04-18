svg4everybody();

// @include('detect.js')
// @include('globals.js')
// @include('formWorker.js')
// @include('functions.js')

var _init = {
	_initialize(){
		_init._bindingEvent('#mobile-btn', 'click', toggleAnimate.bind('#mobile-menu', 'show','bounceInDown', 'bounceOutUp'));
		_init._bindingEvent('#mobile-btn', 'click', toggleClass.bind('#mobile-btn', 'show'));
		_init._bindingEvent('#mobile-btn', 'click', toggleClass.bind('#mobile-menu', 'show'));
		_init._cutString('.news__hover', 200);

		const searchForm = new formWorker('#header-form', 'search');
		const options = new formWorker('#options', 'opt');
		const calculator = new formWorker('#calculator', 'calc');
	},
	_bindingEvent(elem, event, func){
		const element = document.querySelector(elem);
		element.addEventListener(event, func);

	},
	_cutString(selector, length){
		const strings = document.querySelectorAll(selector);
		
		for(let i = 0; i < strings.length; i++){
			let buffer = '';
			let index;
			
			for(let j = 0; j < strings[i].childNodes.length; j++){
				buffer += strings[i].childNodes[j].textContent;
				index = j;
			}
			
			if(buffer.length > length){
				const minus = length - strings[i].childNodes[index - 1].textContent.length;
				let arr = strings[i].childNodes[index].textContent.split('');
				arr.length = minus;
				arr.push('...');
				const str = arr.join('');
				strings[i].childNodes[index].textContent = str;
			}

		}

		
	}
}


window.addEventListener('load',_init._initialize); 




