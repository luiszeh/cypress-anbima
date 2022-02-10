# language: pt

Funcionalidade: Busca

Eu como usuário da Anbima
Quero realizar uma pesquisa
Para encontrar um ativo do tipo Debêntures

Contexto:
  Dado que estou na página inicial

Cenário: Busca por Código B3
  Quando realizo a busca por AALM11, utilizando a opção Debêntures
  Então visualizo o ativo AALM11 no resultado da busca

Cenário: Busca por ISIN
  Quando realizo a busca por BRAALMDBS009, utilizando a opção Debêntures
  Então visualizo o ativo AALM11 no resultado da busca

Cenário: Busca por Emissor
  Quando realizo a busca por AURA ALMAS MINERACAO S.A, utilizando a opção Debêntures
  Então visualizo o ativo AALM11 no resultado da busca

Cenário: Busca por Agente
  Quando realizo a busca por OLIVEIRA TRUST DTVM, utilizando a opção Debêntures
  Então visualizo o ativo AALM11 no resultado da busca

Cenário: Busca por CNPJ
  Quando realizo a busca por 08213823000107, utilizando a opção Debêntures
  Então visualizo o ativo AALM11 no resultado da busca

Cenário: Busca por uma Debênture inexistente
  Quando realizo a busca por uma Debênture INEXISTENTE
  Então não visualizo o ativo AALM11 no resultado da busca

# Given = Dado
# When = Quando
# Then = Então
# aqui são meus cenários de teste para a feature de login