function Confirm(){
}
function doSwal(swalOption, callback) {
	swal(swalOption, function(isConfirm) {
		if(isConfirm) {
			if(callback) {
				callback(swalOption.params);
			}
		}
	});
}

(function($) {
	var _default = {
			"showCancelButton" : true,
			"cancelButtonText" : "取消",
			"confirmButtonText" : '确定',
			"allowEscapeKey" : false,
			"animation" : false
		};
	Confirm.danger = function(option, callback){
		var defaultTypeOption = {
				"type": "error",
				"confirmButtonClass" : 'btn-danger'
			};
		if(option) {
			option = $.extend({}, _default, defaultTypeOption, option);
		}
		doSwal(option, callback);
	};
	Confirm.success = function(option, callback){
		var defaultTypeOption = {
				"type": "success",
				"confirmButtonClass" : 'btn-success'
			};
		if(option) {
			option = $.extend({}, _default, defaultTypeOption, option);
		}
		doSwal(option, callback);
	};
})(jQuery);