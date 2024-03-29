#Igetup -- верстка

##1. Описание

В проекте использованы расширения pug(html) и scss(css).
Структура директорий проекта (директория /src):
* /pug - исходные файлы HTML-разметки
* /scss - таблицы стилей
* /fonts - шрифты
* /img - изображения, являющиеся частью макета
* /data - изображения и файлы, эмулирующие пользовательский контент
* /js - скрипты, эмулирующие поведение макета
* /vendor - дополнительные js и css библиотеки

##2. Сборка

Сборка проекта автоматизирована. В качестве сборщика используется компилятор gulp.
Для исключения проблем версионности используемых библиотек и платформонезависимости
вся логика инкапсулирована в Docker-контейнеры.

Для сборки проекта вам необходимо установить Docker и утилиту docker-compose.
Инструкции по установке можно найти на официальных сайтах продуктов:

Docker [https://docs.docker.com/install/]

Docker Compose [https://docs.docker.com/compose/install/]

После установки откройте консоль, перейдите в корневую директорию проекта 
и установите требуемые компоненты с помощью команды

``$ docker-compose -f docker-compose-deps.yml up``

В результате все требуемые модули будут установлены в директорию ./node_modules .

Затем запустите сборку проекта с помощью команды

``$ docker-compose -f docker-compose-builder.yml up``

В результате все сраницы проекта будут скомпилированы и сохранены в директории ./dist