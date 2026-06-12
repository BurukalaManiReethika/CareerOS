function generatePortfolio(){

const name =
document.getElementById("name").value;

const bio =
document.getElementById("bio").value;

const skills =
document.getElementById("skills").value;

const projects =
document.getElementById("projects").value
.split("\n");

let projectHTML = "";

projects.forEach(project => {

if(project.trim() !== ""){

projectHTML += `
<div class="project">
${project}
</div>
`;

}

});

document.getElementById("preview").innerHTML = `

<h1>${name}</h1>

<p>${bio}</p>

<h3>Skills</h3>

<p>${skills}</p>

<h3>Projects</h3>

${projectHTML}

`;

}
