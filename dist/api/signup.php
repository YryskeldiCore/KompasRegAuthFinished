<?php
    require "db.php";

    $data = $_POST;

    echo var_dump($data);

    $error = array();
    if(R::count('users', 'login = ?', array($data['login'])) > 0){
        $error[] = 'Пользователь с таким логином существует';
        echo 'Пользователь с таким логином существует';
    }

    if(R::count('users', 'email = ?', array($data['email'])) > 0){
        $error[] = 'Ползователь с таким email существует';
        echo 'Ползователь с таким email существует';
    }

    if($data['password'] != $data['password_2']){
        $error[] = 'Повторно введенный пароль не совпадает!';
        echo 'Повторно введенный пароль не совпадает!';
    }
    
    echo var_dump($error);

    if(empty($error)){
        // all fine registering the user
        $user = R::dispense('users');
        $user->login = $data['login'];
        $user->email = $data['email'];
        $user->password = password_hash($data['password'], PASSWORD_DEFAULT);
        $user->registered = date('Y-m-d H:i:s');
        $strDateOfBirth = $_POST['year'].'-'.$_POST['month'].'-'.$_POST['day'];
        $dateTime = strtotime($strDateOfBirth);
        $user->dateOfBirth = date('Y-m-d', $dateTime);
        $user->gender = $data['gender'];
        R::store($user);
        // R::wipe('users');
        // $_SESSION['logged_user'] = $user;
        echo 'Вы успешно зарегистрировались';
    }


