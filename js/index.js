const navCont = document.querySelector(".nav-container");
const navBtn = document.querySelector(".hamburger");
const logoCont = document.querySelector(".logo-cont");

const toggleNavbar = (e) => {
	if (e.target.className !== "nav-container nav-open") {
		navCont.classList.toggle("nav-open");
		Object.values(navBtn.children).forEach((each) => {
			each.classList.toggle("ham-close");
		});
		document.body.classList.toggle("disable-scroll");
		if (e.currentTarget.className !== "hamburger")
			setTimeout(() => {
				window.scroll({
					top: window.scrollY - 100,
					left: 0,
					behavior: "smooth",
				});
			}, 100);
	}
};

navBtn.addEventListener("click", toggleNavbar);
navCont.addEventListener("click", toggleNavbar);
logoCont.addEventListener("click", (e) => {
	if (navCont.className === "nav-container nav-open") {
		navBtn.click();
	}
});
