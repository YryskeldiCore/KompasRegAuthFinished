<?php
    require "libs/rb-mysql.php";

    R::setup( 'mysql:host=localhost:3307;dbname=auth_schema',
    'root', '1234' );

session_start();