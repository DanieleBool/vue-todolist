const app = new Vue({
    el: '#root',
    data: {
        todosChristmas: [
            {
                task: "Non avrai altro Dio all'infuori di me",
                done: true,
            },
            {
                task: "Non nominare il nome di Dio invano.",
                done: true,
            },
            {
                task: "Ricordati di santificare le feste.",
                done: true,
            },
            {
                task: "Onora il padre e la madre.",
                done: false,
            },
            {
                task: "Non uccidere.",
                done: false,
            },
            {
                task: "Non commettere atti impuri",
                done: false,
            },
        ],

        inputValue: '',

    },

    methods: {
        addTodo: function(){
            if(this.inputValue != "" ){
                this.todosChristmas.push(this.inputValue);
                this.inputValue = "";
            }else if(this.inputValue = " "){
                alert('no')
            }else{

            }
        },

        removeTodo: function(index){
            this.todosChristmas.splice(index, 1);
        },

        doneJs: function(index){
            if(this.todosChristmas[index].done == true){
                // return false;
                this.todosChristmas[index].done = false;
            }else{
                this.todosChristmas[index].done = true;
            }
        },
    },
});