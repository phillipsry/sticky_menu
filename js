var onLoad = function () {
	if (typeof jQuery !== 'undefined') {
		var 
        	wrap = jQuery(window),
			header = jQuery("header#masthead"),
            eventCode = function(){
            	if (wrap.scrollTop() > 147) {
					header.addClass('scrolled');
				} else {
					header.removeClass("scrolled");
				}  
            };
      	
      	jQuery(document).ready(function(){
			wrap.on("scroll", eventCode);
          	eventCode();
        });
	} else {
		setTimeout(onLoad, 100);
	}
}

setTimeout(onLoad, 0);

