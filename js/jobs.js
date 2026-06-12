let jobs =
JSON.parse(
localStorage.getItem("jobs")
) || [];

function saveJobs(){

localStorage.setItem(
"jobs",
JSON.stringify(jobs)
);

}

function addJob(){

const company =
document.getElementById("company").value;

const position =
document.getElementById("position").value;

const status =
document.getElementById("status").value;

if(
company === "" ||
position === ""
){
alert("Fill all fields");
return;
}

jobs.push({
company,
position,
status
});

saveJobs();
renderJobs();

document.getElementById("company").value="";
document.getElementById("position").value="";
}

function deleteJob(index){

jobs.splice(index,1);

saveJobs();
renderJobs();
}

function renderJobs(){

const jobList =
document.getElementById("jobList");

jobList.innerHTML="";

jobs.forEach((job,index)=>{

jobList.innerHTML += `
<div class="job-card">

<h3>${job.company}</h3>

<p>
Position:
${job.position}
</p>

<p>
Status:
${job.status}
</p>

<div class="actions">

<button
class="delete"
onclick="deleteJob(${index})">
Delete
</button>

</div>

</div>
`;

});

}

renderJobs();
