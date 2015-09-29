
$(document).ready(function(){
	
	 $("input[name='date']").inputmask("99/99/9999",{placeholder:"MM/DD/YYYY ", clearMaskOnLostFocus: true });
	 
	$('span[id="gender"],span[id="securityQuestion"]').css("color","black");
	
	
	$('input[id="password"]').focusin(function() {
		$("#collapseExample").removeClass("collapse").addClass("collapse in");
		$("#passwordShow").css("display","block");
		});
	$('input[id="password"]').focusout(function() {
		$("#collapseExample").removeClass("collapse in").addClass("collapse");
		$("#passwordShow").css("display","none");
		});
	
	$('input[id="cpassword"]').focusin(function() {
		$("#collapseExampleMatch").removeClass("collapse").addClass("collapse in");
		$("#cpasswordShow").css("display","block");
		});
	 $('input[id="cpassword"]').focusout(function() {
		 var password = $("#password").val();
		 var cpassword = $("#cpassword").val()
		if(password == cpassword){
			$("#collapseExampleMatch").removeClass("collapse in").addClass("collapse");			
		} 
		 $("#cpasswordShow").css("display","none");
	 }); 
	 
	 
	 
	 $("#passwordShow").click(function () {
		 if ($("input[name='password']").attr("type")=="password") {
			 $("input[name='password']").attr("type", "text");
		 }
		 else{
			 $("input[name='password']").attr("type", "password");
		 }
		 
		 });
	 
	 
	 $("#cpasswordShow").click(function () {
		 if ($("input[name='cpassword']").attr("type")=="password") {
			 $("input[name='cpassword']").attr("type", "text");
		 }
		 else{
			 $("input[name='cpassword']").attr("type", "password");
		 }
		 
		 });
	 
	 
	 
	 $('input').keyup(function() {
	   
		 var inputLength =  $("input[id='"+$(this).attr("id")+"']").val().length; 
		 if(inputLength > 0){
			 $('span[id="'+$(this).attr("id")+'"]').css("color","black");
			 	
		 }else{
			 $('span[id="'+$(this).attr("id")+'"]').css("color","white");
			 
		 }


	 });
	 
	
	$("#letter .circleOk,#number .circleOk,#characters .circleOk,#match .circleOk,#passwordShow,#cpasswordShow").hide();


	$('input[id="password"]').on("keyup",function(){
	
		
		
	 var string = $('input[id="password"]').val();
		if (/\d/.test(string)){
			$("#number .circle").hide();
			$("#number .circleOk").show();
		}
		else{
			$("#number .circle").show();
			$("#number .circleOk").hide();
		} 
		if(/[a-zA-Z]/.test(string)) {
			$("#letter .circle").hide();
			$("#letter .circleOk").show();
			
		}else{
			$("#letter .circle").show();
			$("#letter .circleOk").hide();
		}
		if(string.length >=7){
			$("#characters .circle").hide();
			$("#characters .circleOk").show();
		}else{
			
			$("#characters .circle").show();
			$("#characters .circleOk").hide();
		}
		
	});
	
	
	$('input[id="cpassword"]').on("keyup",function(){
		
		
		
		 var password = $('input[id="password"]').val();
		 var cpassword = $('input[id="cpassword"]').val();	
		 if(password == cpassword){
			 $("#match .circleOk").show();	
			 $("#match .circle").hide();
			} else{
				$("#match .circle").show();
				 $("#match .circleOk").hide();	
			}
		});
	
	
	
});

