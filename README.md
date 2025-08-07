# Visor de Personajes - Rick and Morty

Una aplicación web desarrollada como prueba técnica que consume la API pública de Rick and Morty para mostrar personajes en un formato visual tipo galería. Incluye funcionalidad de votación no persistente (Like / Dislike) para cada personaje.

---

## 📸 Captura de pantalla

>Captura desde pc: ![Screenshot_1](https://github.com/user-attachments/assets/3f0b896c-845c-41a8-8be4-260f63d99ca5)

>Captura desde dispositivo Android emulado: ![Screenshot_2](https://github.com/user-attachments/assets/6e2e9e6b-c703-491e-988b-42189daa543c)

---

## ⚙️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- API pública: [Rick and Morty API](https://rickandmortyapi.com/)

---

## 🚀 Cómo ejecutar el proyecto

1. Clona el repositorio:
   ```bash
   git clone https://github.com/MidnightNightmare369/rick-and-morty-character-viewer.git
2. Abre la carpeta principal
   ```bash
   cd nombre-del-repo
3. Abre el archivo index.html en tu navegador
✅ No requiere instalación de dependencias ni configuraciones adicionales.

---

## 🔌 Consumo de la API
La aplicación realiza una solicitud HTTP a la API pública de Rick and Morty:
  fetch("https://rickandmortyapi.com/api/character")

Esto se maneja en el archivo main.js, donde se obtiene la lista de personajes y se recorre con forEach para renderizar cada uno dinámicamente dentro del main del documento HTML.

---

##📁 Estructura del proyecto

![Screenshot_3](https://github.com/user-attachments/assets/312c85b8-de9c-4567-a1e9-ac81673ec690)

---

## 🎯 Funcionalidades implementadas

 -Consumo de la API de personajes de Rick and Morty.
 
 -Renderizado dinámico de tarjetas con:
   *Imagen
   *Nombre
   *Estado
   *Especie
   
 -Sistema de votación Like / Dislike con conteo visual. 

## 🎯 Funcionalidades adicionales implementadas
 -Diseño responsive con CSS Grid. 
 
 -Estilos visuales personalizados y simples.
 
 -Cantidad total de Like / Dislike.

 ---

## 📌 Decisiones Técnicas

-Separación de responsabilidades en archivos JavaScript: Se decidió dividir la lógica de renderizado (main.js) y la lógica de interacción (main2.js) para mantener el código más organizado y legible.

-Uso de fetch nativo: Se utilizó fetch en lugar de una librería externa para consumir la API, ya que es suficiente para este caso y mantiene el proyecto liviano.

-Diseño responsive con CSS Grid: Se optó por grid-template-columns con auto-fit y minmax() para adaptar automáticamente las tarjetas a distintos tamaños de pantalla, sin necesidad de media queries adicionales.

-Uso de setTimeout para inicializar eventos: Como solución temporal para asegurar que el DOM estuviera completamente cargado antes de asignar los listeners de interacción. Idealmente, se reemplazaría por una llamada explícita tras el renderizado completo.

-Estructura simple sin frameworks: Se eligió JavaScript puro (vanilla JS) para enfocarse en la lógica y la manipulación del DOM sin la complejidad adicional de React/Vue, tal como lo permitía la prueba.

 ---

 ## 🧪 Pruebas funcionales
 Ver archivo pruebas-funcionales.md incluido en el repositorio.

 ---

## 💡 Propuesta de mejora
Si contara con más tiempo, podría implementar las siguientes mejoras:

-Persistencia de los votos usando localStorage.

-Filtro por nombre, especie o estado.

-Paginación o scroll infinito para cargar más personajes.

-Animaciones visuales en interacciones.

---

## 👨‍💻 Autor
Juan Pablo Barrera Gomez- https://github.com/MidnightNightmare369

---
## 📄 Licencia
Este proyecto fue realizado con fines académicos/técnicos y no tiene fines comerciales.


