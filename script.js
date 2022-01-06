// Burgermenu
// Lav en variabel, der refererer til ".toggle-btn"
const btn = document.querySelector(".toggle-btn");
// Lav en variabel, der refererer til "nav"
const menu = document.querySelector("nav");

// Lav en function, der hedder toggleMenu()
function toggleMenu() {
  console.log("toggleMenu");
  // 1. Toggle en klasse på nav vha. classList.toggle
  // 2. Toggle en klasse, der hedder "shown"
  menu.classList.toggle("shown");

  // 1. Lav en variabel, der hedder menuShown
  // 2. Den skal være lig med, om nav-variablen indeholder klassen "shown" vha. classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // 1. Lav en if/else sætning => if (...) {...} else {...}
  // 2. Spørg om menu i if-sætningen => if (menu)
  if (menuShown) {
    btn.textContent = "˟";
    // hvis nav har klassen "shown", sæt da btn.textContent til "Luk"
  } else {
    btn.textContent = "☰ ";
    // hvis IKKE nav har klassen "shown", sæt da btn.textContent til "Menu"
  }
}

/* Tilføj et klik-event til btn, der sætter toggleMenu-funktionen i gang */
btn.addEventListener("click", toggleMenu);

// ændre bagrundsfarven på nav

const header = document.querySelector("header");
const logo = document.querySelector("#logo_menu");
const bmenu = document.querySelector("#bmenu");

window.onscroll = function () {
  var top = window.scrollY;
  console.log(top);

  if (top >= 820) {
    header.classList.add("color_s2");
    logo.classList.add("logo_web");
    bmenu.classList.add("bmenu_web");
  } else {
    header.classList.remove("color_s2");
    logo.classList.remove("logo_web");
    bmenu.classList.remove("bmenu_web");
  }

  if (top >= 1630) {
    header.classList.remove("color_s2");
    header.classList.add("color_s3");
    logo.classList.add("logo_ux");
    bmenu.classList.add("bmenu_ux");
  } else {
    header.classList.remove("color_s3");
    logo.classList.remove("logo_ux");
    bmenu.classList.remove("bmenu_ux");
  }

  if (top >= 2450) {
    header.classList.remove("color_s3");
    header.classList.add("color_s4");
    logo.classList.add("logo_ani");
    bmenu.classList.add("bmenu_ani");
  } else {
    header.classList.remove("color_s4");
    logo.classList.remove("logo_ani");
    bmenu.classList.remove("bmenu_ani");
  }

  if (top >= 3270) {
    header.classList.remove("color_s4");
    header.classList.add("color_s5");
    logo.classList.add("logo_ind");
    bmenu.classList.add("bmenu_ind");
  } else {
    header.classList.remove("color_s5");
    logo.classList.remove("logo_ind");
    bmenu.classList.remove("bmenu_ind");
  }
};
