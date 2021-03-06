$(document).ready(function() {
			App.initLogin();
			initErrorPlaceholaderEvent();
		});
		
		function signIn(){
			$.ajax({
				type : "POST",
				url : "signIn",
				data : {
					"account" : $("#account").val(),
					"password" : $("#password").val()
				},
				dataType : "json",
				dataFilter : function(data, type){
					if(typeof data === 'string' && data.length === 0) {
						return null;
					}
					return data;
				},
				success : function(data) {
					window.location.href = "forward/index";
				},
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					var errorResponse;
					try {
						errorResponse = JSON.parse(XMLHttpRequest.responseText);
					} catch (e) {
						console.log(e);
					}
					if(errorResponse) {
						$("#error-label").text(errorResponse.message);
					} else {
						$("#error-label").text("系统错误");
					}
			    }
			});
		}
		
		function initErrorPlaceholaderEvent() {
			$("#account,#password").keyup(function(){
				$("#error-label").text("");
			});
		}