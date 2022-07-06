
const app = new Vue (
    {
        el:'#root',

        
        data: {  

            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],

            todoInput: '',
                       
        },

        methods: {
            whenClicked: function(valueIndex){
                this.todos.splice(valueIndex, 1);

            },

            inpuTextPush: function(elementToPush){
                if(!elementToPush == ''){
                    this.todos.push({ text: elementToPush });
                } else {
                    this.todoInput = '';
                }        

            },

        },


    },

);