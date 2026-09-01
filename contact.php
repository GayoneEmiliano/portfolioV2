<?php
declare(strict_types=1);

header('X-Content-Type-Options: nosniff');

$isAjax = (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest')
    || (isset($_SERVER['HTTP_ACCEPT']) && strpos($_SERVER['HTTP_ACCEPT'], 'application/json') !== false);

function respond(bool $ok, string $message, bool $isAjax): void
{
    if ($isAjax) {
        header('Content-Type: application/json; charset=utf-8');
        http_response_code($ok ? 200 : 400);
        echo json_encode(['ok' => $ok, 'message' => $message]);
        exit;
    }
    header('Location: index.html?' . http_build_query(['sent' => $ok ? '1' : '0']) . '#contact');
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed.', $isAjax);
}

// Honeypot: los bots suelen completar cualquier campo que encuentren.
if (!empty($_POST['website'])) {
    respond(true, 'Mensaje enviado. ¡Gracias!', $isAjax);
}

$name = trim((string) ($_POST['name'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    respond(false, 'Completá todos los campos.', $isAjax);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'El email no es válido.', $isAjax);
}
if (strlen($name) > 150 || strlen($message) > 5000) {
    respond(false, 'El mensaje es demasiado largo.', $isAjax);
}

$configFile = __DIR__ . '/mail-config.php';
if (!is_file($configFile)) {
    error_log('contact.php: falta mail-config.php (ver mail-config.example.php)');
    respond(false, 'El formulario todavía no está configurado.', $isAjax);
}
/** @var array<string,mixed> $config */
$config = require $configFile;

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp_user'];
    $mail->Password = (string) $config['smtp_pass'];
    $mail->SMTPSecure = ($config['smtp_secure'] ?? 'ssl') === 'tls'
        ? PHPMailer::ENCRYPTION_STARTTLS
        : PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = (int) $config['smtp_port'];
    $mail->CharSet = 'UTF-8';

    $mail->setFrom((string) $config['smtp_user'], (string) ($config['mail_from_name'] ?? 'Portfolio'));
    $mail->addAddress((string) $config['mail_to']);
    $mail->addReplyTo($email, $name);

    $mail->Subject = 'Nuevo contacto desde emilianonewen.com — ' . $name;
    $mail->Body = "Nombre: {$name}\nEmail: {$email}\n\nMensaje:\n{$message}";

    $mail->send();
    respond(true, 'Mensaje enviado. ¡Gracias!', $isAjax);
} catch (PHPMailerException $e) {
    error_log('contact.php mail error: ' . $mail->ErrorInfo);
    respond(false, 'No se pudo enviar el mensaje. Probá de nuevo más tarde.', $isAjax);
}
