class formWorker {
	constructor(id){
		this._form = document.querySelector(id);
		this.setupRadioSettings();
		this.setupCheckboxSettings();
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
	
}