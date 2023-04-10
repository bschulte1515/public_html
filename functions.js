 function set_para() {
    var border_R = document.getElementById("border_R").value;
    var border_G = document.getElementById("border_G").value;
    var border_B = document.getElementById("border_B").value;
    var border_width = document.getElementById("border_width").value;
    var bg_R = document.getElementById("bg_R").value;
    var bg_G = document.getElementById("bg_G").value;
    var bg_B = document.getElementById("bg_B").value;

    var tag = document.getElementById("paragraph");
    tag.style.borderColor = `rgb(${border_R},${border_G},${border_B})`;
    tag.style.borderWidth = border_width
    tag.style.backgroundColor = `rgb(${bg_R},${bg_G},${bg_B})`;
}
// Function pass_check() for checking passwords
// Preconditions: passA > 8 letters; passA == passB
function pass_check() {
   var passA = document.getElementById("passA").value;
   var passB = document.getElementById("passB").value;

   if (passA.length < 8) {
      alert("Password not long enough (Minimum of 8 letters)")
   }
   else if (passA != passB) {
      alert("Passwords don't match")
   }
   else {
      alert("Valid password")
   }
}
