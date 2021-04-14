<?php
    require "db.php";

    $_POST = json_decode(file_get_contents("php://input"), true);

    $data = $_POST;

    $file = $_FILES;

// $error = array();
// if($file['file']['size'] > 2*1024*1024){
//     $error[] = 'Вы не можете загрузить файл больше 2мб';
//     exit('Вы не можете загрузить файл больше 2мб');
// } else {
//     echo 'Имя файла: '.$file['file']['name'] . '<br>';
//     echo 'MIME тип файла: '.$file['file']['type'] . '<br>';
//     echo 'Временный файл в котором сохранен загруженный файл: '.$file['file']['tmp_name'] . '<br>';
//     echo 'Размер файла в байтах: '.$file['file']['size'] . '<br>';
// }

// if(move_uploaded_file($file['file']['tmp_name'], 'upload/' . $file['file']['name'])){
//     echo 'Файл загружен успешно!';
// } else {
//     echo 'Файл не загружен';
// }

// if($data['password'] != $data['password_2']){
//     $error[] = 'Повторно введенный пароль не совпадает!';
//     echo 'Повторно введенный пароль не совпадает!';
// }

    
    $user = R::dispense('users'); 
    $user->login = $data['login'];
    $user->email = $data['email'];
    $user->password = password_hash($data['password'], PASSWORD_DEFAULT);
    $user->registered = date('Y-m-d H:i:s');
    $strDateOfBirth = $_POST['year'].'-'.$_POST['month'].'-'.$_POST['day'];
    $dateTime = strtotime($strDateOfBirth);
    $user->dateOfBirth = date('Y-m-d', $dateTime);
    $user->gender = $data['gender'];
    $user->file = 'upload/'.$file['file']['name'];

    $userdata = R::dispense('userdata');
    $userdata->country = $data['country'];
    $userdata->age = $data['age'];
    $user->ownUserdataList[] = $userdata;

    $usercode = R:: dispense('usercode');
    $usercode->code = $data['code'];
    $usercode->registeredTime = date('Y-m-d H:i:s');
    $user->ownUsercodeList[] = $usercode;

    if(R::find('users', 'login LIKE ? ', [$data['login']]) && R::find('usercode', 'code LIKE ?', [$data['code']])){
        // $user = R::load('users', $user->id);
        $user = R:: findOne('users', 'login LIKE ? ', [$login]);
        $usercode->code = $data['code'];
        $usercode->registeredTime = date('Y-m-d H:i:s');
        $user->ownUsercodeList[] = $usercode; // RELATION
        R::store($user);
        echo json_encode('Ваш код успешно зарегистрирован!');
    }
    
    if(R::find('usercode', 'code LIKE ?', [$data['code']])){
        echo json_encode('Пользователь с таким кодом существует');
    } else {
        R::store($user);
    }

    // echo $user->id;
    
    // R::wipe('users');
    // R::nuke();

    if($user){
        echo json_encode('Вы успешно зарегались!');
    } else {
        echo json_encode('Такой пользователь существует');
    }
