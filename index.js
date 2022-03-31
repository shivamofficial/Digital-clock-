function clock(){


    var hours = document.getElementById("hour");
    var minutes = document.getElementById("min");
    var seconds = document.getElementById("sec");
    var am = document.getElementById("ampm");


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var am_pm = "AM";


    if (hrs == 0) {
        hrs = 12;
    }

    if (hrs > 12) {
        hrs = hrs - 12;
        am_pm = "PM";
    }
    if (hrs < 10) {
        hrs = "0" + hrs;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    hours.innerText = hrs;
    minutes.innerText = mins;
    seconds.innerText = secs;
    am.innerText = am_pm;
}
setInterval(clock,1000);


function Makediv(){

    var container=document.createElement('div');
    container.className="grid-item";
    container.id="display-block";


    document.getElementById("grid-container").appendChild(container);

    var content = document.getElementById("morning");
    var value = content.options[content.selectedIndex].text;
    document.getElementById("div21").innerHTML="Wake up Time : " + value;


    var content = document.getElementById("afternoon");
    var value = content.options[content.selectedIndex].text;
    document.getElementById("div22").innerHTML="Lunch Time : " + value;

    var content = document.getElementById("evening");
    var value = content.options[content.selectedIndex].text;
    document.getElementById("div23").innerHTML="Nap Time : " + value;

    var content = document.getElementById("night");
    var value = content.options[content.selectedIndex].text;
    document.getElementById("div24").innerHTML="night Time : " + value;

}


function clicked(){

    var x=document.getElementById('morning').value;
    var y = document.getElementById('afternoon').value;
    var z = document.getElementById('evening').value;
    var zz=document.getElementById('night').value;
    var hour = new Date().getHours();
     
   
    if(x==hour)

    { 
        document.getElementById('image').src="morning.gif";
        document.getElementById('textcontainer').innerText='GRAB SOME HEALTHY BREAKFAST!!!';
        document.getElementById('smallbox').innerText="GOOD MORNING!! WAKE UP !!";
        }
    
       if(y==hour)
       {
        document.getElementById('image').src="afternoon lunch.webp";
        document.getElementById('textcontainer').innerText=' LET s HAVE SOME LUNCH !!';
        document.getElementById("smallbox").innerText="Good Afternoon !! Take some sleep";
    }
    
    if(z==hour){
        document.getElementById("image").src="evening.gif"
        document.getElementById("textcontainer").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        document.getElementById("smallbox").innerText="GOOD EVENING !!";
    }    

    if(zz==hour)
    {
        document.getElementById("image").src="goodnight.gif"
        document.getElementById("textcontainer").innerText="CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("smallbox").innerText="GOOD NIGHT !!!";

    }
    
    Makediv();
   
}

clicked();