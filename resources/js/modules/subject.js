/**
 * subject.js
 * 
 */

 const FETCH_SUBJECT_SUCCESS = 'subject/FETCH_SUBJECT_SUCCESS';
 const FETCH_SUBJECT_PENDING = 'subject/FETCH_PENDING';

 export const onPending = () => ({type: FETCH_SUBJECT_PENDING});

 const initialState = {
   isPending : false,
 };

 const subject = (state = initialState, action) => {
   switch (action.type) {
     case FETCH_SUBJECT_PENDING:
       return {
         ...state,
         isPending : true,
       };
      default:
        return state;
   }
 };

 export default subject;