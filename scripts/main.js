let home = document.getElementById("home");
let home_pulldown = document.getElementById("home-pulldown");
let contact = document.getElementById("contact");
let contact_pulldown = document.getElementById("contact-pulldown");

home.addEventListener("focusin", focusHome);
home.addEventListener("mouseenter", focusHome);
home.addEventListener("focusleave", defocusHome);
home.addEventListener("mouseleave", defocusHome);

home_pulldown.addEventListener("mouseenter", focusHome);
home_pulldown.addEventListener("mouseleave", defocusHome);
home_pulldown.addEventListener("focusin", focusHome);
home_pulldown.addEventListener("focusleave", defocusHome);

contact.addEventListener("focusin", focusContact);
contact.addEventListener("mouseenter", focusContact);
contact.addEventListener("focusleave", defocusContact);
contact.addEventListener("mouseleave", defocusContact);

contact_pulldown.addEventListener("mouseenter", focusContact);
contact_pulldown.addEventListener("mouseleave", defocusContact);
contact_pulldown.addEventListener("focusin", focusContact);
contact_pulldown.addEventListener("focusleave", defocusContact);

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