let userinput=document.querySelector("#date");
userinput.max=new Date().toISOString().split("T")[0];

let cal=document.querySelector("#btn");





let res=document.querySelector(".result");
let ageprint=document.querySelector(".value1");
let resetbuttons=document.querySelector(".reset1");

const getDateOnMonth=(y1,m1)=>{
    return new Date(y1,m1,0).getDate();
 }

const resetGame=()=>{
    userinput.value="";
    res.classList.add("hide");
    
    
}













const agecal=()=>{
    let birthdate=new Date(userinput.value);
    let y1=birthdate.getFullYear();
    let m1=birthdate.getMonth();
    let d1=birthdate.getDate();

    let today=new Date();
    let y2=today.getFullYear();
    let m2=today.getMonth();
    let d2=today.getDate();

    let y3,m3,d3;

    y3=y2-y1;
    if(m2>=m1){ m3=m2-m1;}
    else{
        --y3;
        m3=12-m1+m2;
    }

    if(d2>=d1){ d3=d2-d1;}
    else{
        --m3;
        d3=getDateOnMonth(y1,m1)-d1+d2;
    }

    if(m3<0){
        m3=11;
        --y3;
    }

    ageprint.innerText=`Year:${y3} Month:${m3} Date:${d3}`;
   res.classList.remove("hide");
    
    resetbuttons.addEventListener("click",resetGame);


    
 }

 








cal.addEventListener("click",agecal);

