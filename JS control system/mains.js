var a = prompt("Enter the mode you wants 1.Manual 2.Automatic ").toLocaleLowerCase();
if(a==='manual')
{
    function stop()
    {
        document.getElementById('red').style.backgroundColor='red';
        document.getElementById('yellow').style.backgroundColor='';
        document.getElementById('green').style.backgroundColor='';
        document.getElementById("stop").disabled = false;
        document.getElementById("readytogo").disabled = false;
        document.getElementById("gogogo").disabled = true;
    }
    function readytogo()
    {
        document.getElementById('yellow').style.backgroundColor='yellow';
        document.getElementById('red').style.backgroundColor='';
        document.getElementById('green').style.backgroundColor='';
        document.getElementById("stop").disabled = true;
        document.getElementById("readytogo").disabled = false;
        document.getElementById("gogogo").disabled = false;
    }
    function gogogo()
    {
        document.getElementById('green').style.backgroundColor='green';
        document.getElementById('red').style.backgroundColor='';
        document.getElementById('yellow').style.backgroundColor='';
        document.getElementById("stop").disabled = false;
        document.getElementById("readytogo").disabled = true;
        document.getElementById("gogogo").disabled = false;
    }
}
else if(a==='automatic')
{
    var stoop,stap,staps;
    var time = prompt("enter the time duration of traffic signal in seconds.");
    function redd()
    {
            document.getElementById('red').style.backgroundColor='red';
            document.getElementById('yellow').style.backgroundColor='';
            document.getElementById('green').style.backgroundColor='';
            stoop = setTimeout(yell,time*1000);
        }
        function yell()
        {
            document.getElementById('yellow').style.backgroundColor='yellow';
            document.getElementById('red').style.backgroundColor='';
            document.getElementById('green').style.backgroundColor='';
            stap = setTimeout(greeen,time*1000);
        }
        
        function greeen()
        {
            document.getElementById('green').style.backgroundColor='green';
            document.getElementById('yellow').style.backgroundColor='';
            document.getElementById('red').style.backgroundColor='';
            staps = setTimeout(redd,time*1000);  
        }
    function stop()
    {
        clearInterval(stoop);
        clearInterval(stap);
        clearInterval(staps);
    }
    function reset()
    {
        document.getElementById('red').style.backgroundColor = '';
        document.getElementById('yellow').style.backgroundColor = '';
        document.getElementById('green').style.backgroundColor = '';
    }
}
else
{
    alert("invalid mode");
}

