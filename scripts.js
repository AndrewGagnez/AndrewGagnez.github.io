/*
Script: ColorThief
Purpose: Takes "overall" color of an image and uses that color as the background color for that selected project in the carousel in "Projects" section
Variables: ElementById('takeThisImageColor') - for now, hardcoded the image chosen to be used by the function colorThief
Future Work: Get it to work via getClassById("item active") and the first image it sees, this will allow for live updating of background
*/
const colorThief = new ColorThief();
const img = document.getElementById('takeThisImageColor'); 
img.crossOrigin = "Anonymous";

// Make sure image is finished loading
if (img.complete) {
  colorThief.getColor(img);
} else {
  img.addEventListener('load', function() {
    colorThief.getColor(img);
    colorValue = colorThief.getColor(img);
    r = colorValue[0];
    g = colorValue[1];
    b = colorValue[2];
    color = "rgb(" + r +"," + g +"," + b +")";

    document.getElementById("projectsBackgroundColor").style.backgroundColor = color;
  });
}

/*
Script: Div hider for "Experience" section
Purpose: When a tab is clicked, it shows that experience and makes sure that other tabs are not shown / are hidden
*/

$(".experienceTab.collapse").on('shown.bs.collapse', function () {    
//when a collapsed div is shown hide all other collapsible divs that are visible
    $(".experienceTab.collapse").not($(this)).collapse('hide');
});
