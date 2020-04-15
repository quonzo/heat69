(function($){"use strict";var elements=$('.has-background, .has-text-color');elements.each(function(i)
{var element=$(this);if(!(element.hasClass('has-background')||element.hasClass('has-text-color')))
{return;}
var classList=element.attr('class').split(/\s+/);var color='';var style='';if(element.hasClass('has-background'))
{$.each(classList,function(index,item){item=item.trim().toLowerCase();if(0==item.indexOf('has-col-')&&-1!=item.indexOf('-background-color'))
{color=item.replace('has-col-','');color=color.replace('-background-color','');color=color.replace(/-|[^0-9a-fA-F]/g,'');if(color.length==3||color.length==6)
{element.css({'background-color':'','border-color':''});style='undefined'!=typeof element.attr('style')?element.attr('style'):'';element.attr('style',style+' background-color: #'+color+'; border-color: #'+color+';');}}});}
if(element.hasClass('has-text-color'))
{$.each(classList,function(index,item){item=item.trim().toLowerCase();if(0==item.indexOf('has-col-')&&-1==item.indexOf('-background-color')&&-1!=item.indexOf('-color'))
{var color=item.replace('has-col-','');color=color.replace('-color','');color=color.replace(/-|[^0-9a-fA-F]/g,'');if(color.length==3||color.length==6)
{element.css('color','');style='undefined'!=typeof element.attr('style')?element.attr('style'):'';element.attr('style',style+' color: #'+color+';');}}});}});})(jQuery);