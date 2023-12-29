let input = document.querySelector('.header__inputMenu');
let data = document.querySelector('.header__buttonMenu');
if(input){
	data.addEventListener("click", function(e){
		let li = document.querySelector('.header__list');
		let parent = document.querySelector('.header__body');
		li.createElement('<li class="header__list"></li>');
		parent.append(li);
	})
}