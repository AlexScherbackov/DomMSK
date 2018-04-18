class formWorker {
	constructor(id, type){
		this._form = document.querySelector(id);
		if(type=='search'){
			this.setupRadioSettings();
			this.setupCheckboxSettings();
		} else if(type=='calc'){
			this._form.querySelectorAll('.widget__control').forEach((item)=>{
				item.addEventListener('input', this.validate.bind(item));
			});
			
		} else if(type=='opt'){
			this._form.querySelectorAll('.widget__control').forEach((item)=>{
				item.addEventListener('input', this.inputWatch.bind(item, '.widget__text', 'postfix'));
				this.inputWatch.call(item, '.widget__text', 'postfix');
				item.addEventListener('change', this.checkResult.bind(this, "\-?\d+(\.\d{0,})?"));
			})
		}
		
	}
	setupRadioSettings(){
		const lists = this._form.querySelectorAll('.search-form__list');
		for(let i = 0; i < lists.length; i++){

			const listItems =  lists[i].querySelectorAll('.search-form__radio-item');
			listItems.forEach((item)=>{

				if(item.getAttribute('data-index') == '0'){
					item.classList.add('active');
				}

				item.addEventListener('click', ()=>{
					listItems.forEach((li)=>{
						li.classList.remove('active');
					});
					item.classList.add('active');
				});
			})
		}
	}
	setupCheckboxSettings(){
		const flags = this._form.querySelectorAll('.search-form__checkbox');
		flags.forEach((item)=>{
			item.addEventListener('click', ()=>{
				item.classList.toggle('active');
			})
		})
	}
	inputWatch(selector, dataAtr){
		const text = this.parentNode.querySelector(selector);
		text.textContent = this.value.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ") + text.dataset[dataAtr];
	}
	checkResult(){
		const arr = this._form.querySelectorAll('.widget__control');
		console.log(+arr[0].value + arr[1].value*arr[2].value);
		this._form.querySelector("span[data-type='result']").textContent = (+arr[0].value + arr[1].value*arr[2].value).toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	}
	validate(pattern){
		const regexp = new RegExp('[^0-9\s\.-]+');
		const flag = regexp.test(this.value);
		if(flag){
			this.classList.add('novalid');
		} else{
			this.classList.remove('novalid');
		}	 
	}
}