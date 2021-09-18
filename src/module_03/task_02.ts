// 2. Напишите интерфейс для описания следующих данных

interface IMyHometask {
  howIDoIt: string
  simeArray: [string, string, number]
  withData: [{
    howIDoIt: string
    simeArray: [string, number]
  }]
}

const MyHometask: IMyHometask = {
  howIDoIt: "I Do It Wel",
  simeArray: ["string one", "string two", 42],
  withData: [{
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", 23]
  }],
}