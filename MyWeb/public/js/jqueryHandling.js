$(document).ready(function() {
  $("#register_btn").click(function() {
    const registerName = $("#register_name").val();
    const registerEmail = $("#register_email").val();
    const registerPw = $("#register_pw").val();
    const registerPwCheck = $("#register_pw_check").val();

    if (registerName && registerEmail && registerPw && registerPwCheck) {
      if (registerPw === registerPwCheck) {
        const sendParams = {
          registerName,
          registerEmail,
          registerPw
        };
        $.post("/member_insert", sendParams, function(data, status) {
          //alert(data+":"+status);
          const parsedData = JSON.parse(data);
          alert(parsedData.msg);
          $(location).attr("href", "/");
        });
      } else {
        alert("패스워드가 일치하지 않습니다. 다시 입력하세요.");
        $("#register_pw").val("");
        $("#register_pw_check").val("");
      }
    } else {
      alert("입력되지 않은 값이 있습니다. 다시 입력하세요.");
      $("#register_name").val("");
      $("#register_email").val("");
      $("#register_pw").val("");
      $("#register_pw_check").val("");
    }
  });

  $("#login_btn").click(function() {
    const loginEmail = $("#login_email").val();
    const loginPw = $("#login_pw").val();

    if (loginEmail && loginPw) {
      const sendParams = {
        loginEmail,
        loginPw
      };
      $.post("/login", sendParams, function(data, status) {
        const parsedData = JSON.parse(data);

        if (parsedData.loginSuccess === true) {
          alert(parsedData.msg);
          $(location).attr("href", "/");
        } else {
          alert(parsedData.msg);
          $(location).attr("href", "/");
          $("#login_email").val("");
          $("#login_pw").val("");
        }
      });
    } else {
      alert("입력되지 않은 값이 있습니다. 다시 입력하세요.");
      $("#login_email").val("");
      $("#login_pw").val("");
    }
  });

  $("#logout_btn").click(function() {
    console.log("로그아웃");
    $.get("/logout", function(data, status) {
      const parsedData = JSON.parse(data);
      alert(parsedData.msg);
      $(location).attr("href", "/");
    });
  });

  $("#donateInfoSearch_btn").click(function() {
    const searchType = $("#searchType").val();
    const donate_input = $("#donate_input").val();
    const send_params = {
      searchType,
      donate_input
    };
    $.post("/search_donateInfo", send_params, function(data, status) {
      //alert(data+":"+status);
      const parsed_data = JSON.parse(data);
      if (parsed_data.msg == "조회 결과 없음") {
        alert("기관명을 입력하세요");
      } else {
        let printData = "";
        for (key in parsed_data.msg) {
          printData += `${key}${parsed_data.msg[key]}<hr>`;
        }

        $("#carBasicInfoSearch_div").html(`${printData}`);
      }
    });
  });
});
