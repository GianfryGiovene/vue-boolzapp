/*
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
*/

// ---------- GLOBAL VARIABLES --------
const contacts= [
    {
        name: 'Michele',
        avatar: 'IMG/avatar_1.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                contextMenuBool: false
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: 'IMG/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                contextMenuBool: false
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                contextMenuBool: false
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: 'IMG/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                contextMenuBool: false
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                contextMenuBool: false
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: 'IMG/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                contextMenuBool: false
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: 'IMG/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                contextMenuBool: false
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: 'IMG/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                contextMenuBool: false
            }
        ],
    },
    {
        name: 'Federico',
        avatar: 'IMG/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                contextMenuBool: false
            }
        ],
    },
    {
        name: 'Davide',
        avatar: 'IMG/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                contextMenuBool: false
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                contextMenuBool: false
            }
        ],
    }
];
// ---------- / GLOBAL VARIABLES --------

// ---------- PROGRAM --------

const app = new Vue({
    el:"#app",
    data:{
        contacts,
        friendPointer: null, //sistemare logica per partire da schermata vuota (recap)
        message:'',
        search:'',
        // ancestorContacts: contacts,
    },
     
    methods:{
        setFriendPointer(i){

            this.friendPointer = i;
           
        },

        getLastMessage(index,array){
            return index === array.length-1  
        },
        
        messageSent(status){
            if(status!=='received'){
                return 'sent'
            }else{
                return 'received'
            }
        },

        selectedFriend(index){
            if(index === this.friendPointer){
                return 'selected'
            }else{
                return ''
            }
        },
        
        returnHoursFromString(allData){
            return allData.split('').slice(11,16).join('')
        },

        returnDataFromString(allData){
            return allData.split('').slice(0,10).join('')
        },

        newMessageSent(){
            const newMessageSent={
                date: '',
                message:'',
                status:'sent',
                contextMenuBool: false
            };
            newMessageSent.message=this.message;
            this.contacts[this.friendPointer].messages.push(newMessageSent);
            this.message='';
            setTimeout(()=>{
                const newMessageReceived={
                    date: '',
                    message:'',
                    status:'received',
                    contextMenuBool: false
                };
                newMessageReceived.message='ok!';
                this.contacts[this.friendPointer].messages.push(newMessageReceived);  
            },1000)
        },

        searchInFriends(){
            
            this.contacts.forEach(friend => { 
                if(!friend.name.toLowerCase().includes(this.search.toLowerCase())){
                    friend.visible=false;
                }else{
                    friend.visible=true;
                }             
            });
        },

        isSearched(friend){
            return friend.visible !== false
        },

        contextMenuShow(contextMenu){
            console.log('prima di entrare',contextMenu)
            if(contextMenu===false){
                contextMenu = true;   
                console.log(contextMenu);
            }else{
                contextMenu = false;
                console.log('fuori',contextMenu);             
            }
        },

    }
})




// ---------- / PROGRAM --------