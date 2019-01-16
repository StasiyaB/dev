<?php
function hashPassword($password){

    $salt = '$2y$12$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

    return crypt($password, $salt);
}

function verifyPassword($password, $hashedPassword){
    var_dump(crypt($password, $hashedPassword));
		return crypt($password, $hashedPassword) == $hashedPassword;
}

?>
