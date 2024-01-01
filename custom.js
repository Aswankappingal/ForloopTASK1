 let data=[{name:"Ashvy",age:21},
{name:"Shibli",age:21},
{name:"Ashiq",age:20},
{name:"Shinfa",age:21},
{name:"Hanna",age:21},
];
 let x=document.getElementById("inp")
 let y=document.getElementById("btn")
 let res=document.getElementById("list")
  y.onclick=()=>{
   //  console.log(data);
  


    task=new Promise((resolve,reject)=>{
      data.filter((datap)=>{
         console.log(datap.name);
         if(datap.name==x.value){
             resolve("The name is.. =" + datap.name+ " ,and Age is ="+ datap.age )
         }
         else{
            reject(" SORRY !! There is no Matching data ")
         }

      })
        
    })
    task.then((datap)=>{
      // console.log(datap.name);
      res.textContent=datap;
    })
    .catch((error)=>{
      // console.log(error);
      res.textContent=error;

    })
   }
    

    
