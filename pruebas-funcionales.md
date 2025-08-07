# 📋 Pruebas Funcionales - Visor de Personajes de Rick and Morty

Este documento describe las pruebas funcionales realizadas para verificar el correcto funcionamiento de la aplicación.

---

| # | Funcionalidad                           | Caso de prueba                                                                 | Resultado esperado                                                              | Resultado real | Estado        |
|---|-----------------------------------------|--------------------------------------------------------------------------------|----------------------------------------------------------------------------------|----------------|----------------|
| 1 | Carga de personajes                     | Al abrir la app, deben cargarse personajes desde la API y mostrarse en tarjetas. | Las tarjetas muestran imagen, nombre, estado y especie.                         | Correcto       | ✅ Aprobado    |
| 2 | Botón Like                              | Al hacer clic en el botón de "Like", el contador debe aumentar en 1.           | El contador de Like incrementa solo una vez por tarjeta.                        | Correcto       | ✅ Aprobado    |
| 3 | Botón Dislike                           | Al hacer clic en "Dislike", aumenta el contador y se deselecciona el "Like".   | El contador de Dislike incrementa y Like se resta si estaba activo.             | Correcto       | ✅ Aprobado    |
| 4 | Cambio de voto                          | Al hacer clic en Like y luego en Dislike (o viceversa), el voto anterior se deselecciona. | Solo un botón activo a la vez por personaje, contador se ajusta.        | Correcto       | ✅ Aprobado    |
| 5 | Puntuación independiente por personaje  | Cada tarjeta tiene su sistema de puntuación independiente.                     | Los votos de un personaje no afectan a otros.                                   | Correcto       | ✅ Aprobado    |
| 6 | Responsive design                       | Al ver la app en celular, las tarjetas se reorganizan automáticamente.         | Diseño fluido con grid, sin solapamientos.                                      | Correcto       | ✅ Aprobado    |
| 7 | Recarga de página                       | Al recargar la página, los votos no persisten.                                 | Los contadores vuelven a 0.                                                     | Correcto       | ✅ Aprobado    |
| 8 | Íconos e interacción visual             | Al pasar el mouse sobre un botón, cambia de color.                             | Hover visible, retroalimentación visual clara.                                  | Correcto       | ✅ Aprobado    |

---

## Observaciones

- El sistema de puntuación es funcional.
- No se implementaron filtros o paginación en esta versión.
- El rendimiento es fluido al cargar el primer set de personajes (20 por defecto).
