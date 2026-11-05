'use client';

import dynamic from 'next/dynamic';

// Динамический импорт для SSR-совместимости
const ChatBot = dynamic(() => import('@/components/ChatBot'), {
  ssr: false,
  loading: () => (
    <div className="chat-skeleton" aria-busy="true" aria-label="Загрузка чата">
      <div className="skeleton-header" />
      <div className="skeleton-messages">
        <div className="skeleton-message" />
        <div className="skeleton-message short" />
        <div className="skeleton-message" />
      </div>
      <div className="skeleton-input" />
    </div>
  ),
});

export default function Home() {
  return (
    <main className="page" role="main">
      <div className="page-container">
        {/* Hero / Intro */}
        <header className="page-header">
          <div className="header-content">
            <div className="badge">Регламент X1</div>
            <h1 className="page-title">Ассистент поддержки</h1>
            <p className="page-subtitle">
              Отвечаю строго по регламенту магазина. Никаких скидок, никаких выдумок.
            </p>
            <dl className="regiment-summary" aria-label="Краткий регламент">
              <div className="regiment-item">
                <dt>Товар</dt>
                <dd>Наушники X1 — 2 490 ₽, в наличии</dd>
              </div>
              <div className="regiment-item">
                <dt>Доставка</dt>
                <dd>Курьер на следующий день, 18:00–21:00</dd>
              </div>
              <div className="regiment-item">
                <dt>Возврат</dt>
                <dd>14 дней, на карту за 3 рабочих дня. Вскрытый без брака — тоже можно.</dd>
              </div>
              <div className="regiment-item">
                <dt>Брак</dt>
                <dd>Только экспертиза. Деньги сразу не обещаем.</dd>
              </div>
              <div className="regiment-item no-discount">
                <dt>Скидки</dt>
                <dd>Нет ни при каких условиях</dd>
              </div>
            </dl>
          </div>
        </header>

        {/* Chat */}
        <section className="chat-section" aria-labelledby="chat-heading">
          <h2 id="chat-heading" className="visually-hidden">Чат поддержки</h2>
          <ChatBot />
        </section>

        {/* Footer info */}
        <footer className="page-footer">
          <p className="footer-text">
            Бот работает в детерминированном режиме. Ответы основаны <strong>только</strong> на регламенте выше.
            LLM не используется — гарантия нуля галлюцинаций.
          </p>
          <p className="footer-version">v1.0.0 · Green API Test</p>
        </footer>
      </div>
    </main>
  );
}