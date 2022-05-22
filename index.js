console.log("This is java script");
// document.querySelector('.cross').style.display = 'none';
var picture = document.getElementsByClassName("sidebar")[0].getElementsByTagName("img")[0];
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebar-go');
    if(document.querySelector('.sidebar').classList.contains('sidebar-go')){
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';
    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(()=>{
        document.querySelector('.cross').style.display = 'inline';
    },300)
    }
});
picture.addEventListener("click", ()=>{
    if(picture.style.width=='150px'){
    picture.style.float= 'left';
    picture.style.width= '250px';
    console.log("zoomed");
    }else{
        picture.style.float= 'none';
        picture.style.width= '150px';
        console.log("unzoomed")
    }
    
}); 
