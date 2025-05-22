# 📸 InstaFeed Clone

Este é um projeto desenvolvido como atividade prática utilizando **React**, **Next.js** e **Tailwind CSS**, com o objetivo de simular um feed de postagens similar ao do Instagram.

## ✅ Funcionalidades

- 🔄 **Renderização dinâmica de postagens**: Um array de objetos representa as postagens com informações como nome de usuário, avatar, imagem, número de curtidas e descrição.
- ❤️ **Botão de curtida interativo**: O usuário pode curtir e descurtir uma postagem. O ícone muda visualmente (de contorno para preenchido em vermelho), e o número de curtidas é atualizado.
- 👤 **Avatar com contorno em destaque**: Cada postagem exibe a foto de perfil do usuário com estilo de stories (borda circular).
- ➕ **Botão “Follow”**: Simulação do botão de seguir ao lado do nome do usuário.
- ⋯ **Menu de opções (três pontos)**: Ícone para representar ações extras, como no Instagram.
- 💬 **Ícones de comentar, compartilhar e salvar**: Ícones interativos simulando o comportamento do app original.
- 🌐 **Design responsivo e moderno** com Tailwind CSS.

## 🛠 Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/) para os ícones

## 🚀 Como rodar o projeto

### 🪟 Windows (PowerShell)

```powershell
# Clone o repositório
git clone https://github.com/seu-usuario/insta-feed.git

# Acesse a pasta do projeto
cd insta-feed

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Depois, acesse no navegador: 
http://localhost:3000

## 🍎 macOS / 🐧 Linux (Terminal)

# Clone o repositório
git clone https://github.com/seu-usuario/insta-feed.git

# Acesse a pasta do projeto
cd insta-feed

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Depois, acesse no navegador: 
http://localhost:3000

## 📂 Estrutura do Projeto

insta feed/
├── .next
├── node_modules
├── public
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js          # Página principal do feed
│   ├── components/
│   │   └── PostItem.js      # Componente de uma postagem
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
└── vite.config.ts