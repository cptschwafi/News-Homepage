const HamburgerMenuIcon = document.getElementById("Hamburger__Menu__Icon");
const CloseNavIcon = document.getElementById("Close__Icon");
const NavBar = document.getElementById("NavBar");

let NavbarDisplayedAgain = 0;

function showNav()
{
    NavBar.style.display = "block";
}

function hideNav()
{
    NavBar.style.display = "none";
}

/*This function prevents bug where Navbar (if opened and closed trough Hamburger Menu before) is not shown when sizing up the Page */

function ReDisplayNavBar() 
{
  if(window.innerWidth>1050 &&NavbarDisplayedAgain == 0 )
  {
    NavBar.style.display = "block";
    NavbarDisplayedAgain = 1;
  }
  if(window.innerWidth<1050)
  {
    NavBar.style.display = "none";
    NavbarDisplayedAgain = 0;
  }
}

window.onresize = ReDisplayNavBar;


HamburgerMenuIcon.addEventListener("click", showNav);
CloseNavIcon.addEventListener("click", hideNav);