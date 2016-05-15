var li = document.querySelectorAll("li");  //grabs first li, if i used querySelectorAll, i would have to choose which li

for(var i = 0; i < li.length; i++){

	li[i].addEventListener("mouseover", function(){
		this.classList.add("selected")//calls css class that changes color to green
	});

	li[i].addEventListener("mouseout", function(){
		this.classList.remove("selected"); //when not hovering, remove the class that is making the text green
	});

	li[i].addEventListener("click", function(){
		this.classList.toggle("done");
	});
}

	

