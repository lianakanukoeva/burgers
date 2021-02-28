<?
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $street = $_POST['street'];
    $house = $_POST['house'];
    $housing = $_POST['housing'];
    $apartment = $_POST['apartment'];
    $floor = $_POST['floor'];
    $comments = $_POST['comments'];
    $pay = $_POST['pay'];

    $call = $_POST['n-call'];
    if (isset($call))
    {
        $call = 'не перезванивать';
    }
    else
    {
        $call = 'можно перезвонить';
    }

    $headers = "From: Администратор сайта <index.html>\r\n".
                "MIME-Version: 1.0" . "\r\n" .
                "Content-type: text/html; charset=UTF-8" . "\r\n";

    $result='
    <html>
        <head>
            <title>Заказ</title>
        </head>
        <body>
            <h2>Заказ</h2>
            <ul>
                <li>Имя:' . $name . '</li>
                <li>Телефон: ' . $phone . '</li>
                <li>Способ оплаты: ' . $pay . '</li>
                <li>Комментарий к заказу: ' . $comments . '</li>
                <li>Нужно ли перезванивать: ' . $call . '</li>
            </ul>
        </body>
    </html>';

    $mail = mail('kanukoeva.liana@yandex.ru', 'проверка', $result, $headers);

    $answer=array();

    if($mail)
    {
        $answer['status']="Ok";
    }
    else
    {
        $answer['status']="bad";
    }

?>