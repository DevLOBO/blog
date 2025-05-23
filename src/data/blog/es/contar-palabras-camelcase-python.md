---
title: "Contar Palabras CamelCase: Función Python Paso a Paso"
description: Aprende a contar palabras en strings CamelCase con Python.  Función simple, explicación detallada y ejemplos prácticos. Domina strings, listas y 'isupper' para mejorar tu código Python. ¡Entra y descubre cómo!
pubDatetime: 2025-05-22T23:51:00Z
tags:
  - -funciones
  - ejercicio-practico
  - -cadenas
  - isupper
  - python
  - comprension-de-listas
featured: false
draft: false
---

¿Cansado de descifrar nombres de variables indescifrables? Hoy desentrañaremos el misterio del CamelCase, una convención de nomenclatura omnipresente en el mundo del desarrollo. 🐫

## 🔮 Enunciado del Problema

Debemos crear una función en Python que sea capaz de contar el número de palabras presentes en una cadena de texto escrita utilizando la convención CamelCase.

**Parámetros:**

- `string text`: El texto en formato CamelCase que deseamos analizar.

**Retorna:**

- `int`: El número de palabras identificadas en el texto.

**Ejemplos:**

```python
>>> camelcase('holaMundo')
2
>>> camelcase('profesorAyudemeConElExamenEstaBienDificil')
8
>>> camelcase('alumnoEsteEsUnEjercicioMuyFacil')
7
```

**Notas Adicionales:**

- El CamelCase es un estilo de escritura donde las palabras se concatenan y se distinguen por la capitalización de la primera letra de cada palabra, excepto, en este caso, la primera.
- Es ampliamente utilizado en lenguajes como Java para nombres de métodos y variables, ya que el uso de mayúsculas al inicio suele reservarse para nombres de clases.
- En este ejercicio, asumimos que la primera palabra _no_ está capitalizada, pero aún así la contamos.

## 🧩 **Resolución Paso a Paso**

La clave para resolver este problema reside en identificar las mayúsculas dentro de la cadena. Cada mayúscula indica el inicio de una nueva palabra (exceptuando la primera, que ya contamos). Utilizaremos una comprensión de lista para extraer estas mayúsculas y luego contarlas.

**Explicación detallada del código:**

Comenzamos definiendo la función `camelcase`, que recibe como entrada una cadena de texto llamada `text`. Esta función será la encargada de realizar el conteo de palabras.

```python
def camelcase(text):
```

La magia ocurre en la siguiente línea. Aquí, utilizamos una comprensión de lista para iterar sobre cada carácter en la cadena de texto. Filtrando únicamente aquellos caracteres que son mayúsculas mediante `c.isupper()`.

```python
[c for c in text if c.isupper()]
```

Luego, la función `len()` calcula la longitud de la lista resultante, lo que nos da el número de letras mayúsculas encontradas. A este número le sumamos 1 (para la primera palabra que no está en mayúscula) y retornamos el resultado. ➕

```python
return 1 + len([c for c in text if c.isupper()])
```

**Solución Completa:**

```python
def camelcase(text):
	"level: easy; points: 2"
	return 1 + len([c for c in text if c.isupper()])
```

## 🧠 **Conceptos Clave**

La **comprensión de listas** es una construcción sintáctica elegante en Python que permite crear nuevas listas a partir de iterables existentes de forma concisa. En este caso, la usamos para filtrar los caracteres en mayúscula de la cadena de entrada. Su eficiencia y legibilidad la convierten en una herramienta invaluable.

La función `isupper()` es un método de las cadenas en Python que devuelve `True` si todos los caracteres de la cadena son mayúsculas y `False` en caso contrario. Esta función es crucial para identificar las mayúsculas que delimitan las palabras en CamelCase.

¿Sabías que...? Las comprensiones de listas son, en muchos casos, más rápidas que los bucles `for` tradicionales para realizar la misma tarea. Esto se debe a que la comprensión de listas está optimizada a nivel del intérprete de Python. 🚀

## 💫 **Reflexiones Finales**

Este problema, aunque sencillo en su implementación, ilustra el poder de las herramientas que Python nos ofrece para la manipulación de cadenas. Una posible mejora sería considerar casos borde como cadenas vacías o cadenas que no siguen el formato CamelCase estricto (por ejemplo, "HolaMUNDO"). También se podría extender la función para manejar diferentes variaciones de CamelCase, como UpperCamelCase (PascalCase), donde la primera palabra también está capitalizada.

La habilidad de identificar y manipular patrones en cadenas de texto es fundamental para muchos aspectos del desarrollo de software, desde el análisis de logs hasta la validación de datos.

¡Espero que esta inmersión en el CamelCase te haya resultado útil! Si quieres seguir aprendiendo sobre Python y resolución de problemas, te invito a explorar otros artículos en este blog. ¡El mundo del desarrollo de software te espera! ✨
