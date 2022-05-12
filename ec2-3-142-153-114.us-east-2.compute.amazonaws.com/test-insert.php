<?php
    require("assets/config/dbconnection.php");
    include("handle-account.php");
    session_start();
    $conn = pdo_connect_mysql();
    
    $accInfo = new Account($conn);
    
    //set variables for testing
    // NOTE: INT columns CANNOT be left blank or NULL, but VARCHAR columns can. Refer to PhpMyAdmin to check the types of columns
    // $userID = 0;

     $firstName = "Tester";
     $lastName = "Testing";
     $email = "testing6@testing.com";
     $password = "#InsertTest1";

     $billingAddress = "addy";
     $billingCity = "addy";
     $billingState = "addy";
     $billingZipcode = "77777";

     $shippingAddress = "addy22";
     $shippingCity = "addy22";
     $shippingState = "addy22";
     $shippingZipcode = "22222";

     $comments = "deeznuts";

     $paymentCardNo = "1234567890123456";
     $paymentCardExpMM = "06";
     $paymentCardExpYY = "25";
     $paymentCardCVV = "111";

    

    // INSERT statement template (with every column)
    // $sql = "INSERT INTO `USER_TABLE` (`user_ID`, `user_FirstName`, `user_LastName`, `user_Email`, `user_Password`, `user_BillingAddress`, `user_BillingCity`, `user_BillingState`, `user_BillingZipcode`, `user_ShippingAddress`, `user_ShippingCity`, `user_ShippingState`, `user_ShippingZipcode`, `user_Comments`, `user_PaymentCardNo`, `user_PaymentCardholderName`, `user_PaymentCardExpMM`, `user_PaymentCardExpYY`, `user_PaymentCardCVV`) VALUES (0, '$firstName', '$lastName', '$email', '$password', '$billingAddress', '$billingCity', '$billingState', '$billingZipcode', '$shippingAddress', '$shippingCity', '$shippingState', '$shippingZipcode', '$comments', '$paymentCardNo', '$paymentCardExpMM', '$paymentCardExpYY', '$paymentCardCVV')";

    // $password = password_hash($password, PASSWORD_BCRYPT, array("cost" => 12));

    // INSERT statement template (only create-account details)
//     $sql = "INSERT INTO `USER_TABLE` (`user_ID`, `user_FirstName`, `user_LastName`, `user_Email`, `user_Password`, `user_BillingAddress`, `user_BillingCity`, `user_BillingState`, `user_BillingZipcode`, `user_ShippingAddress`, `user_ShippingCity`, `user_ShippingState`, `user_ShippingZipcode`, `user_Comments`, `user_PaymentCardNo`, `user_PaymentCardholderName`, `user_PaymentCardExpMM`, `user_PaymentCardExpYY`, `user_PaymentCardCVV`) VALUES (0, '$firstName', '$lastName', '$email', '$password', '$billingAddress', '$billingCity', '$billingState', '$billingZipcode', '', '', '', '', '', '', '', '', '', '')";
     
     // using Register function from handle-account.php
//     $accInfo->Register(trim($firstName), trim($lastName), trim($email), trim($password), trim($billingAddress), trim($billingCity), trim($billingState), trim($billingZipcode), trim($shippingAddress), trim($shippingCity), trim($shippingState), trim($shippingZipcode);
     
     try {
         if ($accInfo->Register(trim($firstName), trim($lastName), trim($email), trim($password), trim($billingAddress), trim($billingCity), trim($billingState), trim($billingZipcode), trim($shippingAddress), trim($shippingCity), trim($shippingState), trim($shippingZipcode)))
         {
             echo "user inserted successfully";
         }
         else
             echo "Unable to insert user";
     } 
     catch (PDOException $e){
         $error = "Error : " . $e->getMessage();
         // $error = "Error creating account. Please try again.";
         echo '<script type="text/javascript">alert("'.$error.'");</script>';
     }

    //get row count
//    $sqlrowcount = "SELECT `order_ID` FROM `ORDER_TABLE`";
//    $query = $conn->prepare($sqlrowcount);
//    $query->execute();
//    $rows = $query->rowCount();
//    $rows++;
//
//    //set variables for testing order insert
//    $orderID = $rows;
//    $userID = 1167;
//    $sessionID = session_id();
//    $orderStatus = "processing";
//    $orderSubtotal = 109.92;
//    $orderDiscount = 0;
//    $orderTax = 0.0825;
//    $orderShippingPrice = 5;
//    $orderTotal = 124.08;
//    $orderDate = date("Y-m-d");



    // INSERT statement template (place an order)
//     $sql = "INSERT INTO `ORDER_TABLE` (`order_ID`, `user_ID`, `session_ID`, `order_status`, `order_SubTotal`, `order_Discount`, `order_Tax`, `order_ShippingPrice`, `order_Total`, `order_Date`) VALUES ('$orderID', '$userID', '$sessionID', '$orderStatus', '$orderSubtotal', '$orderDiscount', '$orderTax', '$orderShippingPrice', '$orderTotal', '$orderDate')";

//    $sql = "INSERT INTO `ORDER_TABLE` (`order_ID`, `user_ID`, `session_ID`, `order_status`, `order_SubTotal`, `order_Discount`, `order_Tax`, `order_ShippingPrice`, `order_Total`, `order_Date`) VALUES ('$orderID', '$userID', '', '$orderStatus', '$orderSubtotal', '$orderDiscount', '$orderTax', '$orderShippingPrice', '$orderTotal', '$orderDate')";

    // // prepare database object
    // $conn->prepare($sql);

    // // execute insert query
    // if ($conn->exec($sql))
    // {
    //     echo "Order placed successfully";
    // }
    // else
    //     echo "Unable to place order";

//     try {
//         if ($conn->exec($sql))
//         {
//             echo "user inserted successfully";
//         }
//         else
//             echo "Unable to insert user";
//     } 
//     catch (PDOException $e){
//         $error = "Error : " . $e->getMessage();
//         // $error = "Error creating account. Please try again.";
//         echo '<script type="text/javascript">alert("'.$error.'");</script>';
//     }


?>