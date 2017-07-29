 function emptyOrNot(){
                if($('.cart_body').length>0){
                    $('.cart_main').show();
                    $('.empty_cart').hide();
                }
                else{
                    $('.empty_cart').show();
                    $('.cart_main').hide();
                }
                
            }
            emptyOrNot();
             $(".cart_body .col7").each(function(){
                $(this).text("￥"+$(this).parent().children().eq(4).children().eq(0).html()*$(this).parent().children().eq(5).children().eq(1).val());
            });
            
            $('#checked_all').click(function(){
                var oInput = document.getElementsByClassName("checked_single");
                for (var i = 0; i < oInput.length; i++) {
                    oInput[i].checked = document.getElementById("checked_all").checked;
                }
                show_total_num();
            });
            $('.checked_single').click(function(){
                var isallchecked = true;
                var oInput = document.getElementsByClassName("checked_single");
                for (var i = 0; i < oInput.length; i++) {
                    if (oInput[i].checked == false) {
                        isallchecked = false;
                        break;
                    }
                }
                if (isallchecked == true) {
                    document.getElementById("checked_all").checked = true;
                }
                else {
                    document.getElementById("checked_all").checked = false;
                }
                show_total_num();
            });


            $('#table_body .cart_body .col8 .cart_item_delete').click(function(){
                var row = $(this).parent().parent().index();
                $('#table_body').children().eq(row).remove();
                show_total_num();
                emptyOrNot();
            });

            $(".delete_selected").click(function(){
                var oInput = document.getElementsByClassName("checked_single");
                var Index;
                for (var i = oInput.length - 1; i >= 0; i--) {
                    if (oInput[i].checked == true) {
                        $('#table_body').children().eq(i+1).remove();
                    }
                }
                show_total_num();
                emptyOrNot();
            });

            function show_total_num(){
                var sumPrice=0;
                var oInput = document.getElementsByClassName("checked_single");
                var Index;
                for (var i = oInput.length - 1; i >= 0; i--) {
                    var currentRow=$('#table_body').children().eq(i+1);
                    if (oInput[i].checked == true) {
                        sumPrice=sumPrice+currentRow.children().eq(4).children().eq(0).html()*currentRow.children().eq(5).children().eq(1).val();
                    }
                }
                $('.origin_price').html(setZero(sumPrice));
                if(sumPrice>0){
                    $('.final_price').html(setZero(sumPrice-$('.preferential_price').html()));
                }
                else{
                    $('.final_price').html(setZero(0));
                }

                if(sumPrice>=88){
                    $('.free_ship_tip').hide();
                }
                else{
                    $('.free_ship_tip').show();
                    $('.free_remain').html(setZero(88-$('.final_price').html()));
                }
            } 


            show_total_num();


            function setZero(sumPrice){
                var sumString=sumPrice.toString().split(".");
                if(sumString.length>1){
                    if(sumString[1].length<2){
                        sumPrice=sumPrice.toString()+"0";
                    }
                    return sumPrice;
                }
                else{
                    return sumPrice.toString()+".00";
                }
            }



            var max_product_num=50;
            var min_product_num=1;
            var reg = new RegExp("^[0-9]*");
           

            $('.icon-minus').css('cursor','not-allowed');

            $('.num_input').change(function(){
                $(this).val($(this).val().match(reg));
                
                if($(this).val()==max_product_num){
                    $(this).parent().children().eq(2).css('cursor','not-allowed');
                }
                else if($(this).val()>max_product_num){
                    $(this).parent().children().eq(2).css('cursor','not-allowed');
                    $(this).val(max_product_num);
                    product_num_max();
                }
                else if($(this).val()==min_product_num){
                    $(this).parent().children().eq(0).css('cursor','not-allowed');
                }
                else if($(this).val()<min_product_num){
                    $(this).parent().children().eq(0).css('cursor','not-allowed');
                    $(this).val(min_product_num);
                    product_num_min();
                }
                else{
                    $(this).parent().children().eq(2).css('cursor','pointer');
                    $(this).parent().children().eq(0).css('cursor','pointer');
                }
                 $(this).parent().parent().children().eq(6).html("￥"+$(this).parent().parent().children().eq(4).children().eq(0).html()*$(this).val());
                 show_total_num();
            });

            $('.icon-plus').click(function(){
                if($(this).parent().children().eq(1).val()>=max_product_num){
                    product_num_max();
                    $(this).css('cursor','not-allowed');   
                }
                else{
                    $(this).parent().children().eq(1).val(parseInt($(this).parent().children().eq(1).val())+1);
                    if($(this).parent().children().eq(1).val()>=max_product_num){
                        $(this).css('cursor','not-allowed');   
                    }

                    if($(this).parent().children().eq(1).val()!=min_product_num){
                        $(this).parent().children().eq(0).css('cursor','pointer');
                    }
                    $(this).parent().parent().children().eq(6).html("￥"+$(this).parent().parent().children().eq(4).children().eq(0).html()*$(this).parent().children().eq(1).val());
                    show_total_num();
                }
            });
            

            $('.icon-minus').click(function(){
                if($(this).parent().children().eq(1).val()<=min_product_num){
                    product_num_min();
                    $(this).css('cursor','not-allowed');  
                }
                else{
                    $(this).parent().children().eq(1).val(parseInt($(this).parent().children().eq(1).val())-1);

                    if($(this).parent().children().eq(1).val()<=min_product_num){
                        $(this).css('cursor','not-allowed');   
                    }
                    else{
                        $(this).css('cursor','pointer'); 
                    }
                    if($(this).parent().children().eq(1).val()!=max_product_num){
                       $(this).parent().children().eq(2).css('cursor','pointer');   
                    }

                    $(this).parent().parent().children().eq(6).html("￥"+$(this).parent().parent().children().eq(4).children().eq(0).html()*$(this).parent().children().eq(1).val());
                    show_total_num();
                }
            });

            function product_num_max(){
                $('.max_tip').show();
                $('.max_tip').animate({opacity:1},200,function(){
                    $('.max_tip').delay(1700).animate({opacity:0},2000,function(){
                            $('.max_tip').delay(2400).hide();
                    });
                });
            };

            function product_num_min(){
                $('.min_tip').show();
                $('.min_tip').animate({opacity:1},200,function(){
                    $('.min_tip').delay(1700).animate({opacity:0},2000,function(){
                            $('.min_tip').delay(2400).hide();
                    });
                });
            }
            
            $('.place_order_url').click(function(){    
                if($('.final_price').html()!=0){
                    var idsAndNums={};
                    var jsonarray=new Array();
                    var oInput = document.getElementsByClassName("checked_single");
                    var Index;
                    for (var i = oInput.length - 1; i >= 0; i--) {
                        var currentRow=$('#table_body').children().eq(i+1);
                        if (oInput[i].checked == true) {
                            var arr  =
                            {
                                "ID" : currentRow.children().eq(2).children().eq(1).html(),
                                "Num" : currentRow.children().eq(5).children().eq(1).val()
                            }
                            jsonarray.push(arr);
                        }
                    }
                }        
                else{
                    alert("未选择商品");
                }
            });