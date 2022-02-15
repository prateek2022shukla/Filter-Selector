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


$( document ).ready(function() {
//    displayTop();
   display();
});


var Table="";

function displayTop()
{
    $("#main").html("");
    var dropBrand = "";

    dropBrand += '<select id="panel1" onchange = "filt()" > <option>Brand</option>  ' ;
    
    tempBrand = [];
    var j=0;
    for(var i=0;i< products.length;i++)
    {
        if(!tempBrand.includes(products[i].brand))
        {
            tempBrand.push(products[i].brand);
            dropBrand += '   <option  class="brand" data-brand = '+products[i].brand+' >' + tempBrand[j] + '</option> ';
            j++;
        }
    }

    dropBrand += "</select>";
    $("#main").append(dropBrand);

    var dropOs = "";

    dropOs += '<select id="panel2" onclick = "filt()"> <option>OS</option>  ' ;
    
    tempOs = [];
    j=0;
    for(var i=0;i<products.length;i++){
        if(!tempOs.includes(products[i].os)){
            tempOs.push(products[i].os);
            dropOs += '   <option class = "os" data-os = "'+products[i].os+'" >' + tempOs[j] + '</option> ';
            j++;
        }
       
    }

    dropOs += "</select>";
    $("#main").append(dropOs);
}

function display()
{
    displayTop();
    Table = "";
    Table += '<table id ="myTable">  <tr> <th> ID </th> <th> Name </th> <th> Brand </th> <th> OS  </th> <th> Remove </th>  </tr>';
    
    for(var i=0;i<products.length;i++)
    {
        printTable(i);
    }

    Table += "</table>";
    $("#main").append(Table);



    $(document).ready(function (){
        $("a").click(function () {
            $(this).parent().parent().hide()  ; 
        });
        
    });
   displayBottom();

}



    function displayBottom(){

    $('<input/>').attr({ type: 'text', id: 'searchBox', name: 'searchBox'}).appendTo('#main');

    $('#main').focus(function(e) {
        alert('Focus');
    });


    $('<input>').attr({ type: 'button', id: 'searchBtn', name: 'searchBtn', value: 'Search', onclick: 'search()'}).appendTo('#main');

    $('#main').focus(function(e) {
        alert('Focus');
    });
    }



function search() {
    var input, filter, table, tr, td1, td2, i, txtValue1, txtValue2;
    input = document.getElementById("searchBox");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td1 = tr[i].getElementsByTagName("td")[0];
      td2 = tr[i].getElementsByTagName("td")[1];
      if (td1 || td2) {
        txtValue1 = td1.textContent || td1.innerText;
        txtValue2 = td2.textContent || td2.innerText;
        if (txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }



function filt(){
    var x = document.getElementById("panel1").value;
    var y = document.getElementById("panel2").value;
    Table="";
    // displayTop();
    // myTable = $("#main").html();
    console.log(x,y);
    

    Table += '<table id ="myTable">  <tr> <th> ID </th> <th> Name </th> <th> Brand </th> <th> OS  </th> <th> Remove </th>  </tr>';

    for(var i=0;i<products.length;i++)
    {
        if(x=="Brand" && y=="OS")
        {
            printTable(i);
        }
        else if (x!='Brand' && y=='OS')
        {
            if (products[i].brand == x)
            {
                printTable(i);
            }
        }
        else if (x=='Brand' && y!='OS')
        {
            if (products[i].os == y)
            {
                printTable(i);
            }
        }
        else
        {
            if ( (products[i].brand == x) && (products[i].os == y) )
            {
                printTable(i);
            }
        }
    }


    $(document).ready(function (){
        $("a").click(function () {
            $(this).parent().parent().hide()  ; 
        });
        
    });
    Table += "</table>";
    $('#main').html('');
    displayTop();
  
    $("#main").append(Table);
    displayBottom();
    
}

function printTable(i)
{
    Table += '<tr id='+products[i].id+'> <td>' + products[i].id + '</td>   <td>' + products[i].name + '</td>  <td>' + products[i].brand + '</td>  <td>' + products[i].os + '</td>  <td>  <a href = "#" class="remove" '+ products[i].id+' > X </a>    </td>  </tr>';

}

