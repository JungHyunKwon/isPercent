/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	'use strict';

	/**
	 * @name isPercent
	 * @since 2017-12-06
	 * @param {string} value
	 * @return {boolean}
	 */
	window.isPercent = function(value) {
		var result = false;

		//문자이면서 맨 마지막 글자가 퍼센트일 때
		if(typeof value === 'string' && value.substr(-1) === '%') {
			value = value.slice(0, -1);
			
			//숫자형으로 바꿔서 값이 같을 때
			if(value == parseFloat(value)) {
				result = true;
			}
		}

		return result;
	};
})();