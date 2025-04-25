# Landing Page de Vendas de Site

Está página é destinada a captar clientes que queiram criar um site para a sua empresa.

---

## Visão Geral

Esta landing page apresenta os principais diferenciais de ter um site comigo e direciona visitantes a preencher um formulário de contato ou ir diretamente para o whatsapp, com foco em conversão.

Demo:  
https://alephsramos.com.br

---

## Estrutura do Projeto

```
public/
└── icon.ico            # Icone do site

src/
├── components/         # Components
│   ├── Buttons/     
│   ├── Cards/   
│   ├── Faixas/
│   ├── Footer/
│   ├── Header/
│   ├── OpenText/
│   └── WhtasApp/
│
├── pages/               # Páginas
│   ├── Home/            # Página inicial da Landing Page
│   ├───── Beneficios.jsx 
│   ├───── Depoimentos.jsx
│   ├───── FAQ.jsx
│   ├───── Formulario.jsx
│   ├───── Home.jsx
│   ├───── Inicial.jsx
│   ├───── Pacotes.jsx
│   ├───── Paraquem.jsx
│   ├───── Parceria.jsx
│   ├───── Portfolio.jsx               
│   └───── Vantagens.jsx      
│
├── Styles/           # Estilos globais
│   ├── global.css
│   └── reset.css
│
├── App.jsx           # Aplicativo que roda o site
├── firebaseConfig.js # Configuração do banco de dados
└── main.jsx

index.html            # Ponto de entrada
```

---

## Como Executar

1. **Clone**  
   ```bash
   git clone https://github.com/alephsramos-dev/lp-vendas-de-site.git
   ```
2. **Abra**  
   - Dê duplo clique em `src/index.html`  
   - Ou, dentro de `src/`, execute:
     ```bash
     python3 -m http.server 8000
     ```
3. **Acesse**  
   Navegador → `http://localhost:8000`

---

## Autor

Aleph Silva Ramos  
📧 alephsramosdev@gmail.com  
💻 https://github.com/alephsramos-dev  
