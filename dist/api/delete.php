<?php
    require 'db.php';

    if(isset($_SESSION['logged_user'])){
        $userId = $_SESSION['logged_user']->id;
        $foundUser = R::findOne('users', 'id = ?', array($userId));
        R::trash($foundUser);
        unset($_SESSION['logged_user']);
        echo '<div style="color: greenyellow;">Вы успешно удалили акк</div><br>
                <a href="/index.php">Перейти на главную страницу))</a>';
    }




