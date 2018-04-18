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


function toggleClass(className){
	const element = document.querySelector(this);
	element.classList.toggle(className);
}