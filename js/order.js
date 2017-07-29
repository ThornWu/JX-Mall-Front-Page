 $('.new_address').click(function(){
                $('.address_form_title').text('新建地址');
                $('.edit_widgetcontainer').show();
                $('#address_detail').val('');
                $('#address_receiver_name').val('');
                $('#address_contact').val('');
            });

            $('.close_form').click(function(){
                $('.edit_widgetcontainer').hide();
                $('.switch_widgetcontainer').hide(); 
            });
            $('.cancel_button').click(function(){
                $('.edit_widgetcontainer').hide();
                $('.switch_widgetcontainer').hide(); 
            });

            $('.edit_address').click(function(){
                $('.address_form_title').text('编辑地址');
                $('#address_detail').val($('#show_address').html());
                $('#address_receiver_name').val($('#show_name').html());
                $('#address_contact').val($('#show_contact').html());
                $('.edit_widgetcontainer').show();
            });

            $('.switch_address').click(function(){
                $('.switch_widgetcontainer').show(); 
            });

            $('.switch_item').click(function(){
                $('.switch_item').removeClass('active');
                $(this).addClass('active');
            });

            $('.submit_button').click(function(){
                $('#show_name').html($(".switch_list .active .select_name .text").html());
                $('#show_contact').html($(".switch_list .active .select_contact .text").html());
                $('#show_address').html($(".switch_list .active .select_address .text").html());
                $('.switch_widgetcontainer').hide(); 
            });