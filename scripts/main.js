let home = document.getElementById("home");
let contact = document.getElementById("contact");

home.addEventListener("focus", focusHome);
home.addEventListener("mouseover", focusHome);
home.addEventListener("focusout", defocusHome);
home.addEventListener("mouseout", defocusHome);

contact.addEventListener("focus", focusContact);
contact.addEventListener("mouseover", focusContact);
contact.addEventListener("focusout", defocusContact);
contact.addEventListener("mouseout", defocusContact);

function focusHome(event)
{
  home.setAttribute("aria-expanded", "true");
  home.innerHTML = "Home△";
}

function defocusHome(event)
{
  home.setAttribute("aria-expanded", "false");
  home.innerHTML = "Home▽";
}

function focusContact(event)
{
  contact.setAttribute("aria-expanded", "true");
  contact.innerHTML = "Contact△";
}

function defocusContact(event)
{
  contact.setAttribute("aria-expanded", "false");
  contact.innerHTML = "Contact▽";
}