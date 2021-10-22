// Задача 2
// Задан массив [5,3,1,3,8,7,4,1,1,3]
// Cуть задачи отсортировать массив методом "бисерной сортировки"
// ожидаемый результат [8,7,5,4,3,3,3,1,1,1]

const arr = [5, 3, 1, 3, 8, 7, 4, 1, 1, 3]

function beadSort(arr) {
    if (!Array.isArray(arr)) {     //базовая проверка на то что принимаем массив
      return 'Argument must be ARRAY'
    }
    
   
    const result = []  //переменная под результат результат
    const maxElem = Math.max(...arr) //максимальное значение в массиве возможно надо через фор
    const matrix = [] //переменная под матрицу
    let matrixLine =[] //переменная ряд матрицы

    //Создаем матрицу
    for (let i = 0; i < arr.length; i += 1) {
      while (matrixLine.length <= i) {
        matrixLine.push(1)
      }

      if (matrixLine.length <= maxElem) {
        while(matrixLine.length <= maxElem) {
          matrixLine.push(0)
        }
        
        matrix.push(matrixLine)
        matrixLine = []
      }
    }
    
    // суммируем елементы мартрицы по столбцам
    for(let i = 0; i < matrix.length; i += 1) {
      let sum = 0

      for(let j = 0; j < matrix.length; j += 1) {
        sum += matrix[i][j]
      }
      
      result.push(sum)
    }
   
    console.log("beats => ", matrix); // смотрим матрицу

    return result.reverse()
}

console.log(beadSort(arr));
