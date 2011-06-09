/*
 * jQuery Expand Plugin v0.3 (2011-06-09)
 * Copyright (c) 2011, Gregory Plüss (gpluess@fconnection.com)
 */

(function($)
{
	var version = '0.3';

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

				if (options.simultaneously)
				{
					expandable.slideToggle(options.duration, options.easing);
					expandables.not($(this).parent().next()).slideUp(options.duration, options.easing);
				} else
				{
					setTimeout(function()
					{
						expandable.slideToggle(options.duration, options.easing);
					}, options.duration);
					expandables.not($(this).parent().next()).slideUp(options.duration, options.easing);
				}

			});
		});
	};

	$.fn.expand.defaults = {
		triggers: null,				// Required, any child element, e.g. 'dt a'
		expandables: null,			// Required, any child element, e.g. 'dd'
		open: ':first',				// Possible choices are e.g. ':first', ':last', ...
		duration: 200,				// Slide duration
		easing: 'swing',			// Animation: 'swing' or 'linear' are supported by default. For more advanced easing include the jquery.easing plugin.
		simultaneously: false		// Queue: expand and collapse simultaneously?
	};

	$.fn.expand.version = function() { return version; };

})(jQuery);