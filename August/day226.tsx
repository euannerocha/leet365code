<?php
// Configuração do banco
$host = "localhost";
$dbname = "meu_banco";
$username = "root";
$password = "";

try {
    // Conexão com o banco
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL para criar tabela
    $sql = "CREATE TABLE usuarios (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    // Executa o comando
    $conn->exec($sql);
    echo "Tabela criada com sucesso!";
} catch(PDOException $e) {
    echo "Erro: " . $e->getMessage();
}

// Fecha a conexão
$conn = null;
?>