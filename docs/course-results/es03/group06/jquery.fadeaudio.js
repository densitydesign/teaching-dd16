/*
/*
 * jQuery FadeAudio
 *
 * Simplified BSD License (@see License)
 * @author        Keith Collins
 * @copyright     (c) 2012 Keith Collins
 * @version 0.0.1
 * @requires jQuery
 */
(function( $ ){
	var defaults = {
		fade_in_start: 0,
		fade_in_interval: 200,
		fade_out_start: 50,
		fade_out_interval: 200,
		step : 0.02,
	};
		
	var methods = {
    init : function( options ) { 
			// get audio element
			var $audio = this,
				$this = $(this),
				data = $this.data('audioshow');
			// merge settings, options, defaults
			var settings = $.extend(true, {}, defaults);
			if (typeof options === 'object') {
				$.extend(true, settings, options);
			};
			// namespace data into one object literal (data)
			$audio.data('fadeaudio', {
				target : $(this),
				settings : settings,
			});
			// get going
			$audio.fadeaudio('_fadeAudio');					
		},
		
		/* fade audio in or out */
		
		_fadeAudio: function() {
			var $this = this,
				data = this.data('fadeaudio'),
				audioElement = this.get(0);
							
			// this runs every second that the audio is playing
			
			$(audioElement).on('timeupdate', function() {
		    
		    // if time comes to fade_in_start time, do fadeIn 		    
		    
		    console.log(audioElement.volume);
		    
		    if (Math.floor(audioElement.currentTime) == data.settings.fade_in_start) {
		      
		      // set vol to 0 for fadeIn
		      audioElement.volume = 0;
		      var vol = 0;
		      var interval = data.settings.fade_in_interval;
          var intervalID = setInterval(function() {
	        	
	        	// Increase volume by step as long as it is below 1
	        
		        if (vol < 1) {
		            vol += data.settings.step;
		        
		            // limit to 2 decimal places
	              audioElement.volume = vol.toFixed(2);
		        
		        } else {
		            
		            // Stop firing interval when 1 is reached
		            clearInterval(intervalID);
		        
		        }
          }, interval);
		    }
		    
		    // if time comes to fade_out_start time, do fadeOut
		    
		    if (Math.floor(audioElement.currentTime) == data.settings.fade_out_start) {
		      
		      // set vol to 1 for fadeOut
		      audioElement.volume = 1;
		      var vol = 1;
		      var interval = data.settings.fade_out_interval;
          var intervalID = setInterval(function() {
	        	
	        	// Decrease volume by step as long as it is above 0
	        
		        if (vol > 0) {
		            vol -= data.settings.step;
		        
		            // limit to 2 decimal places
	              audioElement.volume = vol.toFixed(2);
		        
		        } else {
		            
		            // Stop firing interval when 0 is reached
		            clearInterval(intervalID);
		        
		        }
          }, interval);
		    }
		    
			});
		},
	};
	$.fn.fadeaudio = function(method) {
		// Method calling logic
	    if ( methods[method] ) {
	    	return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	    	return methods.init.apply( this, arguments );
	    } else {
	    	$.error( 'Method ' +  method + ' does not exist on jQuery.fadeaudio' );
	    }    	
    };
})( jQuery );