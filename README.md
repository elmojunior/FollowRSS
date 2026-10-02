# 📻 FollowRSS

> **Leitor moderno de feeds RSS e reprodutor de podcasts em arquivo único, leve, seguro e com suporte a PWA e escuta offline.**

[![Licença: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)
[![Zero Dependências](https://img.shields.io/badge/Dependencies-0-success.svg)](#-tecnologias)
[![PWA Ready](https://img.shields.io/badge/PWA-Ready-orange.svg)](#-suporte-a-pwa-e-uso-no-celular)
[![Vibecoding](https://img.shields.io/badge/Created%20with-Vibecoding%20%26%20Google%20Antigravity-8A2BE2.svg)](#-desenvolvido-com-vibecoding--google-antigravity)

Acesse online e instale no seu dispositivo:  
👉 **[https://elmojunior.github.io/FollowRSS/followrss.html](https://elmojunior.github.io/FollowRSS/followrss.html)**

---

## 📖 Sobre o Projeto

O **FollowRSS** nasceu com uma premissa clara: **privacidade, controle total do usuário e simplicidade**.

Em um cenário onde a maioria dos leitores de feed e agregadores de podcasts exige cadastros em nuvem, servidores proprietários, bancos de dados remotos e assinaturas pagas, o FollowRSS opera de ponta a ponta **diretamente no navegador do usuário**, utilizando as APIs nativas da web moderna (IndexedDB, Service Worker, DOMParser e Cache API).

Não há backend em Node.js, Python ou Go. Não há bibliotecas de terceiros como jQuery ou Bootstrap. Todo o sistema reside em **um único arquivo HTML autocontido**, que pode ser executado dando um duplo clique em qualquer computador ou instalado como aplicativo móvel (PWA) no smartphone.

---

## ⚡ Desenvolvido com Vibecoding & Google Antigravity

Este projeto foi construído e refinado de ponta a ponta utilizando a técnica de **Vibecoding** em parceria com o **Google Antigravity** (ambiente avançado de codificação agêntica da Google DeepMind).

### O que é essa abordagem?
Em vez da programação tradicional onde cada linha é escrita e ajustada manualmente em múltiplos arquivos de framework, o desenvolvimento por **Vibecoding** foca na direção criativa, na experiência do usuário (UX), nas regras de negócio e na arquitetura de alto nível:
- As decisões de design, fluxos de uso, heurísticas de segurança e melhorias de interface foram transmitidas e iteradas em linguagem natural.
- O **Google Antigravity** orquestrou a engenharia do software: estruturou o banco IndexedDB reativo, criou o sistema de sanitização contra XSS, projetou o tocador de áudio com persistência por episódio, montou o motor de download binário offline e empacotou a aplicação como um PWA de arquivo único.

---

## ✨ Principais Funcionalidades

### 🎙️ Agregador de Feeds RSS & Atom
- **Parser Robusto Nativo**: Suporte completo a feeds nos formatos **RSS 2.0** e **Atom**.
- **Detecção e Suporte a Podcasts**: Interpreta tags de mídia do iTunes/Apple Podcasts (`<itunes:image>`, `<itunes:duration>`, `<itunes:author>`, `<itunes:summary>`) e enclosures de áudio (`<enclosure type="audio/...">`).
- **Extração Visual Inteligente**: Capas de podcasts em alta definição, miniaturas de canais e imagens incorporadas nas próprias matérias/conteúdos.
- **Exemplos Rápidos**: Canais de exemplo prontos para testar com um único clique (como *Inteligência LTDA* e *Canaltech*).

### 🎧 Reprodutor de Áudio Contínuo
- **Player Global Fixo**: Barra inferior com design minimalista que continua reproduzindo enquanto você navega entre canais, filtros e notícias.
- **Controles Avançados**: Play/Pause, retrocesso de 15 segundos, avanço de 30 segundos, barra de progresso interativa (*scrubber*), controle de volume com atalho de mudo e seletor de velocidade (**0.75x**, **1.0x**, **1.25x**, **1.5x**, **2.0x**).
- **Lembrar de Onde Parou por Episódio**:
  - Lembra com precisão o segundo exato onde você parou de ouvir **cada episódio individualmente**.
  - Exibe um botão destacado no topo para retomar o último podcast tocado.
  - Oferece opção de continuar de onde parou ou recomeçar do início.

### 💾 Armazenamento Offline no IndexedDB
- **Baixar Áudio Diretamente no Navegador**: Botão dedicado de download que busca o arquivo `.mp3` e o salva em binário (`Blob`) dentro do IndexedDB local do navegador.
- **Progresso de Download em Círculo**: Indicador visual circular em tempo real da porcentagem baixada.
- **Escuta Sem Internet**: Reproduz o áudio localmente mesmo se o dispositivo estiver completamente offline ou em modo avião.
- **Gerenciador de Armazenamento**: Indicador de status de download e opção para excluir arquivos offline com liberação imediata de espaço.

### 📑 Organização, Filtros e Status de Leitura
- **Marcadores de Status**:
  - **Novo**: Identifica conteúdos que nunca foram visualizados em listagens.
  - **Em Andamento**: Marca podcasts que começaram a ser ouvidos, indicando o tempo decorrido.
  - **Ouvido / Lido**: Sinaliza episódios terminados ou artigos abertos.
- **Abas de Filtragem Rápida**: Filtre a página inicial por *Todos*, *Podcasts*, *Artigos*, *Novos*, *Em Andamento* e *Concluídos*.
- **Busca em Tempo Real**: Barra de pesquisa instantânea com debounce para pesquisar por título, autor e conteúdo.
- **Paginação Limpa**: Navegação otimizada com 10 itens por página para máxima performance.

### 🔄 Importação e Exportação OPML
- **Backup e Migração Livre**: Exporte toda a sua biblioteca de canais inscritos para o padrão universal **OPML (Outline Processor Markup Language)** com 1 clique.
- **Importação Completa**: Carregue arquivos `.opml` ou `.xml` de outros agregadores (Feedly, Pocket Casts, Inoreader, etc.) e sincronize todos os conteúdos automaticamente.

### 🛡️ Segurança e Privacidade
- **Sanitizador HTML Rigoroso**: Todo o conteúdo vindo de feeds passa por um filtro nativo via `DOMParser` que elimina tags perigosas (`<script>`, `<iframe>`, `<object>`), manipuladores embutidos (`onload`, `onerror`) e esquemas maliciosos de URI (`javascript:`), prevenindo ataques de Cross-Site Scripting (XSS).
- **Sem Rastreamento**: Nenhuma informação de navegação, canais salvos ou histórico de áudio sai do seu navegador. Seus dados pertencem apenas a você.

---

## 📱 Suporte a PWA e Uso no Celular

O FollowRSS foi configurado como um **Progressive Web App (PWA)**:
1. Abra o link do projeto no **Google Chrome** no Android ou Safari no iOS:  
   `https://elmojunior.github.io/FollowRSS/followrss.html`
2. No menu do navegador, toque em **"Instalar aplicativo"** ou **"Adicionar à tela de início"**.
3. O FollowRSS funcionará como um aplicativo nativo em tela cheia, com ícone na gaveta de aplicativos e suporte a cache de ativos offline.

---

## 🛠️ Tecnologias

- **HTML5**: Semântico e estruturado.
- **CSS3 Puro**: Variáveis CSS, layout moderno com Flexbox e CSS Grid, animações fluidas e suporte a temas **Dark Mode** e **Light Mode**.
- **JavaScript Vanilla (ES6+)**:
  - API **IndexedDB** nativa para banco de dados transacional offline.
  - API **Audio** para gerenciamento de mídia e reprodução.
  - API **Service Worker & Cache** para suporte PWA offline.
  - **DOMParser** para leitura de XML/RSS e sanitização estrita de segurança.
- **Zero Dependências**: Sem NPM, sem CDN, sem jQuery, sem React, sem Bootstrap.

---

## 📂 Estrutura do Repositório

```
FollowRSS/
├── followrss.html   # Aplicação principal FollowRSS (Single-File)
├── LICENSE          # Licença GNU General Public License v3.0
├── README.md        # Documentação do projeto
├── manifest.json    # Manifesto de configuração PWA
├── sw.js            # Service Worker de cache e modo offline
└── icon.svg         # Ícone vetorial da aplicação
```

---

## 📄 Licença

Este programa é um software livre distribuído sob os termos da **GNU General Public License versão 3 (GPL-3.0)**, conforme publicada pela *Free Software Foundation*.

Você tem a liberdade de:
- **Executar** o programa para qualquer finalidade.
- **Estudar** como o programa funciona e adaptá-lo às suas necessidades.
- **Redistribuir** cópias do programa para ajudar outras pessoas.
- **Aperfeiçoar** o programa e liberar os seus aperfeiçoamentos para o público, garantindo que toda a comunidade se beneficie dessas melhorias sob a mesma licença.

Consulte o arquivo [`LICENSE`](LICENSE) para obter o texto completo da licença.
