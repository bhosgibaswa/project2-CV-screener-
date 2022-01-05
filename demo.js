const data=[
    {
        Name:"Baswa",
        age:22,
        role:"SD-1",
        location:"Banglore",
        language:"Javascript",
        exp:1,
        image:'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
        Name:"sony",
        age:18,
        role:"HR",
        location:"Pune",
        language:"Javascript",
        exp:2,
        image:"https://randomuser.me/api/portraits/women/82.jpg"
    },
    {
        Name:"Rahul",
        age:23,
        role:"backend Developer",
        location:"Hyderabad",
        language:"Software Developer",
        exp:2,
        image:"https://randomuser.me/api/portraits/men/76.jpg"
    }, {
        Name:"Aman",
        age:24,
        role:"Developer",
        location:"Delhi",
        language:"Angular JS",
        exp:2,
        image:"https://randomuser.me/api/portraits/men/77.jpg"
    }, {
        Name:"Saket",
        age:25,
        role:"Technical Expert",
        location:"Mumbai",
        language:"Python",
        exp:3,
        image:"https://randomuser.me/api/portraits/men/78.jpg"
    }, {
        Name:"Amit",
        age:18,
        role:"Developer",
        location:"kolkatta",
        language:"Javascript",
        exp:2,
        image:"https://randomuser.me/api/portraits/men/79.jpg"
    }, {
        Name:"Poorvi",
        age:20,
        role:"Developer",
        location:"Banglore",
        language:"Javascript",
        exp:2,
        image:"https://randomuser.me/api/portraits/women/81.jpg"
    }, {
        Name:"Viwaan",
        age:20,
        role:"Developer",
        location:"Banglore",
        language:"Javascript",
        exp:2,
        image:"https://randomuser.me/api/portraits/men/81.jpg"
    }, {
        Name:"Baswa",
        age:22,
        role:"SD-1",
        location:"Banglore",
        language:"Javascript",
        exp:"3",
        image:'https://randomuser.me/api/portraits/men/99.jpg'
    },
    {
        Name:"Rahul",
        age:23,
        role:"SD-2",
        location:"Hyderabad",
        language:"SD(Software Developer)",
        exp:2,
        image:"https://randomuser.me/api/portraits/men/83.jpg"
    }, {
        Name:"Aman",
        age:24,
        role:"Web Developer",
        location:"Delhi",
        language:"Angular JS",
        exp:2,
        image:"https://randomuser.me/api/portraits/men/84.jpg"
    }, {
        Name:"Saket",
        age:25,
        role:"Front-End Developer",
        location:"Mumbai",
        language:"Python",
        exp:3,
        image:"https://randomuser.me/api/portraits/men/85.jpg"
    }, {
        Name:"Amit",
        age:18,
        role:"Software Developer",
        location:"kolkatta",
        language:"Javascript",
        exp:2,
        image:"https://randomuser.me/api/portraits/men/86.jpg"
    }, {
        Name:"Poorvi",
        age:20,
        role:"Software Developer",
        location:"Banglore",
        language:"Javascript",
        exp:2,
        image:"https://randomuser.me/api/portraits/women/78.jpg"
    }, {
        Name:"Viwaan",
        age:20,
        role:"Software Developer",
        location:"Banglore",
        language:"Javascript",
        exp:2,
        image:"https://randomuser.me/api/portraits/men/87.jpg"
    }, {
        Name:"Sony",
        age:18,
        role:"HR",
        location:"Pune",
        language:"Javascript",
        exp:2,
        image:"https://randomuser.me/api/portraits/women/89.jpg"
    },
]

function cvProfiles(profiles){
let nextIndex=0;
return{
    next:function(){
        return nextIndex<profiles.length ?
        {value:profiles[nextIndex++],done:false}:
        {done:true}
}
};
}
const candidates = cvProfiles(data);
const next=document.getElementById("next");

nextCV();

next.addEventListener("click",nextCV);
function nextCV(){
 
const currentCandidate=candidates.next().value;

    let image=document.getElementById("image");
    let profile=document.getElementById("profile");
if(currentCandidate!=undefined){

image.innerHTML=`<img src="${currentCandidate.image}">`;

profile.innerHTML=`<ul class="list-group">

<li class="list-group-item list-group-item-dark"><b>NAME: ${currentCandidate.Name}</b></li>
<li class="list-group-item list-group-item-dark"><b>${currentCandidate.age} years old</b></li>
<li class="list-group-item list-group-item-dark"><b>Role is ${currentCandidate.role}</b></li>
<li class="list-group-item list-group-item-dark"><b> lives in ${currentCandidate.location}</b></li>
<li class="list-group-item list-group-item-dark"><b>Work as a ${currentCandidate.language}</b></li>
<li class="list-group-item list-group-item-dark"><b> Exp: ${currentCandidate.exp} years</b></li>

</ul>`}
else{
    alert("End of applications");
    window.location.reload();
}
}