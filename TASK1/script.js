function showSection(id){

    let sections =
    document.querySelectorAll(
    ".content-section");

    sections.forEach(function(section){

        section.style.display = "none";

    });

    document.getElementById(id)
    .style.display = "block";
}



function showSkill(id){

    let skills =
    document.querySelectorAll(
    ".skill-content");

    skills.forEach(function(skill){

        skill.style.display = "none";

    });

    document.getElementById(id)
    .style.display = "block";
}