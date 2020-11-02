function hidcont(){
    document.getElementById("cntent").style.display="none";
       document.getElementById("paraex").style.display="none";
   }
   function loadcntent()
   {
        //console.log("Ahoy scoop");
        document.getElementById("loadbtn").style.display="none";
           document.getElementById("cntent").style.display="block";
      var today = new Date();
   
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

   today = dd + '/' + mm + '/' + yyyy;

   document.getElementById("dateshow").innerHTML=today;
           msg();
           
   }
   function msg(){
       alert("PRESS OK TO ENTER");
   }
   function loadpara(){
         document.getElementById("paraex").style.display="block";
          document.getElementById("paraexhid").style.display="none";
   }
   function validate(){
       var guestname=document.forms["myform"]["name"].value;
       var gname=guestname.toUpperCase();
      
       document.getElementById("formtar").style.display="none";
        document.getElementById("greet").innerHTML="Hello <strong>"+gname+" </strong>.Have a Nice Day!!";

   }
   