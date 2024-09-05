const { createApp } = Vue

createApp({
  data() {
    return {
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020',
                        hour: '15:35',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        hour:'15:50',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        hour:'16:15',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020',
                        hour:'16:30',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020',
                        hour:'16:30',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020',
                        hour:'16:35',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020',
                        hour:'10:10',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020',
                        hour:'10:20',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020',
                        hour:'16:15',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020',
                        hour:'15:30',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        hour:'15:50',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020',
                        hour:'15:30',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        hour:'15:50',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020',
                        hour:'15:30',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        hour:'15:50',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020',
                        hour:'15:51',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020',
                        hour:'15:30',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        hour:'15:50',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020',
                        hour:'15:30',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020',
                        hour:'15:50',
                        message: 'Si, l\'ho già mangiata ieri, ma la mangio di nuovo volentieri!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020',
                        hour:'15:51',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        active:0,
        newMessage:'',
        searchValue:'',
    }
  },
  methods:{
    // funzione per prendere la data
    getDate(){
        const time = new Date();
        let fullDate = '';
        fullDate += time.getDate().toString().padStart(2, '0') + 
        '/' + (time.getMonth() + 1).toString().padStart(2, '0') + 
        '/' + time.getFullYear();
        return fullDate;
    },
    // funzione per prendere l'ora
    getHour(){
        const time = new Date();
        let hour = '';
        hour += time.getHours().toString().padStart(2, '0') + ':' 
        + time.getMinutes().toString().padStart(2, '0');
        return hour;
    },
    // funzione per inserire un nuovo messaggio, avendo una risposta dall' "utente" dopo 1s e mezzo
    addMessage(i){
        if(this.newMessage.trim() !== ''){
            this.contacts[i].messages.push({
            date: this.getDate(),
            hour: this.getHour(),
            message: this.newMessage,
            status: 'sent'
          }
        ),
        this.newMessage = '';

        setTimeout(() =>{
            this.contacts[i].messages.push({
                date: this.getDate(),
                hour: this.getHour(),
                message: 'OK',
                status: 'received'
            });
        }, 1500)
    }
  }} 
}).mount('#app')

