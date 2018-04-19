class accordion{
	constructor(selector){
		this._menu = document.querySelectorAll(selector);
		this._menu.forEach((item)=>{
			if (item){
				this.bindAccord(selector, item);
			}
			
		})
		
	}
	bindAccord(selector, item){
		const target = item.querySelector(`${selector}__target`)
		if(target){
			target.addEventListener('click', this.toggleInner.bind(target, selector));
		}
		
	}
	toggleInner(selector){
		const inner = this.parentNode.querySelector(`${selector}__inner`);
		this.classList.toggle('active');
		inner.classList.toggle('active');
	}
}

