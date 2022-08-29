document.querySelectorAll('button').forEach(function(item,index){
    item.addEventListener("click",()=>{
        console.log("run",parseInt(item.innerText))
        document.getElementById("test").value += index+1
    })
})