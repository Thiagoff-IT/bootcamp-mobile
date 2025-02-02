# 📚 **Aula 04 - Validação de Dados com Zod**  

## 🎯 **Objetivo da Aula**  
Aprender a utilizar o Zod para validar dados no Expo, garantindo a consistência de formulários e entradas de usuário.

---

## 📝 **Conteúdo**

### **1. O que é Zod?**  
O Zod é uma biblioteca TypeScript-first para validação e parsing de dados. Com uma API declarativa e flexível, permite criar esquemas robustos para validações.

#### 🔑 **Principais Benefícios:**  
- 🚀 **TypeScript-first:** Integração direta com tipagem TypeScript.  
- 🛡️ **Validação Simples:** Mensagens de erro detalhadas.  
- 🔧 **Extensível:** Suporte para composição de esquemas complexos.  

---

### **2. Configurando o Zod no Projeto**

#### **Passo 1 - Instalar a biblioteca**  
```bash
npm install zod
```

---

## 🚀 **Atividade Prática**

### **1. Criar um Formulário Simples com Validação de Dados**

#### **Passo 1 - Criação de Formulário (`form.tsx`)**
```tsx
import { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres."),
  email: z.string().email("Insira um e-mail válido."),
});

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const formData = { name, email };
    const result = schema.safeParse(formData);

    if (!result.success) {
      const errorMessage = result.error.errors[0]?.message || "Erro inesperado.";
      Alert.alert("Erro de Validação", errorMessage);
      return;
    }

    Alert.alert("Formulário enviado com sucesso!", JSON.stringify(formData));
  };

  return (
    <View className="flex-1 justify-center px-4">
      <Text className="text-xl font-bold">Formulário de Cadastro</Text>
      
      <TextInput
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        className="border p-2 mt-4 rounded"
      />
      
      <TextInput
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        className="border p-2 mt-4 rounded"
      />

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}
```

---

### **2. Melhorando Validações (Campos Personalizados)**  
Atualize o esquema para validar idade como opcional e telefone com tamanho mínimo:
```tsx
const schema = z.object({
  name: z.string().min(3, "O nome precisa ter pelo menos 3 caracteres."),
  email: z.string().email("Insira um e-mail válido."),
  age: z.number().optional(),
  phone: z.string().min(10, "O telefone precisa ter pelo menos 10 dígitos."),
});
```

---

### ✅ **Desafio Prático**  
1. Adicione campos para telefone e data de nascimento no formulário.  
2. Garanta que o campo de telefone aceite apenas números e que a data de nascimento seja uma data válida.  
3. Mostre mensagens de erro personalizadas ao usuário.  
