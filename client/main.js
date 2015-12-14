Meteor.subscribe('forms');

function PrintElem(elem)
{
  Popup($(elem).html());
}

function Popup(data)
{
  var mywindow = window.open('', 'my div', 'height=400,width=600');
  mywindow.document.write('<html><title>FormCraft Submission</title>');
  mywindow.document.write('<body>');
  mywindow.document.write(data);
  mywindow.document.write('</body></html>');

  mywindow.print();
  mywindow.close();

  return true;
}


/*
 <?php

 if (!isset($_SESSION)) {
 session_start();
 }
 if (!isset($_SESSION['username'])) {
 header( 'Location: login.php' );
 }

 require_once('config.fc.php');

 $query = ORM::for_table('add_table')->where('application','mailchimp')->find_one();

 if (!($query)) {
 // Create Table(s)
 $query = ORM::for_table('add_table')->create(); $query->application = 'mailchimp'; $query->save();
 $query = ORM::for_table('add_table')->create(); $query->application = 'campaign'; $query->save();
 $query = ORM::for_table('add_table')->create(); $query->application = 'aweber'; $query->save();
 }

 if ($_SERVER['SERVER_NAME']=='ncrafts.net') {
 $myrows = ORM::for_table('builder')->limit(20)->find_many();
 $mysub = ORM::for_table('submissions')->order_by_desc('id')->limit(20)->find_many();
 $mysubr = ORM::for_table('submissions')->where('seen','1')->limit(20)->find_many();
 } else {
 $myrows = ORM::for_table('builder')->find_many();
 $mysub = ORM::for_table('submissions')->order_by_desc('id')->find_many();
 $mysubr = ORM::for_table('submissions')->where('seen','1')->find_many();
 }

 ?>

 <?php
 $saw['today'] = 0;
 $saw['month'] = 0;
 foreach ($mysub as $key => $row) {
 $dt = date_parse($row['added']);
 $date = date_parse(date('d M Y (H:m)'));

 if ($dt['month']==$date['month'] && $dt['day']==$date['day'] && $dt['year']==$date['year']) {
 $saw['today']++;
 }
 if ($dt['month']==$date['month'] && $dt['year']==$date['year']) {
 $saw['month']++;
 }
 }
 ?>

 <?php foreach ($mysub as $key=>$row) {
 $mess[$key] = '';
 $std  = "style='padding: 4px 8px; margin: 0; vertical-align: top; width: 30%; display: inline-block'";
 $std2 = "style='padding: 4px 8px; margin: 0; vertical-align: top; width: 60%; display: inline-block'";
 $new = json_decode($row['content'],1);
 $att = 1;

 foreach ($new as $value)
 {
 if ( !(empty($value['type'])) && !($value['type']=='captcha') && !($value['label']=='files') && !($value['type']=='hidden') && !($value['label']=='divider') ) {
 if ( ($value['type']=='radio' || $value['type']=='check' || $value['type']=='matrix' || $value['type']=='stars' || $value['type']=='smiley') && (empty($value['value'])) ) {
 $mess[$key] .= "";
 } else {
 $mess[$key] .= "<li><span $std><strong>$value[label] </strong></span><span $std2>$value[value]</span></li>";
 }
 }
 else if ($value['label']=='files') {
 $mess[$key] .= "<li><span $std><strong>Attachment($att) </strong></span><a href='$value[value]' target='_blank' $std2>$value[value]</a></li>";
 $att ++;
 }
 else if ($value['label']=='divider') {
 $mess[$key] .= "<hr>$value[value]<hr>";
 $att ++;
 }
 else if ($value['type']=='hidden' && $value['label']=='location') {
 $mess[$key] .= "<div class='location_show'>$value[value]</div>";
 $att ++;
 }
 }

 $message[$key] =
 '<ul>
 '.$mess[$key].'
 </ul>';
 $row_id = $row['form_id'];
 $mysub2 = ORM::for_table('builder')->find_one($row_id);
 ?>

 */

Template.main.helpers({
  'forms': [
    {
    id: 1,
    name: 'test',
    description: 'test form',
    views: 1,
    submits: 0,
    added: '2015-12-14'
    },
    {
      id: 2,
      name: 'test 2',
      description: 'test form',
      views: 1,
      submits: 0,
      added: '2015-12-14'
    }
  ],
  'unread': //php echo sizeof($mysub)-sizeof($mysubr);
      1,
  'total': // php echo sizeof($mysub);
      2
});

Template.main.events({

});