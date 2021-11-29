const add=document.getElementById("addBtn")
const ul=document.getElementById("myUl")


var xHTTP=new XMLHttpRequest();
xHTTP.onreadystatechange=function(){
    if(this.readyState==4&&this.status==200){
        const item=JSON.parse(xHTTP.response)
        
        
        
        for(var i=0;i<item.length;i++){
            const li=document.createElement("li")//create a li tag
            li.classList.add("list-group-item")

            const liIetm=document.createTextNode(item[i].title)//create text rom Json
            
            const inp=document.createElement("input")//create checkbox 
            inp.setAttribute("type","checkbox")
            inp.setAttribute("id","check")
            inp.setAttribute("data-myattribute",i)
            inp.style.marginRight="20px"

            const img=document.createElement("span")
            img.innerHTML="<i class=\"fas fa-trash-alt\"></i>"
            img.classList.add("float-end")
            
        
            li.appendChild(inp)
            li.appendChild(liIetm)
            li.appendChild(img)
            ul.appendChild(li)

            


            if(item[i].completed==true){
                inp.style.visibility="hidden"
                li.style.backgroundColor="rgb(240, 231, 231)"
                li.style.textDecoration="line-through"
                li.style.textDecorationColor="red"
                inp.checked=true
                
            }

            //delete button
            img.addEventListener("click",()=>{
                li.remove()
            })

            

            inp.addEventListener("change",(e)=>{
                if(inp.checked==true){
                    li.style.backgroundColor="rgb(240, 231, 231)"
                    li.style.textDecoration="line-through"
                    li.style.textDecorationColor="red"
                }
                if(inp.checked==false){
                    li.style.backgroundColor="white"
                    li.style.textDecoration="none"
                }
                
            })

            //select all button
            const all=document.getElementById("all")
            all.addEventListener("click",()=>inp.checked=true)
 
 
            //clear selected button
            const clear=document.getElementById("clear")
            clear.addEventListener("click",()=>{
                if(inp.checked){
                    li.remove()
                }
            })


        
                
                
        }

        function getData(){
            var chks = ul.getElementsByTagName("input");
            
            
            const arr=[]
            for (var i = 0; i < chks.length; i++) {
                //console.log(c)
                chks[i].addEventListener('change', (e)=>{
                    
                        
                    
                    

                
                    var attribute=e.target.getAttribute("data-myattribute")
                    arr.push(attribute)

                    
                    
                    if(arr.length==5){
                        alert( "Congrats. 5 Tasks have been Successfully Completed")

                        arr.length=0
                    }

                    
                });
                
                
            }
        }

        getData()

           
        
        


           


            
        
        
        

        

        
        

          





         //add new item
       /* add.addEventListener("click",()=>{
            const myIn=document.getElementById("myInput")
            if(myIn.value.trim()==""){
                alert("Enter an item")
            }
            else{
                const li=document.createElement("li")//create a li tag
                li.classList.add("list-group-item")

                const liIetm=document.createTextNode(myIn.value)//create text 
                
                const inp=document.createElement("input")//create checkbox 
                inp.setAttribute("type","checkbox")
                inp.setAttribute("id","check")
                inp.setAttribute("data-myattribute",i++)
                inp.style.marginRight="20px"

                const img=document.createElement("span")
                img.innerHTML="<i class=\"fas fa-trash-alt\"></i>"
                img.classList.add("float-end")
                
            
                li.appendChild(inp)
                li.appendChild(liIetm)
                li.appendChild(img)
                //ul.appendChild(li)
                ul.insertBefore(li,ul.firstChild)
                


                 //delete button
                img.addEventListener("click",()=>{
                    li.remove()
                })

                inp.addEventListener("change",(e)=>{
                    if(inp.checked==true){
                        li.style.backgroundColor="rgb(240, 231, 231)"
                        li.style.textDecoration="line-through"
                        li.style.textDecorationColor="red"
                    }
                    if(inp.checked==false){
                        li.style.backgroundColor="white"
                        li.style.textDecoration="none"
                    }
                    
                })

                 //select all button
                const all=document.getElementById("all")
                all.addEventListener("click",()=>inp.checked=true)
    
    
                //clear selected button
                const clear=document.getElementById("clear")
                clear.addEventListener("click",()=>{
                    if(inp.checked){
                        li.remove()
                    }
                })
            



            }
            //getData()

            
            
        })*/

       
        

        
        
        




        
       

       

        
        
        


            
        
        
        
            
            
       


       


        
        
        
    }
}
xHTTP.open("GET","https://jsonplaceholder.typicode.com/todos","true")
xHTTP.send()