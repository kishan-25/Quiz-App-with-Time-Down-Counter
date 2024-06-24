function f1()
    {
       
        var val = document.getElementsByName("q1");
        var count = 0;
        for(i=0;i<val.length;i++)
        {
            if(val[i].checked)
            {
                if(val[i].value==1991)
                {
                    count++;
                }
            }
        }
        localStorage.setItem('countvalue',count);
        location.href = "q2.html"
    }
    function timer()
    {
    setInterval(() =>{
            var sec = document.getElementById("sec");
            secvalue = parseInt(sec.innerHTML);
            secvalue--;
            if(secvalue == 0)
               secvalue = 60;
            sec.innerHTML = secvalue.toString();
    },1000);
    setInterval(() =>{ 
            var min = document.getElementById("min");
            minvalue = parseInt(min.innerHTML);
            minvalue--;
            if(minvalue==0)
              location.href = "q2,html";
            min.innerHTML = minvalue.toString();
        },60000);
    
    }