let teams = [
  { name: "Barcelona", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { name: "Real Madrid", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { name: "Manchester City", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 },
  { name: "Bayern Munich", mp: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, pts: 0 }
];

const table = document.getElementById("pointsTable");
const teamCount = document.getElementById("teamCount");
const matchCount = document.getElementById("matchCount");
const fixtureList = document.getElementById("fixtureList");
const resultList = document.getElementById("resultList");

function loadData() {

table.innerHTML = "";

teams.forEach((t, i) => {

table.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${t.name}</td>
<td>${t.mp}</td>
<td>${t.w}</td>
<td>${t.d}</td>
<td>${t.l}</td>
<td>${t.gf}</td>
<td>${t.ga}</td>
<td>${t.gf - t.ga}</td>
<td>${t.pts}</td>
</tr>
`;

});

teamCount.innerHTML = teams.length;
matchCount.innerHTML = 0;

fixtureList.innerHTML = `
<div>Barcelona 🆚 Real Madrid</div>
<br>
<div>Manchester City 🆚 Bayern Munich</div>
`;

resultList.innerHTML = `
<p>No Match Played Yet.</p>
`;

}

loadData();
async function addTeam(){

const name = document.getElementById("teamName").value;

if(name==""){
alert("Team Name Required");
return;
}

const { error } = await supabase
.from("teams")
.insert([
{
name:name,
played:0,
win:0,
draw:0,
loss:0,
gf:0,
ga:0,
points:0
}
]);

if(error){

alert(error.message);

}else{

alert("Team Added Successfully");

document.getElementById("teamName").value="";

loadTeams();

}

}

async function loadTeams(){

const { data } = await supabase

.from("teams")

.select("*")

.order("points",{ascending:false});

table.innerHTML="";

teamCount.innerHTML=data.length;

data.forEach((t,index)=>{

table.innerHTML+=`

<tr>

<td>${index+1}</td>

<td>${t.name}</td>

<td>${t.played}</td>

<td>${t.win}</td>

<td>${t.draw}</td>

<td>${t.loss}</td>

<td>${t.gf}</td>

<td>${t.ga}</td>

<td>${t.gf-t.ga}</td>

<td>${t.points}</td>

</tr>

`;

});

}

loadTeams();
