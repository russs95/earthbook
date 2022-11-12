<?php
include 'ch19_include.php';
//determine if they need to see the form or not
if (!$_POST) {
     //they need to see the form, so create form block
     $display_block = <<<END_OF_BLOCK
     <form method="POST" action="$_SERVER[PHP_SELF]">

     <!--<p><label for="email">Your E-Mail Address:</label><br/>-->
    <div class="this-one"><input type="email" id="email" name="email"  placeholder="Want more? Enter email.."
           size="40" maxlength="150"  /></p></div>

    <fieldset>
    <input type="radio" id="action_sub" name="action"
           value="sub" checked />
    <label for="action_sub">subscribe</label><br/>
    <input type="radio" id="action_unsub" name="action"
           value="unsub" />
    <label for="action_unsub">unsubscribe</label>
    </fieldset>
    <button type="submit" name="submit"  value="submit" class="e-reg">Register</button>
    </form>
  END_OF_BLOCK;
  } else if (($_POST) && ($_POST['action'] == "sub")) {
      //trying to subscribe; validate email address
      if ($_POST['email'] == "") {
          header("Location: manage.php");
          exit;
      } else {
          //connect to database
          doDB();

          //check that email is in list
          emailChecker($_POST['email']);

          //get number of results and do action
          if (mysqli_num_rows($check_res) < 1) {
              //free result
              mysqli_free_result($check_res);

              //add record
              $add_sql = "INSERT INTO subscribers (email)
                         VALUES('".$safe_email."')";
              $add_res = mysqli_query($mysqli, $add_sql)
                         or die(mysqli_error($mysqli));
              $display_block = "<h5>Thanks for signing up!</h5>";

              //close connection to MySQL
              mysqli_close($mysqli);
          } else {
              //print failure message
              $display_block = "<h5>You're already subscribed!</h5>";
          }
      }
  } else if (($_POST) && ($_POST['action'] == "unsub")) {
      //trying to unsubscribe; validate email address
      if ($_POST['email'] == "") {
          header("Location: manage.php");
          exit;
      } else {
          //connect to database
          doDB();

          //check that email is in list
          emailChecker($_POST['email']);

          //get number of results and do action
          if (mysqli_num_rows($check_res) < 1) {
              //free result
              mysqli_free_result($check_res);

              //print failure message
              $display_block = "<p>Couldn't find your address!</p>
              <p>No action was taken.</p>";
          } else {
              //get value of ID from result
              while ($row = mysqli_fetch_array($check_res)) {
                  $id = $row['id'];
              }

              //unsubscribe the address
              $del_sql = "DELETE FROM subscribers
                          WHERE id = ".$id;
              $del_res = mysqli_query($mysqli, $del_sql)
                         or die(mysqli_error($mysqli));
              $display_block = "<p>You're unsubscribed!</p>";
          }
          mysqli_close($mysqli);
      }
  }
  ?>
  <!--<!DOCTYPE html>
  <html>
  <head>
  <title>Subscribe/Unsubscribe to a Mailing List</title>
  </head>
  <body>-->
 
 <?php echo "$display_block"; ?>
 <!--</body>
 </html>-->