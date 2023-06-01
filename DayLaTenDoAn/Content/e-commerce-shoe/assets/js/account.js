const iconShowPwd = document.querySelectorAll('.icon-show-passwd')
const inputPasswd = document.querySelectorAll('.input-passwd')

iconShowPwd.forEach(function (i) {
  i.addEventListener("click", function () {
    var passwordInput = this.previousElementSibling;

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      this.classList.remove("bi-eye");
      this.classList.add("bi-eye-slash");
    } else {
      passwordInput.type = "password";
      this.classList.remove("bi-eye-slash");
      this.classList.add("bi-eye");
    }
  });
});
