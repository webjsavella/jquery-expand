/*
 * jQuery Expand Plugin v0.2.1 (2011-05-26)
 * Copyright (c) 2011, Gregory Plüss (gpluess@fconnection.com)
 */

(function($)
{
	var version = '0.2.1';

	$.fn.expand = function(options)
	{
		var options = $.extend({}, $.fn.expand.defaults, options);

		return this.each(function()
		{
			var triggers = $(this).find(options.triggers);
			var expandables = $(this).find(options.expandables);

			triggers.filter(options.open).parent().addClass('open');
			expandables.not(options.open).hide();

			triggers.live('click', function(e)
			{
				e.preventDefault();

				var expandable = $(this).parent().next();

				(expandable.is(':hidden') ? $(this).parent().addClass('open') && triggers.parent().not($(this).parent()).removeClass('open') : $(this).parent().removeClass('open'));

				expandable.slideToggle(options.duration, options.easing);
				expandables.not($(this).parent().next()).slideUp(options.duration, options.easing);
			});
		});
	};

	$.fn.expand.defaults = {
		triggers: null,				// Required, any child element, e.g. 'dt a'
		expandables: null,			// Required, any child element, e.g. 'dd'
		open: ':first',				// Possible choices are e.g. ':first', ':last', ...
		duration: 200,				// Slide duration
		easing: 'swing'				// Animation: 'swing' or 'linear' are supported by default. For more advanced easing include the jquery.easing plugin.
	};

	$.fn.expand.version = function() { return version; };

})(jQuery);