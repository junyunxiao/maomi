//
//切换顶部类名
//$(".navlist>li>a").each(function() {
//						var firstHref = window.location.href.split('#/')[1];
//						var ahref = $(this).attr('href').split('#/')[1]
//						if ( firstHref == ahref ) {
//							$( this ).addClass('headeract').parent().siblings('li').find('a').removeClass('headeract');
//						} else {
//							$( this ).removeClass( 'headeract' );
//						}
//					}).click(function(){
//						$(this).addClass('headeract').parent().siblings('li').find('a').removeClass('headeract');
//					});
//					
$(".arra div:not(#leftTop) a").each(function() {
						var firstHref = window.location.href.split('#/')[1];
						var ahref = $(this).attr('href').split('#/')[1]
						if ( firstHref == ahref ) {
							$( this ).addClass('act2').parent().siblings('div').find('a').removeClass('act2');
						} else {
							$( this ).removeClass( 'act2' );
						}
					}).click(function(){
						$(this).addClass('act2').parent().siblings('div').find('a').removeClass('act2');
					});
					

	

					