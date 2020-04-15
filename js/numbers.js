(function($)
{$.fn.avia_sc_animated_number=function(options)
{if(!this.length)return;if(this.is('.avia_sc_animated_number_active'))return;this.addClass('avia_sc_animated_number_active');var simple_upcount=(options&&options.simple_up)?true:false,start_timer=(options&&options.start_timer)?options.start_timer:300,format_number=function(number,number_format,final_number)
{var prepend='',addZeros=final_number.toString().length-number.toString().length;for(var i=addZeros;i>0;i--)
{prepend+='0';}
number=(simple_upcount)?number.toString():prepend+number.toString();if(''==number_format)
{return number;}
return number.split(/(?=(?:...)*$)/).join(number_format);},start_count=function(element,countTo,increment,current,fakeCountTo,number_format)
{var newCount=current+increment,final='';if(newCount>=fakeCountTo)
{final=format_number(countTo,number_format,countTo);element.text(final);}
else
{final=format_number(newCount,number_format,countTo);element.text(final);window.requestAnimationFrame(function(){start_count(element,countTo,increment,newCount,fakeCountTo,number_format);});}};return this.each(function()
{var number_container=$(this),elements=number_container.find('.__av-single-number'),countTimer=number_container.data('timer')||3000;elements.each(function(i)
{var element=$(this),text=element.text();if(window.addEventListener)element.text(text.replace(/./g,"0"));});number_container.addClass('number_prepared').on('avia_start_animation',function()
{if(number_container.is('.avia_animation_done'))return;number_container.addClass('avia_animation_done');elements.each(function(i)
{var element=$(this),countTo=element.data('number'),fakeCountTo=countTo,current=parseInt(element.text(),10),zeroOnly=/^0+$/.test(countTo),increment=0,number_format=element.data('number_format');if('undefined'!=typeof element.data('start_from'))
{current=element.data('start_from');}
if(zeroOnly&&countTo!==0)
{fakeCountTo=countTo.replace(/0/g,'9');}
increment=Math.round(fakeCountTo*32/countTimer);if(increment==0||increment%10==0)increment+=1;setTimeout(function(){start_count(element,countTo,increment,current,fakeCountTo,number_format);},start_timer);});});if(options&&options.instant_start==true)
{number_container.trigger('avia_start_animation');}});};})(jQuery);