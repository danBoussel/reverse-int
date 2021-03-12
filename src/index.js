// const helpFunc = (str) => {
//     if (str.length > 1) return str[str.length - 1] + helpFunc(str.slice(0, -1))
//     return str
// }
// module.exports = function reverse(n) {
//     if (n < 0) n = n * -1
//     return helpFunc(n.toString()) * 1
// }

module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1
    }
    return [n.toString()].join('').split('').reverse().join('') * 1

}