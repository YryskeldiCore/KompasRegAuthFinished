<?php
    require "db.php";

    $_POST = json_decode(file_get_contents("php://input"), true);

    $data = $_POST;

    $usercodes = R::getAll('SELECT *, uc.code FROM users u
            JOIN usercode uc ON u.id = uc.users_id
            WHERE login = :login' ,
            [':login' => $data['getlogin']]
            );

    if($usercodes){
        echo json_encode($usercodes);
    } else {
        echo json_encode('К сожалению кодов у вас нет!');
    }
        
    // $beanscode =  R::convertToBeans('users', $usercodes);

    // echo 'Ваши коды:<br>';
    // foreach ($beanscode as $code){
    //     echo $code->code;
    // }
    
