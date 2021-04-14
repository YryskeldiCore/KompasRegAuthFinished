<?php
    require 'db.php';
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
    <?php if(isset($_SESSION['logged_user'])):?>
    <div>Привет мир я появился!</div>
    <p>Symfony — свободный фреймворк, написанный на PHP.

        Symfony предлагает быструю разработку и управление веб-приложениями, позволяет легко решать рутинные задачи веб-программиста. Работает только с PHP 5 и выше. Имеет поддержку множества баз данных (MySQL, PostgreSQL, SQLite или любая другая PDO-совместимая СУБД). Информация о реляционной базе данных в проекте должна быть связана с объектной моделью. Это можно сделать при помощи ORM инструмента. Symfony поставляется с двумя из них: Propel и Doctrine.

        Symfony бесплатен и публикуется под лицензией MIT.

        Проект спонсируется французской компанией SensioLabs[4].</p>
        <a href="/delete.php">Удалить аккаунт</a>
        <a href="/logout.php">Выйди ка!</a>
    <?php else: ?>
       <p style="font-size: 64px;">Придурок че ты сюда зашел! Нельзя! Ну незнаю зарегался хотя бы!))</p>
        <a href="/signup.php">Сюда давай! Регайся!</a>

    <?php endif; ?>
</body>
</html>