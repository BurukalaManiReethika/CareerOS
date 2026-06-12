function generateResume(){

const name =
document.getElementById("name").value;

const email =
document.getElementById("email").value;

const phone =
document.getElementById("phone").value;

const skills =
document.getElementById("skills").value;

const education =
document.getElementById("education").value;

const projects =
document.getElementById("projects").value;

const preview =
document.getElementById("resumePreview");

preview.innerHTML = `

<h1>${name}</h1>

<p>
<strong>Email:</strong> ${email}
</p>

<p>
<strong>Phone:</strong> ${phone}
</p>

<h3>Skills</h3>
<p>${skills}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Projects</h3>
<p>${projects}</p>

`;

localStorage.setItem(
"resumeData",
JSON.stringify({
name,
email,
phone,
skills,
education,
projects
})
);

}

window.onload = () => {

const data =
JSON.parse(
localStorage.getItem("resumeData")
);

if(!data) return;

document.getElementById("name").value =
data.name || "";

document.getElementById("email").value =
data.email || "";

document.getElementById("phone").value =
data.phone || "";

document.getElementById("skills").value =
data.skills || "";

document.getElementById("education").value =
data.education || "";

document.getElementById("projects").value =
data.projects || "";

generateResume();

};
