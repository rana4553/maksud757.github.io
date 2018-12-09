$(document).ready(function()
{
   $('#wb_MaterialIcon1').addClass('visibility-hidden');
   $('#wb_MaterialIcon2').addClass('visibility-hidden');
   $('#wb_ServicesText2').addClass('visibility-hidden');
   $('#wb_MaterialIcon3').addClass('visibility-hidden');
   $('#wb_MaterialIcon4').addClass('visibility-hidden');
   $('#wb_ServicesText4').addClass('visibility-hidden');
   $('#wb_PanelImage1').addClass('visibility-hidden');
   $('#wb_PanelImage2').addClass('visibility-hidden');
   $('#wb_PanelImage3').addClass('visibility-hidden');
   $('#wb_ServicesText1').addClass('visibility-hidden');
   $('#wb_ServicesText1').addClass('visibility-hidden');
   $("a[href*='#comingsoon']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#comingsoon').offset().top }, 600, 'easeOutQuad');
   });
   $("a[href*='#services']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_services').offset().top }, 600, 'easeOutQuad');
   });
   function MaterialIcon1Scroll()
   {
      var $obj = $("#wb_MaterialIcon1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon1').inViewPort(true))
   {
      $('#wb_MaterialIcon1').addClass("in-viewport");
   }
   MaterialIcon1Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon1Scroll();
   });
   function MaterialIcon2Scroll()
   {
      var $obj = $("#wb_MaterialIcon2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon2').inViewPort(true))
   {
      $('#wb_MaterialIcon2').addClass("in-viewport");
   }
   MaterialIcon2Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon2Scroll();
   });
   function ServicesText2Scroll()
   {
      var $obj = $("#wb_ServicesText2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText2').inViewPort(true))
   {
      $('#wb_ServicesText2').addClass("in-viewport");
   }
   ServicesText2Scroll();
   $(window).scroll(function(event)
   {
      ServicesText2Scroll();
   });
   function MaterialIcon3Scroll()
   {
      var $obj = $("#wb_MaterialIcon3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon3', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon3').inViewPort(true))
   {
      $('#wb_MaterialIcon3').addClass("in-viewport");
   }
   MaterialIcon3Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon3Scroll();
   });
   function MaterialIcon4Scroll()
   {
      var $obj = $("#wb_MaterialIcon4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_MaterialIcon4', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_MaterialIcon4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_MaterialIcon4').inViewPort(true))
   {
      $('#wb_MaterialIcon4').addClass("in-viewport");
   }
   MaterialIcon4Scroll();
   $(window).scroll(function(event)
   {
      MaterialIcon4Scroll();
   });
   function ServicesText4Scroll()
   {
      var $obj = $("#wb_ServicesText4");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText4', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText4', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText4').inViewPort(true))
   {
      $('#wb_ServicesText4').addClass("in-viewport");
   }
   ServicesText4Scroll();
   $(window).scroll(function(event)
   {
      ServicesText4Scroll();
   });
   $("a[href*='#projects']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_projects').offset().top }, 600, 'easeOutQuad');
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
   $("a[href*='#contact']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_contact').offset().top }, 600, 'easeOutQuad');
   });
   function PanelImage1Scroll()
   {
      var $obj = $("#wb_PanelImage1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage1').inViewPort(true))
   {
      $('#wb_PanelImage1').addClass("in-viewport");
   }
   PanelImage1Scroll();
   $(window).scroll(function(event)
   {
      PanelImage1Scroll();
   });
   function PanelImage2Scroll()
   {
      var $obj = $("#wb_PanelImage2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage2', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage2', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage2').inViewPort(true))
   {
      $('#wb_PanelImage2').addClass("in-viewport");
   }
   PanelImage2Scroll();
   $(window).scroll(function(event)
   {
      PanelImage2Scroll();
   });
   function PanelImage3Scroll()
   {
      var $obj = $("#wb_PanelImage3");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_PanelImage3', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_PanelImage3', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_PanelImage3').inViewPort(true))
   {
      $('#wb_PanelImage3').addClass("in-viewport");
   }
   PanelImage3Scroll();
   $(window).scroll(function(event)
   {
      PanelImage3Scroll();
   });
   function ServicesText1Scroll()
   {
      var $obj = $("#wb_ServicesText1");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_ServicesText1').inViewPort(true))
   {
      $('#wb_ServicesText1').addClass("in-viewport");
   }
   ServicesText1Scroll();
   $(window).scroll(function(event)
   {
      ServicesText1Scroll();
   });
   function Text2Scroll()
   {
      var $obj = $("#wb_Text2");
      if (!$obj.hasClass("in-viewport") && $obj.inViewPort(true))
      {
         $obj.addClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'animate-fade-in-up', 500, 1000);
      }
      else
      if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
      {
         $obj.removeClass("in-viewport");
         AnimateCss('wb_ServicesText1', 'animate-fade-out', 0, 0);
      }
   }
   if (!$('#wb_Text2').inViewPort(true))
   {
      $('#wb_Text2').addClass("in-viewport");
   }
   Text2Scroll();
   $(window).scroll(function(event)
   {
      Text2Scroll();
   });
});
$(document).ready(function()
{
   // change the date here
   var dateFuture = new Date("December 31, 2018 12:00:00");
   // change the ID here: 'comingsoon' is the ID of the layout grid!
   var $numbers = $('#comingsoon h2');
   
   var dateNow = new Date();
   var seconds = Math.floor((dateFuture - (dateNow))/1000);
   var minutes = Math.floor(seconds/60);
   var hours = Math.floor(minutes/60);
   var days = Math.floor(hours/24);

   hours = hours-(days*24);
   minutes = minutes-(days*24*60)-(hours*60);
   seconds = seconds-(days*24*60*60)-(hours*60*60)-(minutes*60);
     
   $('#comingsoon_days').data('value', days);
   $('#comingsoon_hours').data('value', hours);
   $('#comingsoon_minutes').data('value', minutes);
   $('#comingsoon_seconds').data('value', seconds);
  
   $numbers.each(function() 
   {
     var $obj = $(this);
     $obj.data('done', false);
     $obj.html('0');
   });
   $(window).bind('scroll', function() 
   {
      $numbers.each(function() 
      {
         var $obj = $(this);
         if (!$obj.data('done') && $(window).scrollTop() + $(window).height() >= $obj.offset().top) 
         {
            $obj.data('done', true);
            $obj.animate({scroll: 1}, 
            { 
               duration: 3000, 
               step: function(now) 
               {
                  var $obj = $(this);
                  var val = Math.round($obj.data('value') * now);
                  $obj.html(val);
               }
            });
         }
      });
   }).triggerHandler('scroll');
});
