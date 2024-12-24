# Autenticação com Google OAuth - Projeto de Véspera de Natal

![googleapis](https://github.com/user-attachments/assets/7e873ba2-b80b-4415-b6d5-4d036797e540)

_Leia isso em outra lingua:_ 🇺🇸 [_English_](../../README.md) ⚪🔵

Este é um projeto simples desenvolvido para implementar autenticação de usuários usando o Google OAuth. Foi criado durante o tempo livre na véspera de Natal, como forma de praticar conceitos de integração com APIs externas e estilização responsiva com SASS.

## Funcionalidades

- Login com conta do Google.
- Exibição de informações do usuário (nome, e-mail e foto de perfil).
- Logout com remoção das informações do usuário armazenadas no navegador.
- Estilização clean e centralizada usando SASS.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Google OAuth**: Autenticação segura com a biblioteca `@react-oauth/google`.
- **SASS**: Estilização com CSS dinâmico e componentes reutilizáveis.

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd <diretorio-do-projeto>
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Abra o navegador e acesse:
   ```
   http://localhost:5173
   ```

## Estrutura do Projeto

```
/
├── src/
│   ├── App.tsx           # Componente principal
│   ├── main.tsx          # Ponto de entrada da aplicação
│   ├── index.scss        # Estilos principais
│   └── assets/           # Imagens e outros recursos
├── package.json          # Configurações do projeto e dependências
└── README.md             # Documentação do projeto
```

## Demonstração

Na página inicial, o usuário pode:

1. Fazer login clicando no botão "Continuar com o Google".
2. Visualizar as informações retornadas pela API do Google (nome, e-mail e foto de perfil).
3. Fazer logout, removendo os dados do navegador e retornando à tela inicial.

## Aprendizados

- Implementação de autenticação usando Google OAuth.
- Manipulação de estados no React para armazenar dados do usuário.
- Uso de `localStorage` para persistência temporária de informações.
- Estilização responsiva e acessível com SASS.

## Reflexão

Este projeto foi uma ótima oportunidade para explorar o Google OAuth e aprimorar habilidades em React e SASS. Além disso, criar algo na véspera de Natal trouxe um toque especial ao aprendizado, tornando o momento ainda mais significativo.

## Licença

Este projeto é de uso livre. Fique à vontade para utilizá-lo como base para seus estudos ou projetos.

---
