const details = (state={
  data: {
    author: {},
    replies: [],
    reply_count: 0,
    create_at: '',
    good: true
  },
  loading: true
}, action) => {
  switch(action.type){
    case 'DETAILS_UPDATE': 
      return {
        data: state.data,
        loading: true,
      }
    case 'DETAILS_UPDATE_SUCCESS':
      return {
        data: action.data.data,
        loading: false
      }
    case 'DETAILS_UPDATE_ERROR':
      return {
        data: {
          author: {},
          replies: [],
          reply_count: 0,
          create_at: '',
          good: true
        },
        loading: true
      }
    default: return state
  }
}
export default details