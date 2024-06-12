### Технічне Завдання (ТЗ) для Веб-Додатку HikkingMealPlanner

#### Загальний Опис

**Назва проекту:** HikkingMealPlanner  
**Опис проекту:** Веб-додаток для спрощення процесу організації та планування харчування в поході.  
**Мета:** Надати користувачам можливість створювати та управляти планами харчування для походів, зберігати їх, редагувати, переглядати стандартні плани, а також генерувати списки продуктів для закупівлі.  

#### Функціональні Модулі

1. **Управління Планами Харчування**
   - **Створення плану харчування**
     - Поле для введення назви плану.
     - Додавання днів до плану.
   - **Редагування плану харчування**
     - Можливість змінювати назву плану.
     - Додавання та видалення днів у плані.
   - **Відображення списку планів харчування**
     - Завантаження та перегляд планів користувача.
     - Можливість відкривати план для перегляду чи редагування.
   - **Видалення плану харчування**
     - Можливість видалити план харчування користувача.
   - **Збереження плану харчування у файл**
     - Можливість експорту плану харчування у файл (наприклад, JSON або CSV).
   - **Завантаження плану харчування з файлу**
     - Можливість імпорту плану харчування з файлу.

2. **Управління Продуктами**
   - **Додавання нового продукту**
     - Форма для введення назви продукту, порції, калорійності, вмісту жирів, білків та вуглеводів.
   - **Редагування продукту**
     - Можливість змінювати параметри продукту.
   - **Видалення продукту**
     - Можливість видалити продукт з бази.
   - **Перегляд списку продуктів**
     - Відображення всіх продуктів з можливістю сортування та фільтрації.

3. **Управління Стравами**
   - **Додавання нової страви**
     - Форма для введення назви страви, типу, порції, калорійності, вмісту жирів, білків, вуглеводів та виробника (для готових страв).
   - **Редагування страви**
     - Можливість змінювати параметри страви.
   - **Видалення страви**
     - Можливість видалити страву з бази.
   - **Перегляд списку страв**
     - Відображення всіх страв з можливістю сортування та фільтрації.

4. **Меню та Планування Харчування**
   - **Створення меню на основі плану харчування**
     - Можливість додавати страви до конкретних прийомів їжі в рамках дня.
     - Можливість додавати продукти до конкретних прийомів їжі в рамках дня.
   - **Редагування меню**
     - Можливість змінювати страви, порції та дні.
   - **Автозбереження меню**
     - Автоматичне збереження змін у меню в локальному сховищі.
   - **Генерація списку покупок**
     - Створення списку продуктів на основі обраного меню.

5. **Збереження та Завантаження Планів Харчування**
   - **Збереження планів харчування**
     - Збереження планів харчування в LocalStorage.
   - **Експорт планів харчування у файл**
     - Можливість експорту плану харчування у файл (JSON або CSV).
   - **Імпорт планів харчування з файлу**
     - Можливість імпорту плану харчування з файлу.
   - **Завантаження планів харчування у PDF**
     - Генерація PDF файлу з детальним описом плану харчування.

#### Технологічний Стек

1. **Фронтенд:**
   - Vue.js
   - Vite
   - SASS
   - Pinia

2. **Локальне Зберігання Даних:**
   - LocalStorage (для збереження планів харчування та даних користувачів)

3. **Зовнішнє Сховище:**
   - GitHub Pages (для хостингу веб-сайту)

4. **Інструменти для Тестування:**
   - Jest (юніт-тести для фронтенду)
   - Cypress (E2E тестування для фронтенду)

### Архітектура та Взаємозв'язки

