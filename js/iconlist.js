(function($)
{"use strict";$.fn.avia_sc_iconlist=function(options)
{return this.each(function()
{var iconlist=$(this),elements=iconlist.find('>li');iconlist.on('avia_start_animation',function()
{elements.each(function(i)
{var element=$(this);setTimeout(function(){element.addClass('avia_start_animation')},(i*350));});});});}}(jQuery));