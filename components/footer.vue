<template>
 <footer class="footer">
     <div class="container">
         <div class="row">
             <div class="col-lg-6 footer-container">
                 <img class="img-fluid" src="../assets/images/paysure_White.png" style="max-width:100%; height:30px !important"/>
             </div>

           <div class="col-lg-6" style="display:flex;justify-content:center;align-items:center;margin-top:10px">
                 <ul  class="footer_link">
                     <li class="ml-3 footer_link ">Services</li>
                     <li class="ml-3 footer_link ">Company</li>
                     <li class="ml-3 footer_link ">Become An Agent</li>
                     <li class="ml-3 footer_link ">Contact Us</li>
                 </ul>
              </div>
         </div>
     </div>
 </footer>
</template>



<script>
export default {
name:"Footer",

}
</script>

<style>
.footer{
  padding: 30px 10px;
    background-color: var(--primary-color);
}
.footer-container{
    display:flex;
   justify-content: flex-start;
    align-items:center;
}
.footer_link{
    color: var(--white-color);
    grid-template-columns: auto auto auto auto;
    display:grid;
    margin:0px;
}
@media screen and (max-width:768px){
    .footer-container{
        flex-direction: column;
    }
    .footer_link{
       grid-template-columns: auto auto;
    display:grid;
        margin-left: 0px;
        margin-top: 5px;
    }
}
</style>
