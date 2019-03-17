;(function() {

	var btn = document.querySelectorAll(".btn");
	var popup = document.querySelector(".popup");

	//скрыть или отобразить popup
	function flexOrNone(){
		popup.style.display = popup.style.display == "flex" ? "none" : "flex";
	}

	//кнопка закрытия
	popup.querySelector(".popup__close").addEventListener("click", function(){
		flexOrNone();
	});

	//обновление оглавления 
	function updateTitleInPopup(){
		var str = document.querySelector(".accordion__radio:checked + .accordion__item .accordion__title").innerText;
		popup.querySelector(".popup__title").innerHTML = str;
	}

	for(var i = 0; i < btn.length; i++){
		btn[i].addEventListener("click", flexOrNone);
		btn[i].addEventListener("click", updateTitleInPopup);
	}
	
}());