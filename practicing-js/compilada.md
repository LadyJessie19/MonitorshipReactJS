
# Tipos de Linguagens de Programação: Compilada, Transpilada e Interpretada

## Linguagem Compilada (Exemplo em C)

```c
#include <stdio.h>

int main() {
    printf("Hello, world!\n");
    return 0;
}
```

**O que é:**
Uma linguagem compilada é aquela em que o código fonte é traduzido inteiramente para código de máquina por um compilador. Isso gera um arquivo executável que pode ser diretamente executado pelo sistema operacional.

**O que ela faz:**
A linguagem compilada converte o código fonte escrito pelo programador em código de máquina, resultando em um arquivo executável independente que contém todas as instruções necessárias para a execução do programa.

## Linguagem Transpilada (Exemplo em TypeScript)

```typescript
// Arquivo: exemplo.ts

function greet(name: string) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice"));
```

**O que é:**
Uma linguagem transpilada é semelhante à linguagem compilada, mas o código é traduzido para outra linguagem de programação em vez de código de máquina. Geralmente, é usado para converter código de alto nível em outra linguagem, muitas vezes com foco específico, como otimização para web.

**O que ela faz:**
A linguagem transpilada, como o TypeScript, traduz o código em uma linguagem de programação de alto nível (TypeScript) para outra linguagem (JavaScript) usando um compilador específico.

## Linguagem Interpretada (Exemplo em Python)

```python
# Arquivo: exemplo.py

def greet(name):
    return "Hello, " + name + "!"

print(greet("Alice"))
```

**O que é:**
Uma linguagem interpretada é aquela em que o código fonte é lido linha por linha por um interpretador durante a execução. Não há um passo de compilação separado, e o código é executado imediatamente após ser lido.

**O que ela faz:**
O código em uma linguagem interpretada é executado linha por linha pelo interpretador, que realiza as ações conforme as instruções são lidas.

Lembre-se de que as fronteiras entre esses tipos de linguagens podem ser um pouco borradas, e muitas linguagens modernas têm características que podem se sobrepor a essas categorias tradicionais.