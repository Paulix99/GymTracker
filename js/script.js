const button = document.querySelector(".close-menu");

function hide_menu(){
	const nav = document.querySelector("nav")
	nav.style.height = "10vh";

	const nav_ul = document.querySelector("nav ul")
	nav_ul.style.display = "none";

	const register = document.querySelector("#register-btn")
	register.style.display = "none";
}

if (button) {
	console.log("Existe");
  button.addEventListener("click", hide_menu);
}

