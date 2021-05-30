const { list } = require("../../../store/mysql")

const TABLA = 'post';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list(data) {
        return store.list(TABLA);
    }

    function insert() {
        return store.insert(TABLA);
    }

    return {
        list,
        insert,
    };
}

