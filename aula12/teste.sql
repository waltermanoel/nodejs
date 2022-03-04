CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Lucas",
    "email@teste50.com",
    17
);

SELECT * FROM usuarios WHERE idade = 17;
                                   >
                                   <


DELETE FROM usuarios WHERE nome = "Lucas";

UPDATE usuarios SET nome = "Pedro Ferarie" WHERE nome = "Pedro Soares";
        