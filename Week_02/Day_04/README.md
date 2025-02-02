# 📚 **Semana 02 - Aula 04: EAS Build - Configuração, Build e Publicação**

## 🎯 **Objetivo da Aula**  
Aprender a utilizar o EAS Build para gerar builds nativas dos aplicativos Expo e entender o processo de publicação nas lojas (Google Play e App Store).

---

## 📝 **Conteúdo**

### **1. O que é EAS Build?**  
EAS (Expo Application Services) Build é uma plataforma que permite criar builds nativas para Android e iOS sem a necessidade de configurar um ambiente nativo local (como Xcode ou Android Studio).  
   
#### **Principais Vantagens:**  
- 📦 **Build Remoto:** Gera builds na nuvem sem instalar ferramentas nativas locais.  
- 🔄 **Integração Contínua:** Facilita a automação do ciclo de release.  
- 🚀 **Suporte Multiplataforma:** Cria builds para Android e iOS a partir do mesmo código base.

---

### **2. Configurando o EAS Build no Projeto**

#### **Passo 1 - Instalar a CLI do EAS**
```bash
npm install -g eas-cli
```

#### **Passo 2 - Fazer Login na Conta Expo**
```bash
eas login
```
> Será solicitado que você insira suas credenciais do Expo.

#### **Passo 3 - Inicializar o EAS no Projeto**
Dentro da pasta do projeto, execute:
```bash
eas init
```
> Esse comando cria um arquivo `eas.json` com configurações básicas para builds.

---

### **3. Configuração do Arquivo `eas.json`**

Um exemplo básico de `eas.json` pode ser:

```json
{
  "build": {
    "development": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": true
      }
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": false
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      },
      "ios": {
        "simulator": false
      }
    }
  }
}
```
> **Observação:** Ajuste as configurações conforme as necessidades do seu projeto.

---

### **4. Gerando Builds para Diferentes Plataformas**

#### **Build para Android**
- **APK (para testes internos) ou App Bundle (para publicação na Play Store):**
```bash
eas build --platform android --profile production
```

#### **Build para iOS**
- **Build para dispositivos reais (geralmente para publicação na App Store):**
```bash
eas build --platform ios --profile production
```
> **Dica:** Para iOS, você pode precisar de uma conta Apple Developer e configurar certificados e perfis de provisionamento, conforme solicitado pela CLI.

---

### **5. Publicação de Aplicativos**

#### **Google Play Store**
1. Gere o **Android App Bundle** usando o comando acima.
2. Acesse o [Google Play Console](https://play.google.com/console) e crie uma nova versão de aplicativo.
3. Faça upload do arquivo gerado e siga os passos para revisão e publicação.

#### **Apple App Store**
1. Gere um build para iOS destinado a dispositivos reais.
2. Utilize o **Transporter** (ou Xcode) para enviar o build para o App Store Connect.
3. Configure os metadados e envie para a revisão.

> **Nota:** É importante seguir as diretrizes das lojas, preparar screenshots, descrições e cumprir os requisitos de cada plataforma.

---

## 🚀 **Atividade Prática**

1. **Configurar o Projeto para EAS Build:**  
   - Instale o `eas-cli` e inicialize o projeto com `eas init`.
   - Configure o arquivo `eas.json` conforme o exemplo fornecido.

2. **Gerar Builds:**  
   - Execute builds para Android e iOS usando os comandos `eas build --platform android --profile production` e `eas build --platform ios --profile production`.
   - Se possível, teste o APK gerado no seu dispositivo Android ou use o simulador iOS.

3. **Simular Publicação:**  
   - Simule o processo de upload do build para uma loja (você pode usar um ambiente de testes ou realizar o upload em uma conta de desenvolvimento).

---

## ✅ **Desafio Prático**
1. **Customização Avançada:**  
   - Personalize o arquivo `eas.json` adicionando perfis para **desenvolvimento** e **preview**.
   - Compare as diferenças de configuração e explique quando cada perfil deve ser utilizado.

2. **Integração Contínua:**  
   - Investigue como integrar o EAS Build com um serviço de CI/CD (como GitHub Actions) para automatizar os builds a cada push na branch principal.

---
