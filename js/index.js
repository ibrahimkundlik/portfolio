const navCont = document.querySelector(".nav-container");
const navBtn = document.querySelector(".hamburger");

const toggleNavbar = (e) => {
	if (e.target.className !== "nav-container nav-open") {
		navCont.classList.toggle("nav-open");
		Object.values(navBtn.children).forEach((each) => {
			each.classList.toggle("ham-close");
		});
		document.body.classList.toggle("disable-scroll");
	}
};

navBtn.addEventListener("click", toggleNavbar);
navCont.addEventListener("click", toggleNavbar);
