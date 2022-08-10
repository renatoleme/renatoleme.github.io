---
layout: post
author: Renato Leme
title:  "Condições suficientes e necessárias"
date:   2022-08-08 15:20:29 -0300
categories: logic
---
 
---

>>
*A dicotomia entre condições suficientes e necessárias é muito utilizada na Filosofia. Suas raízes, porém, encontram-se na Lógica.*

---

# $$A \rightarrow B$$

Na lógica clássica, a implicação (usualmente representada pela seta $$\rightarrow$$) é uma relação binária entre proposições. Essa relação possui algumas leituras muito úteis, dentre as quais se destacam: 

> Se $$ A \rightarrow B $$, então 
>> **(1)** $$A$$ é **suficiente** para $$B$$; e
>> **(2)** $$B$$ é **necessário** para $$A$$.

Essas leituras podem ser compreendidas como formas alternativas de expressar dois famosos argumentos válidos: [**modus ponens**](https://pt.wikipedia.org/wiki/Modus_ponens) 

> $$A \rightarrow B, A \Vdash B$$

<details markdown="1">
<summary>Mostrar tabela-verdade</summary>
<table style="height: 132px;" width="222">
<tbody>
<tr style="height: 26px;">
<td style="width: 73.6562px; height: 26px;">A</td>
<td style="width: 73.6562px; height: 26px;">B</td>
<td style="width: 73.6875px; height: 26px;">A -&gt; B</td>
</tr>
<tr style="height: 26.2031px;">
<td style="width: 73.6562px; height: 26.2031px;"><span style="background-color: #33cccc; color: #000000;">1</span></td>
<td style="width: 73.6562px; height: 26.2031px;"><span style="background-color: #33cccc; color: #000000;">1</span></td>
<td style="width: 73.6875px; height: 26.2031px;"><span style="background-color: #33cccc; color: #000000;">1</span></td>
</tr>
<tr style="height: 26px;">
<td style="width: 73.6562px; height: 26px;">1</td>
<td style="width: 73.6562px; height: 26px;">0</td>
<td style="width: 73.6875px; height: 26px;">0</td>
</tr>
<tr style="height: 26px;">
<td style="width: 73.6562px; height: 26px;">0</td>
<td style="width: 73.6562px; height: 26px;">1</td>
<td style="width: 73.6875px; height: 26px;">1</td>
</tr>
<tr style="height: 26px;">
<td style="width: 73.6562px; height: 26px;">0</td>
<td style="width: 73.6562px; height: 26px;">0</td>
<td style="width: 73.6875px; height: 26px;">1</td>
</tr>
</tbody>
</table>
</details>

e [**modus tollens**](https://pt.wikipedia.org/wiki/Modus_tollens)

> $$A \rightarrow B, \neg B \Vdash \neg A$$

<details markdown="1">
<summary>Mostrar tabela-verdade</summary>
<table style="height: 132px; width: 343.375px;">
<tbody>
<tr style="height: 26px;">
<td style="width: 73px; height: 26px;">A</td>
<td style="width: 73px; height: 26px;">~A</td>
<td style="width: 73px; height: 26px;">B</td>
<td style="width: 73px; height: 26px;">~B</td>
<td style="width: 194.375px; height: 26px;">A -&gt; B</td>
</tr>
<tr style="height: 26.2031px;">
<td style="width: 73px; height: 26.2031px;">1</td>
<td style="width: 73px; height: 26.2031px;">0</td>
<td style="width: 73px; height: 26.2031px;">1</td>
<td style="width: 73px; height: 26.2031px;">0</td>
<td style="width: 194.375px; height: 26.2031px;">1</td>
</tr>
<tr style="height: 26px;">
<td style="width: 73px; height: 26px;">1</td>
<td style="width: 73px; height: 26px;">0</td>
<td style="width: 73px; height: 26px;">0</td>
<td style="width: 73px; height: 26px;">1</td>
<td style="width: 194.375px; height: 26px;">0</td>
</tr>
<tr style="height: 26px;">
<td style="width: 73px; height: 26px;">0</td>
<td style="width: 73px; height: 26px;">1</td>
<td style="width: 73px; height: 26px;">1</td>
<td style="width: 73px; height: 26px;">0</td>
<td style="width: 194.375px; height: 26px;">1</td>
</tr>
<tr style="height: 26px;">
<td style="width: 73px; height: 26px;">0</td>
<td style="width: 73px; height: 26px;"><span style="background-color: #33cccc; color: #000000;">1</span></td>
<td style="width: 73px; height: 26px;">0</td>
<td style="width: 73px; height: 26px;"><span style="background-color: #33cccc; color: #000000;">1</span></td>
<td style="width: 194.375px; height: 26px;"><span style="background-color: #33cccc; color: #000000;">1</span></td>
</tr>
</tbody>
</table>
</details>

Para entender como a interpretação funciona, considere o seguinte conjunto unitário: 

> $$\{ A \rightarrow B \}$$

O que acontece quando adicionamos $$A$$ ao conjunto? Por *modus ponens*, obtemos $$B$$. Poderíamos adicionar $$C, D, E, F, \ldots$$ ao conjunto? Sim, poderíamos, mas é **suficiente** adicionar $$A$$ para obter $$B$$ (embora não seja necessário: poderíamos também adicionar $$B$$ para obter $$B$$).

Agora, o que acontece quando adicionamos $$\neg B$$ ao conjunto? Por *modus tollens*, obtemos $$\neg A$$. Ou seja, na hipótese de que $$B$$ é falso, concluímos que $$A$$ deve ser falso. Em outras palavras, para $$A$$ ser verdadeiro, é **necessário** que $$B$$ seja verdadeiro (mas não é suficiente [por quê?]).

---

## Transitividade

Uma das propriedades da implicação na lógica clássica é a transitividade: 

> Se $$A \rightarrow B$$ e $$B \rightarrow C$$, então $$A \rightarrow C$$.

Trazendo para o discurso das condições, temos duas leituras possíveis: 

1.
* $$C$$ é necessário para $$B$$ : $$B \rightarrow C$$ (Premissa)
* $$B$$ é necessário para $$A$$ : $$A \rightarrow B$$ (Premissa)
* $$C$$ é necessário para $$A$$ : $$A \rightarrow C$$ (Conclusão)
  
2.
* $$A$$ é suficiente para $$B$$ : $$A \rightarrow B$$ (Premissa)
* $$B$$ é suficiente para $$C$$ : $$B \rightarrow C$$ (Premissa)
* $$A$$ é suficiente para $$C$$ : $$A \rightarrow C$$ (Conclusão)

Observe que, embora essas leituras sejam diferentes, elas são equivalentes (do ponto de vista formal, o argumento possui as mesmas premissas e a mesma conclusão).

---

# Na computação 

Em um processo computacional, se a informação $$A$$ é suficiente para a informação $$B$$, então no mesmo momento em que o computador possui a informação de que $$[A]$$ é $$true$$, ele também possui a informação de que $$[B]$$ é $$true$$ (analogamente, quando possui a informação de que $$[B]$$ é $$false$$, possui a informação de que $$[A]$$ é $$false$$).

Vamos supor que existam três condições para serem testadas: $$A$$, $$B$$ e $$C$$

```c
if (A)
    if (B)
        if (C) /* faça algo */
        else ...
    else ... 
else ..
```

Agora, vamos imaginar que sabemos (*metalinguisticamente*) que a informação $$A$$ é suficiente para $$B$$ e $$B$$ é suficiente para $$C$$. Por transitividade, $$A$$ é suficiente para $$C$$ e, portanto, o código acima poderia ser simplificado para 

```c
if (A)
else ...
```

---
<details markdown="1">
<summary>Exemplo</summary>
<div markdown='span'>

    Vamos imaginar que temos duas condições: (A) X pode dirigir; (B) X é maior de idade.

    Sabemos que (no Brasil) $$(A) \rightarrow (B) $$ 

    Portanto, em um escopo no qual a condição $$(A)$$ é verdadeira, podemos inferir que a condição $$(B)$$ também é verdadeira.
</div>
</details>

---

# Exercícios

> FGV -- IBGE -- 2016
>> -- Sem A, não se tem B
>> -- Sem B, não se tem C
>>
Assim, conclui-se que:
(a) A é suficiente para B e para C
(b) B é necessário para A e para C
(c) C é suficiente para A e para B
(d) A e B são suficientes para C
(e) B é necessário para A e suficiente para C

<details> 
	<summary>Mostrar solução</summary>
    <div markdown='span'>
	"Sem A, não se tem B", ou seja, $$A$$ é necessário para $$B$$ ($$B \rightarrow A$$). "Sem B, não se tem C", ou seja, $$B$$ é necessário para $$C$$ ($$C \rightarrow B$$). Por transitividade, $$A$$ é necessário para $$C$$ ($$C \rightarrow A$$) (reciprocamente, $$C$$ é suficiente para $$A$$). Além disso, como $$C \rightarrow B$$, temos que $$C$$ é suficiente para $$B$$. Portanto, alternativa (c) é verdadeira.
    </div>
</details>

> IADES -- CFA -- 2010
>>
É necessário que Beatriz durma para que Sérgio fique feliz. Quando Beatriz dorme, então Romério faz uma visita. É necessário e suficiente que Romério faça uma visita para que Amélia descanse. Logo, quando Sérgio fica feliz, então
>>
(a) Amélia descansa e Beatriz dorme.
(b) Amélia não descansa ou Beatriz não dorme.
(c) Beatriz não dorme e Romério faz uma visita.
(d) Beatriz não dorme e Romério não faz uma visita.

<details> 
	<summary>Mostrar solução</summary>
    <div markdown='span'>

    Seja $$A$$ = "Beatriz dorme", $$B$$ = "Sérgio fica feliz", $$C$$ = "Romélio faz uma visita", $$D$$ = "Amélia descansa". Analisando o enunciado, obtemos que: $$B  \rightarrow A$$, $$A  \rightarrow C$$, $$C \leftrightarrow D$$

a partir do que podemos inferir $$B \rightarrow C$$ (por transitividade). Ou seja: se Sérgio fica feliz, então Romélio faz uma visita. E se Romélio faz uma visita, então Amélia descansa. Como estamos supondo que Sérgio fica feliz, então Amélia descansa. Além disso, como $$B \rightarrow A$$, inferimos também que Beatriz dorme. Portanto, alternativa (a) é verdadeira.

    </div>
</details>

> FUNCAB -- MDA -- 2014
>>
É necessário que a seleção brasileira vença para que o povo festeje. Quando a seleção vence, então os adversários choram. É necessário e suficiente que os adversários chorem para que a competição termine. Se o povo festeja, pode-se afirmar que:
>>
(a) a competição termina e a seleção vence.
(b) a competição não termina ou a seleção não vence.
(c) a seleção não vence e os adversários choram
(d) a seleção não vence e os adversários não choram.
(e) a seleção não vence e a competição não termina

<details> 
	<summary>Mostrar solução</summary>
    <div markdown='span'>
    Seja $$A$$ = "a seleção brasileira vence", $$B$$ = "o povo festeja", $$C$$ = "os adversários choram", $$D$$ = "a competição termina". Analisando o enunciado, obtemos que: $$B \rightarrow A$$, $$A  \rightarrow C$$, $$C \leftrightarrow D$$. Temos, por hipótese, que vale $$B$$. Portanto, vale $$A$$ ("a seleção brasileira vence"). Como vale $$A$$, então vale $$C$$. Como vale $$C$$, então vale $$D$$ ("a competição termina"). Logo, alternativa (a) é verdadeira.
    </div>
</details>

>
Prove que a transitividade é válida usando dedução natural.


<details> 
	<summary>Mostrar solução</summary>
<table style="height: 150px; width: 364.5px;">
<tbody>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">1</td>
<td style="width: 84px; height: 24px;">A -&gt; B</td>
<td style="width: 195.5px; height: 24px;">hip</td>
</tr>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">2</td>
<td style="width: 84px; height: 24px;">B -&gt; C</td>
<td style="width: 195.5px; height: 24px;">hip</td>
</tr>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">3</td>
<td style="width: 84px; height: 24px;">[A]</td>
<td style="width: 195.5px; height: 24px;">sup</td>
</tr>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">3.1</td>
<td style="width: 84px; height: 24px;">B</td>
<td style="width: 195.5px; height: 24px;">1,3 (imp_elim)</td>
</tr>
<tr style="height: 24.6406px;">
<td style="width: 84px; height: 24.6406px;">3.2</td>
<td style="width: 84px; height: 24.6406px;">C</td>
<td style="width: 195.5px; height: 24.6406px;">2,3 (imp_elim)</td>
</tr>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">4.</td>
<td style="width: 84px; height: 24px;">A -&gt; C</td>
<td style="width: 195.5px; height: 24px;">3,3.1 (imp_intro)</td>
</tr>
</tbody>
</table>
</details>

>
Prove que o *modus tollens* é válido usando dedução natural.

<details> 
	<summary>Mostrar solução</summary>
<table style="height: 150px; width: 364.5px;">
<tbody>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">1</td>
<td style="width: 84px; height: 24px;">A -&gt; B</td>
<td style="width: 195.5px; height: 24px;">hip</td>
</tr>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">2</td>
<td style="width: 84px; height: 24px;">~B</td>
<td style="width: 195.5px; height: 24px;">hip</td>
</tr>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">3</td>
<td style="width: 84px; height: 24px;">[A]</td>
<td style="width: 195.5px; height: 24px;">sup</td>
</tr>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">3.1</td>
<td style="width: 84px; height: 24px;">B</td>
<td style="width: 195.5px; height: 24px;">1,3 (imp_elim)</td>
</tr>
<tr style="height: 24.7344px;">
<td style="width: 84px; height: 24.7344px;">3.2</td>
<td style="width: 84px; height: 24.7344px;">B /\ ~B</td>
<td style="width: 195.5px; height: 24.7344px;">2,3.1 (conj_intro)</td>
</tr>
<tr style="height: 24.7344px;">
<td style="width: 84px; height: 24.7344px;">3.3</td>
<td style="width: 84px; height: 24.7344px;">bot</td>
<td style="width: 195.5px; height: 24.7344px;">&nbsp;</td>
</tr>
<tr style="height: 24px;">
<td style="width: 84px; height: 24px;">4.</td>
<td style="width: 84px; height: 24px;">~A</td>
<td style="width: 195.5px; height: 24px;">3,3.1 (bot_elim)</td>
</tr>
</tbody>
</table>
</details>

