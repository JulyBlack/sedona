var hotelSearch = document.querySelector(".main-search-btn");
var mainForm = document.querySelector(".main-search-form");

var dateIn = mainForm.querySelector("[name=date-in]");
var dateOut = mainForm.querySelector("[name=date-out]");
var adult = mainForm.querySelector("[name=adult]");
var children = mainForm.querySelector("[name=children]");

hotelSearch.addEventListener("click", function(event){
  event.preventDefault();
  mainForm.classList.toggle("show-form");
});

mainForm.addEventListener("submit", function(event){
  if (!(dateIn.value && dateOut.value && adult.value && children.value)){
    event.preventDefault();
  }
});

var adultMinus = document.querySelector(".adult ~ a.icon-minus");
var adultPlus = document.querySelector(".adult ~ a.icon-plus");

var childMinus = document.querySelector(".children ~ a.icon-minus");
var childPlus = document.querySelector(".children ~ a.icon-plus");

adultMinus.addEventListener("click", function(event){
  event.preventDefault();
  if (parseInt(adult.value)>1){
	  adult.value = parseInt(adult.value)-1
	}
});

adultPlus.addEventListener("click", function(event){
  event.preventDefault();
  if (parseInt(adult.value)<10){
	  adult.value = parseInt(adult.value)+1
	}
});

childMinus.addEventListener("click", function(event){
  event.preventDefault();
  if (parseInt(children.value)>0){
	  children.value = parseInt(children.value)-1
	}
});

childPlus.addEventListener("click", function(event){
  event.preventDefault();
  if (parseInt(children.value)<10){
	  children.value = parseInt(children.value)+1
	}
});
