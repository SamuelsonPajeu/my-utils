# Data Utils

Biblioteca para substituição do [Moment.Js](https://momentjs.com/) que está [atualmente deprecada.](https://stilingue-jira.atlassian.net/wiki/spaces/SCG/pages/1972207651/Plano+de+Deploy+-+Exporta+o+Relat+rio+V2)

A biblioteca possuí apenas funcionalidades básicas, mas novas podem ser adicionadas de forma fácil e rápida e o melhor, sem importar nada, já que os próprios Date Objects estão sendo utilizados.

---
###  addDays()

 ```js
 Days(dias(int), data(DateObj))
 ```

Adiciona um número X de dias a data selecionada.
Caso nenhuma data seja passada como parâmetro, a data atual é utilizada.

Exemplo de substituição do *moment*:
![Alt text](images/date-utils-1.png)

```bash
- this.expiryDateSelected = moment().add(selectedPeriod.id, 'day');
+ this.expiryDateSelected = dateComponents.addDays(selectedPeriod.id);
```

---

### formatDate()

 ```js
 formatDate(data(DateObj), format(str))
 ```

Formata uma string utilizando expressões regulares para fornecer a data no formato desejado
Referencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

<!-- <table data-layout="default" data-local-id="eafeae49-b13b-496e-87dd-5aab5a421d3a" class="confluenceTable"><colgroup><col style="width: 226.67px;"><col style="width: 226.67px;"><col style="width: 226.67px;"></colgroup><tbody><tr><th class="confluenceTh"><p></p></th><th class="confluenceTh"><p><strong>Token</strong></p></th><th class="confluenceTh"><p><strong>Output</strong></p></th></tr><tr><td class="confluenceTd"><p><strong>Mês</strong></p></td><td class="confluenceTd"><p>M</p></td><td class="confluenceTd"><p>1 2 … 11 12</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>MM</p></td><td class="confluenceTd"><p>01 02 … 11 12</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>MMM</p></td><td class="confluenceTd"><p><code>Mar.</code></p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>MMMM</p></td><td class="confluenceTd"><p><code>Março</code></p></td></tr><tr><td class="confluenceTd"><p><strong>Ano</strong></p></td><td class="confluenceTd"><p>YY</p></td><td class="confluenceTd"><p>70 71 … 29 30</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>YYYY</p></td><td class="confluenceTd"><p>1970 1971 … 2029 2030</p></td></tr><tr><td class="confluenceTd"><p><strong>Dia do mês</strong></p></td><td class="confluenceTd"><p>D</p></td><td class="confluenceTd"><p>1 2 … 30 31</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>DD</p></td><td class="confluenceTd"><p>01 02 … 30 31</p></td></tr><tr><td class="confluenceTd"><p><strong>Dia da semana</strong></p></td><td class="confluenceTd"><p>dd</p></td><td class="confluenceTd"><p><code>qui.</code></p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>ddd</p></td><td class="confluenceTd"><p><code>quinta-feira</code></p></td></tr><tr><td class="confluenceTd"><p><strong>Hora</strong></p></td><td class="confluenceTd"><p>H</p></td><td class="confluenceTd"><p>0 1 … 22 23</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>HH</p></td><td class="confluenceTd"><p>00 01 … 22 23</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>h</p></td><td class="confluenceTd"><p>0 1 … 11 12</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>hh</p></td><td class="confluenceTd"><p>00 01 … 11 12</p></td></tr><tr><td class="confluenceTd"><p><strong>Minuto</strong></p></td><td class="confluenceTd"><p>m</p></td><td class="confluenceTd"><p>0 1 … 58 59</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>mm</p></td><td class="confluenceTd"><p>00 01 … 58 59</p></td></tr><tr><td class="confluenceTd"><p><strong>Segundo</strong></p></td><td class="confluenceTd"><p>s</p></td><td class="confluenceTd"><p>0 1 … 58 59</p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p>ss</p></td><td class="confluenceTd"><p>00 01 … 58 59</p></td></tr></tbody></table> -->


> |    | Token                    | Output                 |
> |---------------|-----------------------------------|----------------|
> |**Mês**|M|1 2 … 11 12|
> ||MM|01 02 … 11 12|
> ||MMM|*Mar.*|
> ||MMMM|*Março*|
> |**Ano**|YY|70 71 … 29 30|
> ||YYYY|1970 1971 … 2029 2030|
> |**Dia do mês**|D|1 2 … 30 31|
> ||DD|01 02 … 30 31|
> |**Dia da semana**|dd|*qui.*|
> ||ddd|*quinta-feira*|
> |**Hora**|H|0 1 … 22 23|
> ||HH|00 01 … 22 23|
> ||h|0 1 … 11 12|
> ||hh|00 01 … 11 12|
> |**Minuto**|m|0 1 … 58 59|
> ||mm|00 01 … 58 59|
> |**Segundo**|s|0 1 … 58 59|
> ||ss|00 01 … 58 59|

Exemplo de substituição do **moment**:
![Alt text](images/date-utils-2.png)
```bash
-const expiryDateValue = moment(item.expiryDate).valueOf();
-item.expiryDateFormatted = moment(expiryDateValue).format('DD/MM/YYYY');
+item.expiryDateFormatted = dateComponents.formatDate(item.expiryDate, 'DD/MM/YYYY');
```