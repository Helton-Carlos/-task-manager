# Task Manager

Um projeto completo com **frontend** e **backend**, desenvolvido para gerenciar tarefas de forma simples, rápida e moderna.

## 🚀 Tecnologias Utilizadas

### **Frontend (Web App)**

* **Nuxt 4** – Framework moderno baseado em Vue para SSR/SSG
* **TypeScript** – Tipagem estática para código mais seguro
* **TailwindCSS** – Estilização rápida e responsiva
* **Bibliotecas adicionais** – Ícones, componentes e utilitários diversos

### **Backend (API)**

* **Node.js** – Ambiente de execução JavaScript
* **TypeScript** – Melhor organização e manutenção
* **SQLite** – Banco de dados leve, simples e rápido
* **Bibliotecas adicionais** – Express, JWT, bcrypt, etc.

---

## 📂 Estrutura do Projeto

### **Frontend**

```bash
/frontend
  ├── app
  │  └── app.vue
  │      ├── assets
  │      │   └── css
  │      ├── components
  │      ├── composables
  │      ├── layouts
  │      ├── middleware
  │      ├── pages
  │      ├── plugin
  │      ├── public
  ├── .gitignore
  ├── README.md
  ├── eslint.config.mjs
  ├── nuxt.config.ts
  ├── package.json
  └── package-lock.json
```

### **Backend**

```bash
/backend
  ├── src
  │   ├── controllers
  │   ├── db
  │   ├── routes
  │   ├── types
  │   └── server.ts
  ├── package.json
  └── package-lock.json
```

---

## 📌 Funcionalidades

* Cadastro e login de usuários
* Criação, edição e exclusão de tarefas
* Marcar tarefas como concluídas
* Interface moderna, rápida e responsiva
* Banco de dados local (SQLite)
* API segura com autenticação JWT

---

## 🛠 Como executar o projeto

### **1. Clonar o repositório**

```bash
git clone https://github.com/Helton-Carlos/task-manager.git
cd task-manager
```

### **2. Instalar dependências**

#### Backend:

```bash
cd backend
npm install
```

#### Frontend:

```bash
cd ../frontend
npm install
```

### **3. Rodar o Backend**

```bash
npm run dev
```

### **4. Rodar o Frontend**

```bash
npm run dev
```
---

## 👤 Autor

**Helton Brito**

Projeto criado com foco em estudos, boas práticas e arquitetura simples, porém escalável.
