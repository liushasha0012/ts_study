function query(arr) {
    function myArray() {}
    if (Object.prototype.toString.call(arr).slice(8, -1) !== 'Array') {
        return console.error('must be an array')
    }
    myArray.prototype.list = [...arr];
    myArray.prototype.where = function (cb) {
        this.list = this.list.filter(cb);
        return this;
    }
    myArray.prototype.orderBy = function (key, desc = false) {
        this.list = desc ? this.list.sort((a, b) => b[key] - a[key]) : this.list.sort((a, b) => a[key] - b[key]);
        return this;
    };
    myArray.prototype.groupBy = function (key) {
        let ls = [];
        let group = ls.reduce((pre, item) => {
            pre[item[key]] = [...(pre[item[key]] || []), item];
            return pre;
        }, {});
        list = [];
        for (let key in group) {
            this.list = list.push(group[key]);
        }
        return this;
    };
    myArray.prototype.execute = function () {
        return this.list;
    };
    return myArray.prototype;
}
const data = [
    { name: 'foo', age: 16, city: 'shanghai' },
    { name: 'bar', age: 24, city: 'hangzhou' },
    { name: 'fiz', age: 22, city: 'shanghai' },
    { name: 'baz', age: 19, city: 'hangzhou' }
    ];

let res = query(data)
    .where((item) => item.age > 18)
    .orderBy("age", true)
    .groupBy("city")
    .execute();
console.log(res);