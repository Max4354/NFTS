const menu = document.querySelector('.header__burger');
if (menu){
	const menuBody = document.querySelector('.header__body');
	menu.addEventListener("click", function(e){
		document.body.classList.toggle('_block');
		menu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	})
}

