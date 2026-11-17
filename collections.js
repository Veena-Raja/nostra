var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")
var category=document.getElementsByName("category")
var products=document.querySelectorAll(".product")

menuicon.addEventListener("click",function(){
    sidenav.style.left="0";

})

closenav.addEventListener("click",function(){
    sidenav.style.left="-100%";
})


// category.forEach(function(checkbox){
//     category.addEventListener("change",function(){
//             var selectedCategories=[];
//         category.forEach(function(item){
//             if(item.checked){
//               selectedCategories.push(item.value);

//         }
//     });
// products.forEach(function(product){
//     var category=product.CDATA_SECTION_NODE.category;
//     if(selectedCategories.length===0||selectedCategories.includes(category)){
//         product.style.display="block";
//     }
//     else{
//         product.style.display="none";
//     }

// });
// });
// });

var category = document.getElementsByName("category");
var products = document.querySelectorAll(".product");

category.forEach(function(item) {

    item.addEventListener("change", function() {

        var selected = [];

        category.forEach(function(check) {
            if(check.checked) {
                selected.push(check.value);
            }
        });

        products.forEach(function(product) {

            if(selected.length === 0 || selected.includes(product.dataset.category)) {
                product.style.display = "block";
            }
            else {
                product.style.display = "none";
            }

        });

    });
});