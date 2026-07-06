
const teams = [
  {
    name: "Team Alpha",
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    pts: 0
  },
  {
    name: "Team Bravo",
    mp: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    pts: 0
  }
];

const table = document.getElementById("pointsTable");
const teamCount = document.getElementById("teamCount");
const matchCount = document.getElementById("matchCount");

function loadTable() {

table.innerHTML = "";

teams.forEach((team,index)=>{

table.innerHTML += `
<tr>

<td>${index+1}</td>

<td>${team.name}</td>

<td>${team.mp}</td>

<td>${team.w}</td>

<td>${team.d}</td>

<td>${team.l}</td>

<td>${team.gf}</td>

<td>${team.ga}</td>

<td>${team.gf-team.ga}</td>

<td>${team.pts}</td>

</tr>
`;

});

teamCount.innerHTML = teams.length;

matchCount.innerHTML = 0;

}

loadTable();
