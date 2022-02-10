var products = [{
    "id": "100",
    "name": "iPhone 4S",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "101",
    "name": "Moto X",
    "brand": "Motorola",
    "os": "Android"	
},
{
    "id": "102",
    "name": "iPhone 6",
    "brand": "Apple",
    "os": "iOS"
},
{
    "id": "103",
    "name": "Samsung Galaxy S",
    "brand": "Samsung",
    "os": "Android"
},
{
    "id": "104",
    "name": "Google Nexus",
    "brand": "ASUS",
    "os": "Android"
},
{
    "id": "105",
    "name": "Surface",
    "brand": "Microsoft",
    "os": "Windows"
}];

// var select = document.getElementById("main");

// for (var i=0;i<products.length;i++)
// {
//     var option = document.createElement("option");
//     option.value = products[i].brand;
//     option.text = products[i].brand.charAt(0).toUpperCase() + products[i].brand.slice(1);
//     select.appendChild(option);
// }


// var brandArr = [];

// for(var i=0;i<products.length;i++){
//      brandArr[i] = products[i].brand;
// }


//   document.getElementById("main").innerHTML = '<select> <option>Brand</option>\

//    '+ for(var i=0;i<products.length;i++){
//     var opt;
//     opt += brandArr[i];

//     '<option>'+opt+'</option>'
// } +'</select>';


// for(var i=0;i<products.length;i++){
//      var opt;
//      opt += brandArr[i];

//      '<option>'+opt+'</option>'
//}











var drop = "";

drop += '<select> <option>Brand</option>  ' ;

for(var i=0;i<products.length;i++){
    drop += '   <option >' + products[i].brand + '</option> ';
}

drop += "</select>";
$("#main").append(drop);






var os = "";

os += '<select> <option>OS</option>  ' ;

for(var i=0;i<products.length;i++){
    os += '   <option >' + products[i].os + '</option> ';
}

os += "</select>";
$("#main").append(os);






var myTbale = "<table>"

myTbale += '<table>  <tr> <th> ID </th> <th> Name </th> <th> Brand </th> <th> OS  </th> <th> Remove </th>  </tr>  ' ;

for(var i=0;i<products.length;i++){
    myTbale += '<tr id='+products[i].id+'> <td>' + products[i].id + '</td>   <td>' + products[i].name + '</td>  <td>' + products[i].brand + '</td>  <td>' + products[i].os + '</td>  <td>  <a href = "#" class="remove" '+ products[i].id+' > X </a>    </td>  </tr>'
}

myTbale += "</table>";
  $("#main").append(myTbale);





$(document).ready(function (){
    $("a").click(function () {
        $(this).parent().parent().hide()  ; 
    });
    
});









$('<input/>').attr({ type: 'text', id: 'searchBox', name: 'searchBox'}).appendTo('#main');

$('#main').focus(function(e) {
    alert('Focus');
});


$('<input>').attr({ type: 'button', id: 'searchBtn', name: 'searchBtn', value: 'Search'}).appendTo('#main');

$('#main').focus(function(e) {
    alert('Focus');
});




$("#searchBtn").click(function(){
   
    var inputVal = $("#searchBox").val();
    console.log(inputVal);

   
        
       
    // console.log(inputVal,products[i].id);
    $("tr").each(function()
    {
        var check = $("tr").children().first().html();
        check=parseInt(check);
        
        for (var i=0; i < products.length; i++)
        {
            // console.log(products[i].id);
            // console.log(check == products[i].id);
            if(check == products[i].id){
                $("table").hide();
            }
        }
            
    });
  
    
  });

//   function search(temp,inputVal,products){
//       for(var i=0;i<products.length;i++){
//           if(products[i].id == inputVal){
//             //  $("td").parent().hide();
//             console.log("yes");
//           }
//           else{
//             $("td").parent().hide();
//             console.log("no");
//           }
//       }


// //   $("#main").append(temp);

//   }
