/**

 <?php

 require('config.fc.php');

 if (!isset($_SESSION)) {
	session_start();
}
 if (!isset($_SESSION['username']))
 {
     header( 'Location: login.php' );
 }
 header('content-type:text/html;charset=utf-8');



 ?>

 <?php
 $id = $_GET['id'];

 $form = ORM::for_table('builder')->where('id',$id)->find_one();
 if (!$form){echo 'Form not found'; die();}
 $con = nl2br($form->con);
 $con = str_ireplace('<script>', '', $con);
 $con = str_ireplace('</script>', '', $con);

 ?>
 <script type="text/javascript">
 window.jb = <?php echo "'$form->build'"; ?>;
 window.jo = <?php echo "'$form->options'"; ?>;
 window.jr = <?php echo "'$form->recipients'"; ?>;
 window.jc = <?php echo "'$con'"; ?>;
 window.jid = <?php echo "$id"; ?>;
 window.ide = <?php echo "$id"; ?>;
 window.ajax = 'function.php';
 window.base = <?php echo "'$path'"; ?>;
 </script>

 <?php
 $conf = json_decode($con);
 if($conf!=NULL)
 {



 if (!isset($conf[0]->cap_width)) {$conf[0]->cap_width='active';}
 if (!isset($conf[0]->subl)) {$conf[0]->subl='active';}
 if (!isset($conf[0]->theme)) {$conf[0]->theme='none';}
 if (!isset($conf[0]->themef)) {$conf[0]->themef='';}

 if ($conf[0]->cap_width=='relative')
     {$cap_width2 = 'active';} else
 {$cap_width = 'active';}

 if ($conf[0]->subl=='subl')
     {$subl2 = 'active';} else
 {$subl = 'active';}


 $theme1 = '';
 $theme2 = '';
 $theme3 = '';
 $theme4 = '';
 $theme5 = '';
 $theme6 = '';


 if ($conf[0]->bg_image=='none')
     {$theme1 = 'active';}

 if ($conf[0]->bg_image=='images/wash.png')
     {$theme2 = 'active';}

 if ($conf[0]->bg_image=='images/jean.png')
     {$theme3 = 'active';}

 if ($conf[0]->bg_image=='images/debut.png')
     {$theme4 = 'active';}

 if ($conf[0]->bg_image=='images/carbon.png')
     {$theme6 = 'active';}



 if ($conf[0]->themev=='one')
     {$themev1 = 'active';}

 else if ($conf[0]->themev=='two')
     {$themev2 = 'active';}

 else if ($conf[0]->themev=='three')
     {$themev3 = 'active';}

 else
     {$themev3 = 'active';}



 if ($conf[0]->themef=='')
     {$themef1 = 'active';}

 else if ($conf[0]->themef=='transparent')
     {$themef2 = 'active';}

 else if ($conf[0]->themef=='curvy')
     {$themef3 = 'active';}

 else
     {$themef1 = 'active';}



 if ($conf[0]->block_label=='block_label')
     {$block_label2 = 'active';}

 else
     {$block_label1 = 'active';}


 }



 ?>


 <?php
 require('addon.php');

 if (function_exists('formcraft_add_builder'))
 {
     formcraft_add_builder();
 }

 ?>





 <?php
 if (defined('MYMAIL_VERSION'))
 {
     ?>


     <div class="accordion-group">
         <div class="accordion-heading">
             <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion_fo" href="#form_options_mymail" style='color: green'>
                 9. Integration: MyMail
             </a>
         </div>

         <div id="form_options_mymail" class="accordion-body collapse">
             <div class="accordion-inner l2">

                 <div class='global_holder'>
                     <div class='gh_head'>
                         MyMail
                     </div>
                     <span class='settings_desc'>You can use the forms to easily add to your list of subscribers with MyMail.
                         <br><br>
                         <p>Step 1 of 2
                             <span class='settings_desc'>
                                 Enter the name of the list you want to add the new email subscribers to</span>
                             </p>
                             <input ng-model='con[0].mm_list' style='width: 100%' type='text'><br><br>
                             <p>Step 2 of 2
                                 <span class='settings_desc'>
                                     Now add an email field and check the option 'Add to MyMail'.<br>That's it!
                                 </span>
                             </p>
                         </div>
                     </div>
                 </div>
             </div>


             <?php } ?>


 <script src='//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'></script>
 <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js'></script>
 <script src='//ajax.googleapis.com/ajax/libs/angularjs/1.0.2/angular-sanitize.min.js'></script>


 <script src='js/jquery-ui.min.js'></script>

 <script src='libraries/js_libraries.js'></script>
 <script src='js/angular-ui.js'></script>


 <script src='js/js.js'></script>
 <script src='js/form.js'></script>
 <script src='js/build.js'></script>

 <script src='datatables/media/js/jquery.dataTables.min.js'></script>

 <script src='file-upload/js/jquery.iframe-transport.js'></script>
 <script src='file-upload/js/vendor/jquery.ui.widget.js'></script>

 <script src='colorpicker/spectrum.js'></script>

 <script src='js/jquery.json.js'></script>

 <script src='js/deflate/easydeflate.js'></script>
 <script src='js/deflate/deflateinflate.min.js'></script>
 <script src='js/deflate/typedarrays.js'></script>
 <script src='js/deflate/json3.min.js'></script>
 <script src='js/deflate/es5-shim.min.js'></script>
 <script src='js/deflate/base64.js'></script>

 <script src='bootstrap/js/bootstrap.min.js'></script>


 */