(function(){
    let check = 
    document.getElementsByClassName("choose");
    let dropdowns = 
    document.getElementsByClassName("dropdown_contents");
    let rightarrows = 
    document.getElementsByClassName("fa-angle-right");
    let bottomarrows = 
    document.getElementsByClassName("fa-chevron-down");
    
    
    for(let i = 0 ; i <= 1; i++){
        check[i].addEventListener("click", ()=>{
            if(dropdowns[i].style.display == "none"){
                rightarrows[i].style.display = "none";
                bottomarrows[i].style.display = "block";
                dropdowns[i].style.display = "block";
            }
            else{
    
                rightarrows[i].style.display = "block";
                bottomarrows[i].style.display = "none";
                dropdowns[i].style.display = "none";
            }
        });
    }    


    let picture1 = document.getElementById("reduce_transparency");
    let picture2 = document.getElementById("voiceover");
    let picture3 = document.getElementById("button_shapes");

    let pictures = document.getElementsByClassName("pictures");

    [picture1, picture2, picture3].forEach((cur, i) => {
        cur.addEventListener("click", ()=>{
            pictures[i].style.display = "block";
            cur.style.color = "black";
            if(i===0){
                pictures[i+1].style.display = "none";
                picture2.style.color = "#808080";
                pictures[i+2].style.display = "none";
                picture3.style.color = "#808080";
            }
            else if(i===1){
                pictures[i-1].style.display = "none";
                picture1.style.color = "#808080";
                pictures[i+1].style.display = "none";
                picture3.style.color = "#808080";
            }
            else if(i===2){
                pictures[i-1].style.display = "none";
                picture2.style.color = "#808080";
                pictures[i-2].style.display = "none";
                picture1.style.color = "#808080";
            }
        })
    });
        
        
    
})();
