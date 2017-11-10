//验证用户名
$('#uname').blur(e=>{
  var $txt=$(e.target);
  var $span=$txt.parent().next().children().first();
  if($txt.val()==""){
    $span.removeClass("true").addClass("error")
        .text("用户名不能为空!");
  }else{
    $.ajax({
      type:'POST',
      url:'data/register_uname.php',
      data:{uname:$txt.val(),},
      success:function(data){
        //console.log(data);
        if(data==1){
          $span.removeClass("error")
              .addClass("true").text("√可用");

        }else{
          $span.removeClass("true")
              .addClass("error").text("用户名已存在");

        }
      },
      error:function(data){
        alert("您的网络出现故障，请检查");
      }
    });
  }
})

//验证邮箱
$('#email').blur(e=>{
  var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;

  var $txt=$(e.target);
  var $span=$txt.parent().next().children().first();
  if($txt.val()==""){
    $span.removeClass("true").addClass("error")
        .text("邮箱不能为空!");

  }else if(reg.test($txt.val())==false){
    $span.removeClass("true").addClass("error")
        .text("邮箱格式不符合!");

  }else{
    $.ajax({
      type:'POST',
      url:'data/register_email.php',
      data:{email:$txt.val(),},
      success:function(data){
        if(data==1){
          $span.removeClass("error")
              .addClass("true").text("√可用");

        }else{
          $span.removeClass("true")
              .addClass("error").text("邮箱已存在");

        }
      },
      error:function(data){
        alert("您的网络出现故障，请检查");
      }
    });
  }
})
//验证密码
$('#upwd').blur(e=>{
  var $txt=$(e.target);
  var $span=$txt.parent().next().children().first();
  if($txt.val().length<6){
    $span.removeClass("true").addClass("error").text("密码长度不足!");
  }else{
    $span.removeClass("error").addClass("true").text("√");
  }
})
$('#upwd1').blur(e=>{
  var upwd=$('#upwd').val();
  var $txt=$(e.target);
  var $span=$txt.parent().next().children().first();
  if($txt.val()!=upwd)
    $span.removeClass("true").addClass("error").text("两次密码不一致!");
  else
    $span.removeClass("error").addClass("true").text("√");
})
//验证手机号码
$('#phone').blur(e=>{
  var reg=/^1[3|4|5|7|8][0-9]{9}$/
  var $txt=$(e.target);
  var $span=$txt.parent().next().children().first();
  if($txt.val()==""){
    $span.removeClass("error").text("选填");
  }else if(reg.test($txt.val())==false){
    $span.removeClass("true")
        .addClass("error").text("格式不符合!");
  }else{
    $.ajax({
      type:'POST',
      url:'data/register_phone.php',
      data:{phone:$txt.val(),},
      success:function(data){
        if(data==1){
          $span.removeClass("error")
              .addClass("true").text("√可用");

        }else{
          $span.removeClass("true")
              .addClass("error").text("已存在");

        }
      },
      error:function(data){
        alert("您的网络出现故障，请检查");
      }
    });
  }
})


$("#box").click(function(){
  if($('#box').prop('checked')){
    $('#btn1').attr('disabled',false);
  }else{
    $('#btn1').attr('disabled',true);
  }
})
$('#btn1').click(e=>{
  if($('.error').length>0 || $('.true').length<4){
    alert('注册失败,请检查输入信息是否正确');
  }else{
    $.ajax({
      type:"POST",
      url:'data/register.php',
      data:{uname:$('#uname').val(),upwd:$('#upwd').val(),email:$('#email').val(),phone:$('#phone').val()},
      success:function(data){
        location.href = "index.html";
      },
      error:function(data){
        alert("您的网络出现故障，请检查");
      }
    })
  }
})
