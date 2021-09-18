// 1. Напишите тип функции, конкатенирующей две строки
// concat('Hello ', 'World') // -> Hello World

const concat = (a: string, b: string): string => {
  return `${a} ${b}`
}