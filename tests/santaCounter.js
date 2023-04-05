export default function groupBy(values, iteratee) {
  const obj = {}

  for (const value of values) {
    const key = typeof iteratee === 'function'
    ? iteratee(values) // por si la propiedad es una funcion
    : value[iteratee]

    /* First function
    key in obj 
      ? obj[key].push(value) // si la key ya existe en el obj
      : (obj[key] = [value]) // si la key no existe en el obj
    */

    // Refactor.
    obj[key] ??= []
    obj[key].push(value)
  }

  return obj
}

/* Examples:
  groupBy([6.1, 4.2, 6.3], Math.floor)  => { 6: [6.1, 6.3], 4: [4.2]}
  groupBy(['one', 'two', 'three'], 'length') => { 3: { 'one', 'two'}, 5: { 'length'}}
*/