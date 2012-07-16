
var extend = function (target, src) {
    //Only deals with objects. If terrible things happen..../shrug
	
	for (var key in src) {
		if (!src.hasOwnProperty(key)) continue;
		
		if (!target[key]) {
			target[key] = src[key];
		}
	}

    // Return the modified object
    return target;
}

var Log = function ( options ) {
	
	options = extend({
		logState : 'none',
		logStates : [
			'none',
			'error',
			'info',
			'debug'
		],
		
	}, options);
	
	// @private
	// @string state
	var levelIndex = function (state) {
		return options.logStates.indexOf(state);
	};
	
	// @private, though this is what is returned...
	// @string msg
	// @object obj
	// @string level
	var log = function (msg, obj, level) {
		level = level || 'debug';
		
		//if the given level (by default, debug) is
		//a higher level than the current logState,
		//don't show it.
		if ( levelIndex(level) > levelIndex(options.logState) ) {
			return;
		}
		
		if (console) {
			if (msg) console.log(msg);
			if (obj) console.dir(obj);
		}
		return;
	};

	return log;
};
