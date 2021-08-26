
//ForEach
function newForEach(array,callback) {
   let result = 0
   result = callback(array)
   return result
    
}
const aprovados = arr => {
    let chamarEles = arr
    chamarEles = chamarEles.forEach((el)=>{
        console.log(`${el} aprovado`) 
    })
    return chamarEles
}

newForEach(['Julia','Winds','Drake'],aprovados)

//Fill
function newFill(array,value,callback) {
    let result = 0
    result = callback(array,value)
    return result
}
const encher = (arr,el) => {
    let cheio = arr
    cheio = cheio.fill(el)
    console.log(cheio) 
}
newFill(["Banana", "Orange", "Apple", "Mango"],'kiwwi',encher)

//Map
function newMap(array,callback) {
    let result = 0
    result = callback(array)
    return result
}
const converterCelsius = arr => {
    let celsius = arr.map((el)=>{
        return Math.round( ( el - 32 ) * 5 / 9 )
    })
    return celsius
}
console.log(newMap([32,45],converterCelsius))

//Some
function newSome(array,callback) {
    let result = 0
    result = callback(array)
    return result
}
const isOdd = arr => {
   let imp = arr
   for(let i of imp){
       return i % 2 !== 0
   }
}
console.log(newSome([3,10,18],isOdd))

//Find
function newFind(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const isFruit = arr => {
    let algo = arr
    for(let i in algo){
        if(algo[i]==='Apple'){
            return algo[i]
        } else {
            return undefined
        }
    }
}
console.log(newFind(['Apple','Ball','Dog'],isFruit))

//findIndex
function newFindIndex(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const maiorDeIdade = arr => {
    let identificar = arr
    identificar = identificar.findIndex((el)=>{
        return el >= 18
    })
    return identificar
}
console.log(newFindIndex([12,15,16,30],maiorDeIdade))

//every
function newEvery(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const maiorQue20 = arr => {
    let maior = arr
    maior = maior.every((el)=>{
        return el >= 20
    })
    return maior
}
console.log(newEvery([12, 5, 8, 130, 44],maiorQue20))

//filter (falta esse)
function newFilter(array,callback) {
    let result = 0
    result = callback(array)
    return result
}
const remover = arr => {
    let removeAi = arr
    removeAi = removeAi.filter((el,index)=>{
        return removeAi.indexOf(el) === index
    })
    return removeAi
}
console.log(newFilter([12,3,44,12,30,4,30],remover))
//concat
function newConcat(array1,array2,callback) {
    let result = 0
    result = callback(array1,array2)
    return result
}

const concatenar = (arr1,arr2) => {
    let x = arr1
    let y = arr2
    return x.concat(y)
}

console.log(newConcat(['a','b'],[1,2],concatenar))

//Includes
function newIncludes(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const encontre = arr => {
    let result = arr
    for(let i of arr){
        return result.includes(i)
    }
}

console.log(newIncludes([1,2,3],encontre))

//IndexOf
function newIndexOf(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const indice = arr => {
    let result = arr
    let novo = []
    for(let i of arr){
        novo.push(result.indexOf(i))
    }
    return novo
}
console.log(newIndexOf(['a','game','memoria ram'],indice))

//join
function newJoin(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const juntaAi = arr => {
    let result = arr
    return result.join(' ')
}
console.log(newJoin(['Julia', 'Gama'],juntaAi))

//reduce
function newReduce(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const soma = arr => {
    let sum = arr
    sum = sum.reduce((acc,el)=> acc + el,0)
    return sum
}
console.log(newReduce([1, 2, 3, 4],soma))

//EXTRA
//Slice
function newSlice(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const extrair = arr => {
    let ar = arr
    return ar.slice(1,3)
}
console.log(newSlice(['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'],extrair))

//Flat

function newFlat(array,callback) {
    let result = 0
    result = callback(array)
    return result
}
const juntaIsso = arr => {
    let arrNovo = arr
    arrNovo = arr.flat()
    return arrNovo
}
console.log(newFlat([1, 2, [3, 4, [5, 6]]],juntaIsso))
//flatMap
function newFlatMap(array,callback) {
    let result = 0
    result = callback(array)
    return result
}

const mesclar = arr => {
    let arr1 = arr

    arr1 = arr1.map(x => [x ** 2])

    arr1 = arr1.flatMap(x => [x**2])

    return arr1
}

console.log(newFlatMap([1, 2, 3, 4], mesclar))

//ArrayOf
function newArrayOf(x,y,z,callback) {
    let result = 0
    result = callback(x,y,z)
    return result
}
const arrOf = (el1,el2,el3) => {
    let arr = Array.of(el1,el2,el3)
    return arr
}
console.log(newArrayOf('memoria','js','coding',arrOf))