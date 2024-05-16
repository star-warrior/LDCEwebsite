function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}

function remove() {
  const sidebar = document.querySelector(".sidebar");
  if (sidebar.style.left === "-250px") {
    sidebar.style.left = "0";
  } else {
    sidebar.style.left = "-250px";
  }
}
document.addEventListener('scroll',()=>{
  const header=document.querySelector('header');
  if(window.scrollY>100){
    header.classList.add('scrolled');
  }else{
    header.classList.remove('scrolled');
  }
})

let menulist=document.getElementById("menuList")
menulist.style.maxHeight="355";
function toggleMenu(){
  if(menulist.style.maxHeight=="0px"){
    menulist.style.maxHeight="355px"
  }else{
    toggle()
  }
}
function toggle(){
  menulist.style.maxHeight="0px";
}