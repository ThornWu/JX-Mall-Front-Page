 $('.comment_state').click(function(){
                $(this).parent().parent().parent().children().eq(2).toggle();
            });

            $('.comment_star .icon-shoucang').hover(function(){
                var row = $(this).index();
                for(i=1;i<=row;i++){
                    $(this).parent().children().eq(i).addClass('icon_red');
                }
                for(i=5;i>row;i--){
                    $(this).parent().children().eq(i).removeClass('icon_red');
                }
                $(this).parent().children().eq(6).html(row);
            });

            $('.publish_comment').click(function(){
               var commentParent=$(this).parent().parent();
               var id=$(this).attr('alt');
               var point=commentParent.children().eq(0).children().eq(6).html();
               var content=commentParent.children().eq(1).children().eq(1).val();
               console.log("商品ID："+id+"  评分："+point+"  评价："+content);
            });