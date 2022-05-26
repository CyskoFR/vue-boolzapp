//   VueJS
const app = new Vue({
    el: `#app`,
    data: {
        currentIndex: 0,
        messageInput: "",
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: '_5',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: '_6',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: '_7',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: '_8',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            },
        ]
    },
    methods: {
        contactIndex(index) {
            this.currentIndex = index;
        },
        getLastMessage(contact) {
            const lastMess = contact.messages[contact.messages.length - 1].message;
            return lastMess;
        },
        getLastMessageTime(contact) {
            const DateTime = luxon.DateTime;
            const mess = contact.messages[contact.messages.length - 1];
            return DateTime.fromFormat(mess.date, "dd/MM/yyyy HH:mm:ss").toFormat('HH:mm');
        },
        getUserLastMessageTime(messages) {
            const DateTime = luxon.DateTime;
            for (let i = messages.length - 1; i >= 0; i--) {
                if (messages[i].status === 'received') {
                    return `Ultimo accesso il ${DateTime.fromFormat(messages[i].date, "dd/MM/yyyy HH:mm:ss").toFormat('dd/MM/yyyy')} alle ${DateTime.fromFormat(messages[i].date, "dd/MM/yyyy HH:mm:ss").toFormat('HH:mm')}`;
                }
            }
        },
        convertMessageTime(date) {
            const DateTime = luxon.DateTime;
            const messTime = date;
            return DateTime.fromFormat(messTime, "dd/MM/yyyy HH:mm:ss").toFormat('HH:mm');
        },
        addNewMessage(index) {
            if(this.messageInput !== "") {
                let today = new Date();
                let date = ('0' + today.getDate()).slice(-2) +'/'+('0' + (today.getMonth()+1)).slice(-2)+'/'+today.getFullYear();
                let time = ('0' + today.getHours()).slice(-2) + ":"+('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2);
                let dateTime = `${date} ${time}`; 
                index.messages.push({
                    date: dateTime,
                    message: this.messageInput,
                    status: 'sent',
                })
                this.messageInput = "";
                setTimeout(index.messages.push({
                    date: dateTime,
                    message: "È molto bello.",
                    status: 'received',
                }), 3000);
            };
        },
    },
});
//   /VueJS
