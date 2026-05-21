function showSection(id){

    let sections =
    document.querySelectorAll(
    ".section");

    sections.forEach(function(section){

        section.style.display = "none";

    });

    document.getElementById(id)
    .style.display = "block";
}