function calcAvarge(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}
let jhonTeamAvg = calcAvarge(89, 120, 103);
let mikesTeamAvg = calcAvarge(116, 94, 123);

if (jhonTeamAvg > mikesTeamAvg)
  console.log(`jhon Win With Score : ${jhonTeamAvg}`);
else if (mikesTeamAvg > jhonTeamAvg)
  console.log(`Mikes Win With Score : ${mikesTeamAvg}`);
else console.log("Same Score");

//////////////////////////////////////////
jhonTeamAvg = calcAvarge(100, 120, 103);
mikesTeamAvg = calcAvarge(100, 90, 123);
if (jhonTeamAvg > mikesTeamAvg)
  console.log(`jhon Win With Score : ${jhonTeamAvg}`);
else if (mikesTeamAvg > jhonTeamAvg)
  console.log(`Mikes Win With Score : ${mikesTeamAvg}`);
else console.log("Same Score");
//////////////////////////////////////////
let maryTeamAvg = calcAvarge(97, 134, 105);

if (jhonTeamAvg > mikesTeamAvg && jhonTeamAvg > maryTeamAvg)
  console.log(`jhon Win With Score : ${jhonTeamAvg}`);
else if (mikesTeamAvg > jhonTeamAvg && mikesTeamAvg > maryTeamAvg)
  console.log(`Mikes Win With Score : ${mikesTeamAvg}`);
else if (maryTeamAvg > jhonTeamAvg && maryTeamAvg > mikesTeamAvg)
  console.log(`Mary Win With Score : ${maryTeamAvg}`);
else console.log("Same Score");
//////////////////////////////////////////////
jhonTeamAvg = calcAvarge(140, 120, 103);
mikesTeamAvg = calcAvarge(110, 80, 130);
maryTeamAvg = calcAvarge(95, 134, 100);

if (jhonTeamAvg > mikesTeamAvg && jhonTeamAvg > maryTeamAvg)
  console.log(`jhon Win With Score : ${jhonTeamAvg}`);
else if (mikesTeamAvg > jhonTeamAvg && mikesTeamAvg > maryTeamAvg)
  console.log(`Mikes Win With Score : ${mikesTeamAvg}`);
else if (maryTeamAvg > jhonTeamAvg && maryTeamAvg > mikesTeamAvg)
  console.log(`Mary Win With Score : ${maryTeamAvg}`);
else console.log("Same Score");
