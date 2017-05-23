const GET_DATA = 'GET_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const GET_USER_INFORM = 'GET_USER_INFORM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'

export default {
  [GET_DATA] (state, payload) {
    if (payload.res.httpStatusCode === 200) {
      state.itemDetail = payload.res.topiclist
    }
  },
  [ADD_ITEMNUM] (state, payload) {
    state.itemNum += payload.num
  },
  [GET_USER_INFORM] (state, payload) {
    state.user_id = payload.res.users_id
  },
  [REMBER_ANSWER] (state, payload) {
    state.answerid[state.itemNum] = payload.id
  },
  [REMBER_TIME] (state, payload) {
    state.timer = setInterval(() => {
      state.allTime++
    }, 1000)
  },
  [INITIALIZE_DATA] (state) {
    state.itemNum = 1
    state.allTime = 0
  }
}
