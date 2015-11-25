jQuery(document).ready(function() {

    var formfield;

    jQuery('.cpicker').spectrum({
        showInput: true,
        showAlpha: true,
        clickoutFiresChange: true,
        preferredFormat: 'rgb',
        showButtons: false,
        change: function(color){
            jQuery(this).trigger('input');
        },
        move: function(color){
            jQuery(this).trigger('input');
        }
    });

    jQuery('.custom_css_text').keyup(function()
    {
        var abc = jQuery(this).val();
        jQuery('.custom_css_show').text('<style>'+abc+'</style>');
    })



    jQuery('body').on('click', '.upload_logo_formpage', function() {
        formfield = jQuery(this).prev('input');
        tb_show('','media-upload.php?TB_iframe=true');
        return false;
    });


    window.old_tb_remove = window.tb_remove;
    window.tb_remove = function() {
        window.old_tb_remove();
        formfield=null;
    };


    window.original_send_to_editor = window.send_to_editor;
    window.send_to_editor = function(html){
        if (formfield) {
            fileurl = "url("+jQuery('img',html).attr('src')+")";
            jQuery(formfield).val(fileurl);
            jQuery(formfield).trigger('input');
            tb_remove();
        } else {
            window.original_send_to_editor(html);
        }
    };

});
 