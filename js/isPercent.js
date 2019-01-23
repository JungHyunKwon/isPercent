/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
try {
	(function() {
		'use strict';

		/**
		 * @name isPercent
		 * @since 2017-12-06
		 * @param {*} value
		 * @return {boolean}
		 */
		window.isPercent = function(value) {
			var result = false;

			//문자이면서 맨 뒷문자가 %일 때
			if(typeof value === 'string' && value.substr(-1) === '%') {
				value = value.substring(0, value.length - 1);
				
				//퍼센트일 때
				if(value == parseFloat(value, 10)) {
					result = true;
				}
			}

			return result;
		};
	})();
}catch(e) {
	console.error(e);
}