# 📚 **Semana 02 - Aula 02: Manipulação de Dados e Otimização de Desempenho com React Query**

## 🎯 **Objetivo da Aula**  
Aprender a manipular dados com React Query, otimizar o desempenho das requisições e implementar atualizações locais para melhor experiência do usuário.

---

## 📝 **Conteúdo**

### **1. Mutations no React Query**
As *mutations* permitem criar, atualizar ou excluir dados em uma API.

#### **Uso Básico de `useMutation`**  
```tsx
import { useMutation, useQueryClient } from "@tanstack/react-query";

const createPost = async (newPost: { title: string }) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });
  if (!response.ok) throw new Error("Erro ao criar post");
  return response.json();
};

const NewPostForm = () => {
  const queryClient = useQueryClient();
  const { mutate, isLoading, isError } = useMutation(createPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  const handleCreatePost = () => {
    mutate({ title: "Novo Post via Mutation" });
  };

  return (
    <View>
      <Button
        title="Criar Novo Post"
        onPress={handleCreatePost}
        disabled={isLoading}
      />
      {isError && <Text>Erro ao criar post!</Text>}
    </View>
  );
};

export default NewPostForm;
```

---

### **2. Atualizações Otimizadas (Optimistic Updates)**  
As atualizações otimizadas permitem alterar a interface do usuário imediatamente sem esperar a resposta da API.

#### **Implementação com React Query**
```tsx
const { mutate } = useMutation(createPost, {
  onMutate: async (newPost) => {
    // Cancelar requisições pendentes
    await queryClient.cancelQueries(["posts"]);

    // Salvar snapshot do cache antigo
    const previousPosts = queryClient.getQueryData(["posts"]);

    // Atualizar otimistamente o cache
    queryClient.setQueryData(["posts"], (old: any) => [
      ...(old || []),
      { ...newPost, id: Math.random() },
    ]);

    return { previousPosts };
  },
  onError: (err, newPost, context) => {
    // Restaurar cache anterior em caso de erro
    queryClient.setQueryData(["posts"], context?.previousPosts);
  },
  onSettled: () => {
    queryClient.invalidateQueries(["posts"]);
  },
});
```

---

### **3. Pré-busca de Dados (Prefetching)**  
A pré-busca permite carregar dados antes que o usuário solicite.

```tsx
queryClient.prefetchQuery(["posts"], fetchPosts);
```

---

### 🚀 **Atividade Prática**
1. Adicione uma funcionalidade de **exclusão de dados** com `useMutation`.  
2. Implemente uma **atualização otimista** ao excluir um item.  
3. Garanta que o cache seja invalidado após a exclusão bem-sucedida.  

---

### ✅ **Desafio Prático**
1. Crie um formulário de edição de dados utilizando `useMutation`.  
2. Adicione tratamento otimista para a atualização dos dados.  
3. Garanta a sincronização com a API e melhorias de desempenho.  

---
