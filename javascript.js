function showDiv() {
  document.getElementById('welcomeDiv').style.display = "block";}
function getSearchText() {
  var conName = document.getElementById("mySearch").value;
  fetch('https://restcountries.eu/rest/v2/name/'+conName)
  .then((response) => response.json())
  .then((data)=> {
    let output='<h3 class="mb-3">COUNTRY</h3>';
    data.forEach(function(user) {
    output+=`
<style>
h3{
  text-align:center;
  font-size:50px;}
h4{
  text-align:center;
  font-size:40px;}
</style>
  <div class="card">
  <a href="details.html">
  <img src="${user.flag}" alt="Avatar" style="width:100%">
  <div class="container">
  <h4><b>${user.name}</b></h4>     
  </div>
  </div>`
      let resultss;
    resultss=`
<style>
div.center{
      text-align: center;}
img{
      padding:10px;}
b{
      font-size: 60px;
      color:red;}
td,th {
 font-size:30px;}
td{
  color:black;}
 table{ 
  border-collapse: collapse; 
  background-color:rgb(255,255,160);}
td,th,tr{
  border: 1px solid black;}
th{
  font-weight: bold;
  color:red;}
@media screen and (max-width:600px){
b{
  font-size: 50px;
  color:blue;}
}   
 </style>
  <div class="center">
  <b>"${user.name}"</b> </br></br>
  <img src="${user.flag}" alt="Avatar" style="width:40%">
  </div>
  </br>
  <table border="1" align="center">
  <tr>
  <th>ATTRIBUTE</th>
  <th>VALUE</th>
  </tr>
  <tr>
  <td>Capital</td>
  <td>"${user.capital}"</td>
  </tr>
  <tr>
  <td>Region</td>
  <td>"${user.region}"</td>
  </tr>
  <tr>
  <td>Subregion</td>
  <td>"${user.subregion}"</td>
  </tr>
  <tr>
  <td>Population</td>
  <td>"${user.population}"</td>
  </tr>
  <tr>
  <td>Latitude and
        Longitude</td>
  <td>"${user.latlng}"</td>
  </td>
  <tr>
  <td>Demonym</td>
  <td>"${user.demonym}"</td>
  </tr>
  <tr>
  <td>Area</td>
  <td>"${user.area}"</td>
  </tr>
  <tr>
  <td>Timezones</td>
  <td>"${user.timezones}"</td>
  </tr>
  <tr>
  <td>Borders</td>
  <td>"${user.borders}"</td>
  </tr>
  <tr>
  <td>Nativename</td>
  <td>"${user.nativeName}"</td>
  </tr>
  <tr>
  <td>Currencies</td>
  <td>"${user.currencies.map(function(user){
   return "Code: "+user.code+" "+"Name: "+user.name+" "+"Symbol: "+user.symbol+" "
  }).join('')}"</td>
  </tr>
  <tr>
  <td>Languages</td>
  <td>"${user.languages.map(function(user){
    return "Name: "+user.name+" "+"Nativename: "+user.nativeName+" "
  }).join('')}"</td>
  </tr>
  <tr>
  <td>Regionalblocs</td>
  <td>"${user.regionalBlocs.map(function(user){
   return "Acronym: "+user.acronym+" "+"Name: "+user.name+" "
  }).join('')}"</td>
  </tr>
  </table>
    `
    localStorage.setItem('ret', resultss);
   // console.log(resultss);
      });
      document.getElementById('contname').innerHTML=output;
  })
  .catch((err)=>{
    alert("no country");
  });
}
function getcountrydetails(){
 var ret = localStorage.getItem('ret');
    // console.log(ret);
 document.getElementById('mycon').innerHTML=ret;
}
function goBack() {
  window.history.back();
}