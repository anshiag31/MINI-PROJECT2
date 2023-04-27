let move = document.querySelectorAll(".filter-item");
console.log(move)
for(let i of move){
    move[i].addEventListener("onclick", function(){
        move[i].style.backgroundColor = "brown"; 
    });
}