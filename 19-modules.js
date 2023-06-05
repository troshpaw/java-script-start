
// МОДУЛИ
// Каждый файл .js в приложении - отдельный модуль.

// 1. Экспорт по умолчанию (пример)
// Содержимое первого файла (модуля):
const exportFn = () => {
    console.log('Hello!')
}

export default exportFn

// Содержимое второго файла (модуля):
import importFn from './19-modules.js'

importFn()

/* При экспортировании / импортировании по default переменные могут называться по-разному.
В данном случае exportFn и importFn */

/* ВАЖНО:
В данном случае export / import работать не будет, т.к. код в VSCode интерпретируется node.js.
Код будет выполняться только при создании index.html файла и запуске проекта в браузере. */

/* Для того, чтобы node.js корректно интерпретировал код, написанный в модулях, расширение
файлов необходимо изменить с .js на .mjs */

// Переходим в папку ./modules с содержимым: moduleOne.mjs и moduleTwo.mjs

// ...

// Правила работы с модулями:
// Все export инструкции нужно распологать в конце файла.
// Все import инструкции нужно распологать в начале файла.
// Рекомендуется использовать export default.
// Имеется возможность подключать внешние пакеты модулей.


// ПРИМЕР МОДУЛЯ REACT APPLICATION

// Для справки:
// npm - пакетный менеджер node.js
// npx - единократный запук пакета

// В консоли: npx create-react-app react-module-app
// Примеры export / import можно посмотреть в модулях реакт по пути: ./react-module-app/src/