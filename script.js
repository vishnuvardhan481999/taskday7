// Get all the countries from Asia continent /region using Filter function

 const request=new XMLHttpRequest();
 request.open('GET','https://restcountries.com/v3.1/all');
 request.send();
 request.onload=function (){
     var countryData=JSON.parse(this.response);
     const asia=countryData.filter((element)=>{
         if(element.region==='Asia'){
             return element.name;
         }
     })
     asia.forEach((element)=>{
 console.log(element.name.common);
 });
 }

  //Get all the countries with a population of less than 2 lakhs using Filter function

 const request=new XMLHttpRequest();
 request.open('GET','https://restcountries.com/v3.1/all');
 request.send();
 request.onload=function(){
     const pop_data = JSON.parse(this.response);
     const pop = pop_data.filter((value)=>
     {
        
         if(value.population<200000){
            return value
         }

     });
     console.log(pop)
 }

 
// Print the following details name, capital, flag, using forEach function


 const request = new XMLHttpRequest();
 request.open('GET','https://restcountries.com/v3.1/all');
 request.send();
 request.onload = function(){
     const info = JSON.parse(this.response);
     const name_capital_flag = info.forEach((value)=>{
         console.log(value.name,value.capital,value.flag)

     });
        

 }
 //Print the total population of countries using reduce function



 const request = new XMLHttpRequest();
 request.open('GET',"https://restcountries.com/v3.1/all");
 request.send();
 request.onload = function(){
     const tot_pop = JSON.parse(this.response);
     const population = tot_pop.reduce((acc,value)=>{
         return acc+value.population;
     },0);
     console.log(population);
 }




//Print the country that uses US dollars as currency.


 const request = new XMLHttpRequest();
 request.open("GET", "https://restcountries.com/v3.1/all");
 request.send();
 request.onload = function () {
   const data = JSON.parse(this.response);
   console.log(data);
   const dollar_using_countries = data.filter((element) => {
     for (const key in element.currencies) {
       console.log("key: ", key);
       for (const item in element.currencies[key]) {
         console.log("item: ", item);
         return element.currencies[key][item] == "United States dollar";
       }     }
   });
   dollar_using_countries.forEach((element) => {
     console.log(element.name.common);
   });
 };


