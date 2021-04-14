<?php
    require 'db.php';

    $data = $_POST;

    if(isset($data['do_login'])){
        $errors = array();

        $user = R::findOne('users', 'login = ?', array($data['login']));

        if($user){
            if(password_verify($data['pass'], $user->password)){
                $_SESSION['logged_user'] = $user;
//                echo 'Вы авторизованы!'.'<a href="/">Перейдите на главную страницу</a>';
                header('Location: /main.php');
            } else {
                $errors[] = 'Incorrect pass';
            }
        } else {
            $errors[] = 'Пользователя с таким именем не существует';
        }

        if(!empty($errors)){
            echo "<div style='color: red;'>".array_shift($errors)."</div>";
        }

    }
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="/login.php" method="POST">
        <p>
            <p>Login</p>
            <input type="text" name="login" value="<?php echo @$data['login'];?>">
        </p>
        <p>
            <p>Password</p>
            <input type="password" name="pass" value="<?php echo @$data['password'];?>">
        </p>
        <p>
            <button type="submit" name="do_login">Залогинься</button>
        </p>
    </form>
</body>
</html>
