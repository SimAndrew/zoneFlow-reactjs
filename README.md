# ZoneFlow — Parking Zone Visualization

## Description
ZoneFlow is a React + TypeScript application for visualizing parking zones and spots. Data is loaded from JSON files via REST API (GET), grouped by zone, and displayed as tiles.

## Main Features
- Loads zone (`areas.json`) and spot (`things.json`) data using service functions `getAreas` and `getThings`.
- Two data loading approaches:
  - useEffect + useState (ThingsUseEffect)
  - React Query (ThingsReactQuery)
- Grouping spots by zone, sorting within a zone by `sku`.
- Visualization: each zone is a section, with spot tiles under the zone title.
- Tile: dark blue background, large `sku`, small `defaultSku` in the corner, colored stripe on the left (status indicator).
- Stripe color:
  1. Orange — if `countActive > 0`
  2. Red — if `status === 'closed'`
  3. Yellow — if `status === 'open'`
- Validation: if required fields are missing, the tile is not rendered.
- If a zone has no spots, only the zone title is shown.
- All components use React.memo for optimization.
- The app is split into independent components (Single Responsibility Principle).
- Routing is implemented between the two data loading approaches.

## Project Structure
```
ZoneFlow/
├── public/
│   ├── areas.json
│   ├── things.json
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── NavTabs.tsx
│   │   ├── SpotCard.tsx
│   │   └── ZoneSection.tsx
│   ├── pages/
│   │   ├── ThingsUseEffect.tsx
│   │   └── ThingsReactQuery.tsx
│   └── services/
│       └── api.ts
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── ... (other config files)
└── README.md
```

## File/Folder Purpose
- `public/areas.json`, `public/things.json` — Source data for zones and spots (JSON format).
- `public/vite.svg` — Project logo.
- `src/App.tsx` — Main app component, sets up routing and layout.
- `src/main.tsx` — Entry point, renders the app and sets up React Query provider.
- `src/index.css` — Global styles.
- `src/components/NavTabs.tsx` — Navigation tabs for switching between data loading approaches.
- `src/components/SpotCard.tsx` — Renders a single spot tile with color/status logic.
- `src/components/ZoneSection.tsx` — Renders a section for each zone and its spots.
- `src/pages/ThingsUseEffect.tsx` — Page: loads and displays data using useEffect + useState.
- `src/pages/ThingsReactQuery.tsx` — Page: loads and displays data using React Query.
- `src/services/api.ts` — Service for loading and validating data from JSON files.
- `package.json` — Project dependencies and scripts.
- `tailwind.config.js`, `postcss.config.js`, `stylelint.config.js`, `eslint.config.js` — Build and lint configs.
- `vite.config.ts` — Vite build config.
- `tsconfig*.json` — TypeScript configs.
- `README.md` — Project documentation.

## Getting Started
```bash
npm install
npm run dev
```
Open: http://localhost:5173

## Data Format
- Thing: `{ id, areaId, joinedWith, sku, defaultSku, status, countActive }`
- Area: `{ areaId, name }`

## Dependencies
- React, React DOM
- TypeScript
- Vite
- Tailwind CSS
- react-router-dom (v6)
- @tanstack/react-query

Install:
```bash
npm install
npm install react-router-dom @tanstack/react-query
```

## Routing Usage
- Top navigation tabs switch between two modules:
  - "/use-effect" → `ThingsUseEffect`
  - "/react-query" → `ThingsReactQuery`
- BrowserRouter is configured with future flags for React Router v7 readiness.

## Development
Run dev server:
```bash
npm run dev
```
Build:
```bash
npm run build
```
Preview build:
```bash
npm run preview
```

---

# ZoneFlow — визуализация парковочных зон

## Описание
ZoneFlow — это приложение на React + TypeScript для визуализации парковочных зон и мест. Данные загружаются из JSON-файлов через REST API (GET), группируются по зонам и отображаются в виде плиток.

## Основной функционал
- Загрузка данных о зонах (`areas.json`) и местах (`things.json`) через сервисные функции `getAreas` и `getThings`.
- Два подхода загрузки данных:
  - useEffect + useState (ThingsUseEffect)
  - React Query (ThingsReactQuery)
- Группировка мест по зонам, сортировка внутри зоны по `sku`.
- Визуализация: каждая зона — отдельная секция, под заголовком — плитки мест.
- Плитка: тёмно-синий фон, крупный `sku`, малый `defaultSku` в углу, цветная полоса слева (индикатор статуса).
- Цвет полосы:
  1. Оранжевая — если `countActive > 0`
  2. Красная — если `status === 'closed'`
  3. Жёлтая — если `status === 'open'`
- Валидация: если обязательные поля отсутствуют — плитка не рендерится.
- Если у зоны нет мест — показывается только заголовок зоны.
- Все компоненты используют React.memo для оптимизации.
- Приложение разделено на независимые компоненты (принцип единственной ответственности).
- Реализован роутинг между двумя подходами загрузки данных.

## Структура проекта
```
ZoneFlow/
├── public/
│   ├── areas.json
│   ├── things.json
│   └── vite.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   ├── components/
│   │   ├── NavTabs.tsx
│   │   ├── SpotCard.tsx
│   │   └── ZoneSection.tsx
│   ├── pages/
│   │   ├── ThingsUseEffect.tsx
│   │   └── ThingsReactQuery.tsx
│   └── services/
│       └── api.ts
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── ... (другие конфиги)
└── README.md
```

## Назначение файлов/папок
- `public/areas.json`, `public/things.json` — Исходные данные по зонам и местам (JSON).
- `public/vite.svg` — Логотип проекта.
- `src/App.tsx` — Главный компонент приложения, роутинг и layout.
- `src/main.tsx` — Точка входа, рендер приложения и настройка React Query.
- `src/index.css` — Глобальные стили.
- `src/components/NavTabs.tsx` — Вкладки для переключения между подходами загрузки данных.
- `src/components/SpotCard.tsx` — Отрисовка одной плитки места с цветовой/статусной логикой.
- `src/components/ZoneSection.tsx` — Секция для зоны и её мест.
- `src/pages/ThingsUseEffect.tsx` — Страница: загрузка и отображение данных через useEffect + useState.
- `src/pages/ThingsReactQuery.tsx` — Страница: загрузка и отображение данных через React Query.
- `src/services/api.ts` — Сервис для загрузки и валидации данных из JSON.
- `package.json` — Зависимости и скрипты проекта.
- `tailwind.config.js`, `postcss.config.js`, `stylelint.config.js`, `eslint.config.js` — Конфиги сборки и линтинга.
- `vite.config.ts` — Конфиг сборки Vite.
- `tsconfig*.json` — Конфиги TypeScript.
- `README.md` — Документация по проекту.

## Запуск
```bash
npm install
npm run dev
```
Откройте: http://localhost:5173

## Формат данных
- Thing: `{ id, areaId, joinedWith, sku, defaultSku, status, countActive }`
- Area: `{ areaId, name }`

## Зависимости
- React, React DOM
- TypeScript
- Vite
- Tailwind CSS
- react-router-dom (v6)
- @tanstack/react-query

Установка:
```bash
npm install
npm install react-router-dom @tanstack/react-query
```

## Использование роутинга
- Верхние вкладки переключают между двумя модулями:
  - "/use-effect" → `ThingsUseEffect`
  - "/react-query" → `ThingsReactQuery`
- BrowserRouter настроен с future-флагами для готовности к React Router v7.

## Разработка
Запуск dev-сервера:
```bash
npm run dev
```
Сборка:
```bash
npm run build
```
Превью сборки:
```bash
npm run preview
```
