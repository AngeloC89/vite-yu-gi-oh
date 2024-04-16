import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/",
  endPoint: {
    cards: "cardinfo.php",
    archetype: "archetypes.php",
  },
  options: {
    params:{
      num: 20,
      offset: 0,
      archetype: '',
      
    }
  },
  status:'',// get the value of select option of archetype
  archetypeSel:[],//charge all the archetypes on this array
  cards: [],//container the cards
  current_rows: 0,
  loading: false,
});

// "Noble Knight"
// "Alien"
// "Melodious"
