<?php
/**
 * Copiá este archivo como mail-config.php DIRECTAMENTE EN EL SERVIDOR
 * (por File Manager de hPanel, no por git) y completá los datos reales.
 * mail-config.php está en .gitignore a propósito: nunca debe subirse
 * al repo público, porque contendría la contraseña de la casilla.
 */
return [
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    // 'ssl' para el puerto 465, 'tls' para el 587
    'smtp_secure' => 'ssl',
    'smtp_user' => 'contacto@emilianonewen.com',
    'smtp_pass' => 'TU_CONTRASEÑA_AQUI',
    'mail_to' => 'contacto@emilianonewen.com',
    'mail_from_name' => 'Formulario emilianonewen.com',
];
