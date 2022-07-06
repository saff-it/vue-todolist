
const app = new Vue (
    {
        el:'#root',

        clickedElement: '',

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

                       
        },

        methods: {
            whenClicked: function(){
                clickedElement == 'd-none';

            },

        },


    },

);