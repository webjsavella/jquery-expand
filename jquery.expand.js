/*
 * jQuery Expand Plugin v0.1 (2011-05-25)
 * Copyright (c) 2011, Gregory Plüss (gpluess@fconnection.com)
 */

(function($)
{
	var version = '0.2';

	$.fn.expand = function(options)
	{
		var defaults = {
			triggers:null,				// any child element, e.g. 'dt a'
			expandables:null,			// any child element, e.g. 'dd'
			open:':first',				// possible choices are e.g. ':first', ':last', ':even', ':odd', ...
			duration:200,
			easing:'swing'
		};

		var options = $.extend(defaults, options);

		return this.each(function()
		{
			var triggers	= $(this).find(options.triggers);
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

	$.fn.expand.version = function() { return version; };

})(jQuery);