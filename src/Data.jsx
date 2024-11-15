import { FiPhoneIncoming, FiPhoneOutgoing} from "react-icons/fi";

const chats = [
    {
        img:'assets/img/download (1).jpeg',
        name:'Ali',
        message: 'Hello dear',
        seen:'2:10 PM',

        messages: [
            { type: 'received', text: 'Hello dear' },
            { type: 'sent', text: 'How are you?' },
            { type: 'received', text: 'I am fine, thanks!' }
        ]
    },
    {
        img:'assets/img/download (2).jpeg',
        name:'Usman',
        message: 'How are you Usman?',
        seen:'3:14 PM',
        messages: [
            { type: 'received', text: 'How are you Usman?' },
            { type: 'sent', text: 'I am good, and you?' },
            { type: 'received', text: 'Doing well, thanks!' }
        ]
    },
    {
        img:'assets/img/download (3).jpeg',
        name:'Hassan',
        message: 'Hy Hassan are you free?',
        seen:'1:19 PM',
        messages: [
            { type: 'received', text: 'Yes i am free ' },
            { type: 'sent', text: 'and you ?' },
            { type: 'received', text: 'Let\'s catch up!' }
        ]
    },
    {
        img:'assets/img/download (4).jpeg',
        name:'Ahmad',
        message:'What are you doing?',
        seen:'4:26 PM',
        messages: [
            { type: 'received', text: 'I am watching cricket match' },
            { type: 'sent', text: 'I call you ' },
            { type: 'received', text: 'brother reply me' }
        ]
    },
    {
        img:'assets/img/download (5).jpeg',
        name:'Hamza',
        message:'I am waiting for you',
        seen:'8:43 PM',
        messages: [
            { type: 'received', text: 'why you are waiting for me' },
            { type: 'sent', text: 'Yes, what\'s up?' },
            { type: 'received', text: 'Let\'s catch up!' }
        ]
    },
    {
        img:'assets/img/download (6).jpeg',
        name:'Salman',
        message:'How are you Salman',
        seen:'5:36 PM' ,
        messages: [
            { type: 'received', text: 'i am fine and you ?' },
            { type: 'sent', text: 'Yes, what\'s up?' },
            { type: 'received', text: 'you help me ' }
        ]
    },
    {
        img:'assets/img/download (7).jpeg',
        name:'Umair',
        message:'What are you doing?',
        seen:'7:52 PM',
        messages: [
            { type: 'received', text: 'i play football match' },
            { type: 'sent', text: 'you playe football with me?' },
            { type: 'received', text: 'Reply me fast ' }
        ]
    },
    {
        img:'assets/img/download (8).jpeg',
        name:'Zain',
        message:'Hello dear',
        seen:'6:24 PM',
        messages: [
            { type: 'received', text: 'Hello dear' },
            { type: 'sent', text: 'How are you?' },
            { type: 'received', text: 'I am fine, thanks!' }
        ]
    },
    {
        img:'assets/img/download (9).jpeg',
        name:'Umer',
        message:'Hy Umer are you free',
        seen:'2:33 PM',
          messages: [
            { type: 'received', text: 'Yes i am free ' },
            { type: 'sent', text: 'and you ?' },
            { type: 'received', text: 'Let\'s catch up!' }
        ]
    },
    {
        img:'assets/img/download (10).jpeg',
        name:'Abubaker',
        message:'What are you doing?',
        seen:'9:45 PM',
        messages: [
            { type: 'received', text: 'I am watching cricket match' },
            { type: 'sent', text: 'I call you ' },
            { type: 'received', text: 'brother reply me' }
        ]
    },
    {
        img:'assets/img/download (11).jpeg',
        name:'Jawad',
        message:'How are you Jawad?',
        seen:'4:13 PM',
        messages: [
            { type: 'received', text: 'i am fine and you ?' },
            { type: 'sent', text: 'Yes, what\'s up?' },
            { type: 'received', text: 'you help me ' }
        ]
    },
    {
        img:'assets/img/download (3).jpeg',
        name:'Hassan',
        message: 'Hy Hassan are you free?',
        seen:'1:19 PM',
        messages: [
            { type: 'received', text: 'Yes i am free ' },
            { type: 'sent', text: 'and you ?' },
            { type: 'received', text: 'Let\'s catch up!' }
        ]
    },
    {
        img:'assets/img/download (8).jpeg',
        name:'Zain',
        message:'Hello dear',
        seen:'6:24 PM',
        messages: [
            { type: 'received', text: 'Hello dear' },
            { type: 'sent', text: 'How are you?' },
            { type: 'received', text: 'I am fine, thanks!' }
        ]
    },
    {
        img:'assets/img/download (2).jpeg',
        name:'Usman',
        message: 'How are you Usman?',
        seen:'3:14 PM',
        messages: [
            { type: 'received', text: 'How are you Usman?' },
            { type: 'sent', text: 'I am good, and you?' },
            { type: 'received', text: 'Doing well, thanks!' }
        ]
    },
]
const calls = [
   
    {
        img:'assets/img/download (5).jpeg',
        name:'Hamza',
        calls:<FiPhoneIncoming />,
        message:'Incoming',
        seen:'10/13/2024'
    },
    {
        img:'assets/img/download (6).jpeg',
        name:'Salman',
        calls:<FiPhoneOutgoing />,
        message:'Outgoing',
        seen:'10/12/2024'
        
    },
    {
        img:'assets/img/download (7).jpeg',
        name:'Umair',
        calls:<FiPhoneIncoming />,
        message:'Incoming',
        seen:'10/9/2024'
        
    },
    {
        img:'assets/img/download (8).jpeg',
        name:'Zain',
        calls:<FiPhoneOutgoing />,
        message:'Outgoing',
        seen:'10/8/2024'
        
    },
    {
        img:'assets/img/download (9).jpeg',
        name:'Umer',
        calls:<FiPhoneIncoming />,
        message:'Incoming',
        seen:'10/7/2024'
        
    },
    {
        img:'assets/img/download (10).jpeg',
        name:'Abubaker',
        calls:<FiPhoneOutgoing />,
        message:'Outgoing',
        seen:'10/6/2024'
        
    },
    {
        img:'assets/img/download (11).jpeg',
        name:'Jawad',
        calls:<FiPhoneIncoming />,
        message:'Incoming',
        seen:'10/5/2024'
        
    },
    {
        img:'assets/img/download (1).jpeg',
        name:'Ali',
        calls:<FiPhoneIncoming />,
        message:'Outgoing',
        seen:'10/5/2024'
        
    },
    {
        img:'assets/img/download (2).jpeg',
        name:'Usman',
        calls:<FiPhoneOutgoing />,
        message:'Outgoing',
        seen:'10/4/2024'
        
    },
    {
        img:'assets/img/download (3).jpeg',
        name:'Hassan',
        calls:<FiPhoneIncoming />,
        message:'Incoming',
        seen:'9/3/2024'
    },
    {
        img:'assets/img/download (4).jpeg',
        name:'Ahmad',
        calls:<FiPhoneOutgoing />,
        message:'Outgoing',
        seen:'9/8/2024'
    },
]

export {chats,calls}