CREATE TABLE centro_atendimento(
  id int primary key,
  nome text not null,
  estado varchar(2) not null,
  cidade varchar(20) not null,
  cep int not null
);

CREATE TABLE atendente(
  crm varchar(19) primary key,
  nome text not null
);

CREATE TABLE usuario(
  cpf bigint primary key,
  nome text not null,
  cep int,
  medico_atendente varchar(19),
  CONSTRAINT fk_usuario_atendente FOREIGN KEY (medico_atendente) REFERENCES atendente (crm)
);

CREATE TABLE historico(
  id_atendimento int primary key,
  data varchar(8) not null,
  historico_consulta text,
  gravidade text not null,
  paciente bigint,
  CONSTRAINT fk_historico_usuario FOREIGN KEY (paciente) REFERENCES usuario (cpf)
);
