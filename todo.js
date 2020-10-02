

function myFunction() {

  

  if (document.getElementById("inputValue").value.length > 0) {

    var a = document.getElementById("inputValue").value;  //setting input value in var a 
    document.getElementById("inputValue").value = '';
    var node = document.createElement("LI"); //creating li element in dom
    var textnode = document.createTextNode(a); //creating textnode using a to append in li
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);

  }

}

