let interviews =
JSON.parse(
localStorage.getItem("interviews")
) || [];

function saveInterviews(){

localStorage.setItem(
"interviews",
JSON.stringify(interviews)
);

}

function addInterview(){

const company =
document.getElementById("company").value;

const date =
document.getElementById("date").value;

const round =
document.getElementById("round").value;

const notes =
document.getElementById("notes").value;

if(
company === "" ||
date === "" ||
round === ""
){
alert("Fill all fields");
return;
}

interviews.push({
company,
date,
round,
notes
});

saveInterviews();
renderInterviews();

document.getElementById("company").value="";
document.getElementById("date").value="";
document.getElementById("round").value="";
document.getElementById("notes").value="";
}

function deleteInterview(index){

interviews.splice(index,1);

saveInterviews();
renderInterviews();
}

function renderInterviews(){

const interviewList =
document.getElementById("interviewList");

interviewList.innerHTML="";

interviews.forEach((item,index)=>{

interviewList.innerHTML += `

<div class="interview-card">

<h3>${item.company}</h3>

<p>
Date:
${item.date}
</p>

<p>
Round:
${item.round}
</p>

<p>
Notes:
${item.notes}
</p>

<button
class="delete"
onclick="deleteInterview(${index})">
Delete
</button>

</div>

`;

});

}

renderInterviews();
