(function($)
{"use strict";$.fn.avia_sc_testimonial=function(options)
{return this.each(function()
{var container=$(this),elements=container.find('.avia-testimonial');container.on('avia_start_animation',function()
{elements.each(function(i)
{var element=$(this);setTimeout(function(){element.addClass('avia_start_animation')},(i*150));});});});}}(jQuery));