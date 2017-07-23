var app = new Vue( {
    el:'#app',
    data: {
        message: "hello Vue!"
    }
} )
var app2 = new Vue( {
    el:'#app-2',
    data: {
        message: "hello man"
    }
} )
var app3 = new Vue( {
    el:'#app-3',
    data: {
        seen: true
    }
} )
var app4 = new Vue( {
    el: '#app-4',
    data: {
        lists: [
            {text: "hello"},
            {text: "world"},
            {text: "!"}
        ]
    }    
} )
var app5 = new Vue( {
    el:'#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split("").reverse().join('')
        }
    }
} )
var app6 = new Vue( {
    el:'#app-6',
    data: {
        message: 'Hello Vue.js'
    }
} )
Vue.component( 'todo-items', {
    template: "<li>this is a todo</li>"
} )
// 即使是直接使用todo-item 但任然要找到相应的DOM结构
var app7 = new Vue({
    el: "#app-7"
})
Vue.component( 'todo-item', {
    props: ['todo'],
    template: "<li>{{ todo.text }}</li>"
} )
var app8 = new Vue( {
    el: '#app-8',
    data: {
        list: [
            { text: 'HELLO' },
            { text: 'WORLD' },
            { text: '!' }
        ]
    }
} )