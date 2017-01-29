<?php
    $teamname = $_POST['teamname'];
    $firstname = $_POST['firstname'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address1 = $_POST['address1'];
    $address2 = $_POST['address2'];
    $town = $_POST['town'];
    $postcode = $_POST['postcode'];

    $p1name = $_POST['p1name'];
    $p1phone = $_POST['p1phone'];
    $p2name = $_POST['p2name'];
    $p2phone = $_POST['p2phone'];
    $p3name = $_POST['p3name'];
    $p3phone = $_POST['p3phone'];
    $p4name = $_POST['p4name'];
    $p4phone = $_POST['p4phone'];
    $p5name = $_POST['p5name'];
    $p5phone = $_POST['p5phone'];
    $sub1name = $_POST['p6name'];
    $sub1phone = $_POST['p6phone'];
    $sub2name = $_POST['p7name'];
    $sub2phone = $_POST['p7phone'];

    $from = 'From: indoorfootballleague.co.uk';
    $to = 'indoorfootballleagueuk@gmail.com';
    $subject = 'New Team Registration';

    $body = "Team Name: $teamname

Team Manager Details
First Name: $firstname
Last Name: $surname
Email: $email
Mobile No.: $phone
Address Line 1: $address1
Address Line 2: $address2
Town/City: $town
Postcode: $postcode

Player Details
Player 1 Name: $p1name
Player 1 Mobile No.: $p1phone

Player 2 Name: $p2name
Player 2 Mobile No.: $p2phone

Player 3 Name: $p3name
Player 3 Mobile No.: $p3phone

Player 4 Name: $p4name
Player 4 Mobile No.: $p4phone

Player 5 Name: $p5name
Player 5 Mobile No.: $p5phone

Player 6 Name: $sub1name
Player 6 Mobile No.: $sub1phone

Player 7 Name: $sub2name
Player 7 Mobile No.: $sub2phone";
?>

<?php
if ($_POST['submit']) {
    if (mail ($to, $subject, $body, $from)) {
        header("Location: http://indoorfootballleague.co.uk/success.html");
    } else {
        echo '<p>Oops! An error occurred. Please go back and try again.</p>';
    }
}
?>
