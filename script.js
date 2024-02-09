document.getElementById("projects-button").addEventListener("click", function()
{
    var borderAnimationDiv = document.querySelector('.border-animation');
    borderAnimationDiv.classList.add('animated-border');
    borderAnimationDiv.addEventListener('animationend', function()
    {
        borderAnimationDiv.classList.remove('animated-border');
    });

    setTimeout(function()
    {
        var info = document.querySelector(".info");
        var projects = document.querySelector(".projects");
        var footer = document.querySelector("footer");

        if (info.style.display !== "none")
        {
            info.style.display = "none";
            projects.style.display = "block";
            footer.classList.add("footer-mobile");
            this.textContent = 'Home';
        } 
        
        else
        {
            info.style.display = "block";
            projects.style.display = "none";
            footer.classList.remove("footer-mobile");
            this.textContent = 'Projects';
        }

    }.bind(this), 300); // use .bind(this) to refer to button inside setTimeout
});