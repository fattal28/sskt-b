const ITEMS_LOADED = 'CalendarState/ITEMS_LOADED';

function itemsLoaded(items) {
  return {
    type: ITEMS_LOADED,
    items,
  };
}

const names = ['Max', 'Philip', 'Alex', 'Irina', 'Vovan'];
const randomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const labels = ['Battersea Park', 'Regent\'s Park', 'Hyde Park', 'Chelsea Sports Centre', 'Ethos'];

export function loadItems(day) {
  // Do items loading here
  return (dispatch, getState) => {
    if (getState().calendar.items.length > 0) return;

    const items = {};

    for (let i = -15; i < 85; i += 1) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = new Date(time).toISOString().split('T')[0];
      if (!items[strTime]) {
        items[strTime] = [];
        const numItems = randomNumber(0, 1);
        for (let j = 0; j < numItems; j += 1) {
          items[strTime].push({
            name: `${names[randomNumber(0, 4)]}'s game`,
            time: `${randomNumber(9, 21)}:00`,
            labels: [labels[randomNumber(0, labels.length-1)]],
          });
        }
      }
    }

    const newItems = {};
    Object.keys(items).forEach(key => {
      newItems[key] = items[key];
    });

    console.log(newItems);

    dispatch(itemsLoaded(newItems));
  };
}

const defaultState = {
  items: [],
  isLoading: false,
};

export default function CalendarStateReducer(state = defaultState, action) {
  switch (action.type) {
    case ITEMS_LOADED:
      return Object.assign({}, state, {
        isLoading: true,
        items: action.items,
      });
    default:
      return state;
  }
}
