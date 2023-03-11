class ViewHandler(){
constructor(){
 this.toDo = document.querySelector(".to--do")
 this.today= document.querySelector(".today--task")
 this.completed = document.querySelector(".completed")
  this.tomorrow = document.querySelector(".tomorrow--task")
  this.failed = document.querySelector(".failed--task")
  this.search =document.querySelector(".serach--task").style.display = "none";
  this.pagination = document.querySelector(".paganation").style.display = "none";
}



  showView (view){
this.toDo.style.display = "none";
this.today.style.display = "none"
 this.completed.style.display = "none"
  this.tomorrow.style.display = "none"
  this.failed.style.display = "none"
  this.search.style.display = "none" 
  this.pagination.style.display = "none"
  this.view.style.display = "block"
  }
}

export default ViewHandler;