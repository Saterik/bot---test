/**
 * База знаний — жёсткий регламент ответов бота.
 * Бот ОБЯЗАН отвечать ТОЛЬКО на основе этих фактов.
 * Любая информация, которой нет здесь — не существует для бота.
 */

export const KNOWLEDGE_BASE = {
  product: {
    name: 'Наушники X1',
    price: 2490,
    currency: '₽',
    inStock: true,
  },

  delivery: {
    method: 'Курьер',
    timing: 'На следующий день',
    timeSlot: 'Слот с 18:00 до 21:00',
  },

  returns: {
    periodDays: 14,
    refundMethod: 'На ту же карту',
    refundTiming: 'Деньги приходят за 3 рабочих дня',
    openedAllowed: true, // вскрытый товар без брака — тоже можно вернуть до 14 дней
  },

  defects: {
    process: 'Принимаем на экспертизу',
    immediateRefund: false, // деньги сразу не обещаем
  },

  discounts: {
    allowed: false, // скидок нет ни при каких условиях
  },
} as const;

/**
 * Структурированные факты для быстрого поиска и точных ответов.
 * Каждый факт — атомарная единица, которую бот может цитировать.
 */
export const FACTS = [
  {
    id: 'product.name',
    question: 'Как называется товар?',
    answer: 'Наушники X1',
  },
  {
    id: 'product.price',
    question: 'Сколько стоят наушники X1?',
    answer: '2 490 ₽',
  },
  {
    id: 'product.stock',
    question: 'Есть ли в наличии?',
    answer: 'Да, в наличии',
  },
  {
    id: 'delivery.method',
    question: 'Как доставляется заказ?',
    answer: 'Курьером',
  },
  {
    id: 'delivery.timing',
    question: 'Когда привездут заказ?',
    answer: 'На следующий день',
  },
  {
    id: 'delivery.timeSlot',
    question: 'В какое время курьер приедет?',
    answer: 'Слот с 18:00 до 21:00',
  },
  {
    id: 'returns.period',
    question: 'Срок возврата?',
    answer: '14 дней',
  },
  {
    id: 'returns.method',
    question: 'Куда вернут деньги?',
    answer: 'На ту же карту, с которой оплачивали',
  },
  {
    id: 'returns.timing',
    question: 'Через сколько придут деньги при возврате?',
    answer: 'За 3 рабочих дня',
  },
  {
    id: 'returns.opened',
    question: 'Можно вернуть вскрытые наушники?',
    answer: 'Да, вскрытый товар без брака тоже можно вернуть в течение 14 дней',
  },
  {
    id: 'defects.process',
    question: 'Что делать при браке?',
    answer: 'Принимаем на экспертизу. Деньги сразу не обещаем — сначала экспертиза',
  },
  {
    id: 'discounts.none',
    question: 'Есть ли скидки?',
    answer: 'Нет, скидок нет ни при каких условиях',
  },
] as const;

/**
 * Ключевые слова для быстрой классификации вопроса.
 * Помогает понять, о чём вопрос, и подтянуть релевантные факты.
 * Используем более точные маркеры для избежания ложных срабатываний.
 */
export const TOPIC_KEYWORDS = {
  product: ['товар', 'наушник', 'x1', 'цена', 'стоит', 'стоимость', 'наличие', 'в наличии'],
  delivery: ['доставк', 'привез', 'курьер', 'когда', 'время', 'слот', 'заказ'],
  returns: ['верну', 'возврат', 'деньг', 'карту', 'вскрыт', 'открыт', '14'],
  defects: ['брак', 'не работа', 'слома', 'дефект', 'экспертиз'],
  discounts: ['скидк', 'дешевле', 'промокод', 'акци', 'спецпредложен'],
} as const;

/**
 * Проверяет, содержит ли текст ключевое слово как отдельное слово
 * с учётом границ слов (пробелы, знаки препинания, начало/конец строки).
 */
export function hasKeyword(text: string, keyword: string): boolean {
  const normalized = text.toLowerCase();
  const kw = keyword.toLowerCase();
  // Проверка с границами слов: пробелы, знаки препинания, начало/конец строки
  const regex = new RegExp(`(^|[\\s.,!?;:()]+)${kw}([\\s.,!?;:()]+|$)`);
  return regex.test(normalized);
}

export type Fact = typeof FACTS[number];
export type Topic = keyof typeof TOPIC_KEYWORDS;