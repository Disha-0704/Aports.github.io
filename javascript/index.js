document.addEventListener("scroll", function() {
    var navbar = document.getElementById("nav_23");
    var scrollPosition = window.scrollY;

    // Adjust the scroll threshold as needed
    if (scrollPosition > 520) {
      navbar.style.backgroundColor = "black";
    } else {
      navbar.style.backgroundColor = "transparent";
    }
  });
document.addEventListener("scroll",function(){
    let scroll12=window.scrollY;
    let element12=document.getElementById("nav_23");
    if(scroll12>1500){
        element12.style.backgroundColor="#ceae92"
    }
    else{
        element12.style.backgroundcolor="transparent"
    }
})
document.addEventListener('DOMContentLoaded', function() {
    // Scroll to the element with id "nav_23"
    var element = document.getElementById("nav_23");

    if (element) {
        // Set the initial style
        element.style.top = '100px';

        // Add a scroll event listener
        window.addEventListener('scroll', function() {
            // Check if the user has scrolled
            if (window.scrollY > 0) {
                // If scrolled, set the style to '0'
                element.style.top = '0';
            } else {
                // If at the top, set the style back to '100px'
                element.style.top = '100px';
            }
        });
    }
});

   
  