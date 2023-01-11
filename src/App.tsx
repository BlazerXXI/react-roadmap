import React from "react";
import Component from "./components/Component";

function App() {
  const linkHeader = "https://reactjs.org/";
  return (
    <div className="App">
      <header className="header">
        <a href={linkHeader}>
          <h1>Learn React</h1>
        </a>
      </header>
      <main>
        <Component
          link="https://ru.reactjs.org/docs/faq-state.html"
          name="Состояние компонента"
        />
        <Component link="https://ru.reactjs.org/docs/forms.html" name="Формы" />
        <Component
          link="https://ru.reactjs.org/docs/state-and-lifecycle.html"
          name="Состояние и жизненный цикл"
        />
        <Component
          link="https://ru.reactjs.org/docs/hooks-reference.html#usestate"
          name="useState"
        />
        <Component
          link="https://ru.reactjs.org/docs/hooks-reference.html#useeffect"
          name="useEffect"
        />
        <Component
          link="https://ru.reactjs.org/docs/hooks-overview.html#building-your-own-hooks"
          name="Создание собственных хуков"
        />
        <Component
          link="https://ru.reactjs.org/docs/hooks-reference.html#usecontext"
          name="useContext"
        />
        <Component
          link="https://ru.reactjs.org/docs/context.html#gatsby-focus-wrapper"
          name="Контекст"
        />
        <Component
          link="https://ru.reactjs.org/docs/hooks-reference.html#useref"
          name="useRef"
        />
        <Component
          link="https://beta.reactjs.org/reference/react/useMemo"
          name="useMemo"
        />
        <Component
          link="https://metanit.com/web/react/4.1.php"
          name="Маршрутизация"
        />
        <Component
          link="https://reactrouter.com/en/main/start/tutorial"
          name="React Router v6.6.1"
        />
        <Component
          link="https://reactrouter.com/en/main/router-components/browser-router"
          name="<BrowserRouter>"
        />
        <Component
          link="https://reactrouter.com/en/main/components/routes"
          name="<Routes>"
        />
        <Component
          link="https://reactrouter.com/en/main/components/nav-link#navlink"
          name="<NavLink>"
        />
        <Component
          link="https://reactrouter.com/en/main/components/link"
          name="<Link>"
        />
        <Component
          link="https://metanit.com/web/react/4.2.php"
          name="Дочерние маршруты"
        />
        <Component
          link="https://dev-gang.ru/article/programmnaja-navigacija-s-ispolzovaniem-react-router-lzmorueggt/"
          name="Программная навигация с использованием React Router"
        />
        <Component
          link="https://metanit.com/web/react/4.6.php"
          name="Парсинг строки запроса"
        />
        <Component
          link="https://habr.com/ru/company/otus/blog/574428/"
          name="React Router Hooks: Изучение принципов их работы"
        />
        <Component
          link="https://ru.reactjs.org/docs/code-splitting.html"
          name="Разделение кода"
        />
        <Component
          link="https://redux.js.org/tutorials/essentials/part-1-overview-concepts"
          name="Redux"
        />
      </main>
    </div>
  );
}

export default App;
