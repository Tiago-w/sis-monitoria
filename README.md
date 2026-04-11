# 🎓 SisMonitoria - Gestão e Acesso a Monitorias

> **Sistema descentralizado focado na otimização do fluxo e gestão das monitorias da UFPel.**

---

## 📝 Resumo
O **SisMonitoria** é uma aplicação web nascida da necessidade de contornar a burocracia de integração com sistemas institucionais legados. Através de uma arquitetura 100% descentralizada, o projeto utiliza um sistema inovador de **Tokens** para garantir autonomia a professores e monitores, eliminando a dependência de APIs lentas da reitoria.

## 🚀 Funcionalidades Principais
* **Autenticação Bypass:** Login via Google OAuth para e-mails `@inf.ufpel.edu.br`.
* **Gestão via Tokens:** Professores geram chaves de acesso que configuram automaticamente as regras da monitoria no banco de dados.
* **Status em Tempo Real:** Toggles de disponibilidade que atualizam instantaneamente para os alunos se o monitor está ativo.
* **Frequência Antifraude:** Registro de presença via **QR Code dinâmico**, validando a assiduidade em atendimentos presenciais ou via **Discord**.
* **Barra de Progresso Gamificada:** Visualização clara da carga horária concluída pelo monitor ao longo do semestre.

## 🛠️ Tecnologias Utilizadas
* **Frontend:** React / HTML5 / CSS3 (Design focado em UX/UI com uso estratégico de **padding** e elementos interativos).
* **Backend:** Node.js.
* **Autenticação:** Google OAuth 2.0 / Azure AD.
* **Banco de Dados:** Estrutura baseada em **Single Source of Truth** para integridade de dados.

## 📂 Estrutura do Projeto
```text
├── assets/          # Screenshots e logos do projeto
├── docs/            # Documentação técnica e Proposta de Projeto PDF
├── src/             # Código-fonte (Frontend e Backend)
├── sql/             # Scripts de criação do banco de dados
├── .gitignore       # Proteção de arquivos sensíveis e dependências
└── LICENSE          # Licença MIT
```
## 🛡️ Integridade e Segurança

O sistema foi estruturado para evitar a morosidade institucional.

A segurança é garantida pela **validação de domínios institucionais no back-end**, assegurando que apenas a comunidade da UFPel participe do ecossistema.

---

## 📄 Licença

Este projeto está sob a licença **MIT**.

Consulte o arquivo `LICENSE` para mais detalhes.
