import { Main } from "./index";
import { ApiCaller } from "./apiCaller";

export class User {
  mainContext: Main;
  apiCaller: ApiCaller;
  constructor(main: Main) {
    this.mainContext = main;
    this.apiCaller = new ApiCaller();
  }
  // funkcja z eventu submit
  register() {
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/register",
      data: $("#form1").serialize(),
      dataType: "json",
      success: function (response: any) {
        //alert("a");
        //console.log(response.Success);
        //@ts-block
        $("#form1")[0].reset();

        document.getElementById("checkRegister").innerHTML = response.Success;
        //doodaj ten kod
        setTimeout(function () {
          document.getElementById("checkRegister").innerHTML = "";
        }, 3000);
      },
      error: function () { },
    });
  }

  login() {
    let self = this
    $.ajax({
      type: "POST",
      url: "http://127.0.0.1:3000/login",
      data: $("#formLogin").serialize(),
      dataType: "json",
      success: function (response) {
        //alert("a");
        console.log(response);
        $("#formLogin")[0].reset();
        if (response.Success == "Success!") {
          let data = { data: "userExist" };
          self.apiCaller.saveDataUser(data);
        }
        document.getElementById("checkLogin").innerHTML = response.Success;
        //dodaj ten kod
        setTimeout(function () {
          document.getElementById("checkLogin").innerHTML = "";
        }, 3000);
      },
      error: function () { },
    });
  }
}
