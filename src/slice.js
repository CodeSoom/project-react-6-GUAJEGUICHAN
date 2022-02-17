import { createSlice } from '@reduxjs/toolkit';
import members from './members';
import { getToday } from './utils';

export const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    date: getToday(),
    classes: {
      1: [1, 2, 3, 4, 5, 6, 7],
      2: [1, 2, 3, 4, 5],
      3: [1, 2, 3, 4],
    },
    theNumberOfMembers: undefined,
    members,
    checkedId: [],
    addMemberField: {
      name: '',
      gradeNumber: '',
      classNumber: '',
      isStudent: true,
      checkedToday: true,
    },
    errorMessage: [],
  },
  reducers: {
    setDate: (state, { payload: date }) => ({
      ...state,
      date,
    }),
    initiateChecks: (state) => ({
      ...state,
      members: state.members.map((member) => ({
        ...member,
        checkedToday: state.checkedId.includes(member.id),
      })),
    }),
    checkId: (state, { payload: member }) => {
      let checkedId;

      if (state.checkedId.includes(member.id)) {
        checkedId = state.checkedId.filter((id) => id !== member.id);
      } else {
        checkedId = [member.id, ...state.checkedId];
      }

      const checkedMembers = state.members.map((one) => ({
        ...one,
        checkedToday: !!checkedId.includes(one.id),
      }));

      return {
        ...state,
        members: checkedMembers,
        checkedId,
      };
    },
    changeAddMemberField: (state, { payload: { name, value } }) => ({
      ...state,
      addMemberField: {
        ...state.addMemberField,
        [name]: value,
      },
    }),
    clearAddMemberField: (state) => ({
      ...state,
      addMemberField: {
        ...state.addMemberField,
        name: '',
        gradeNumber: '',
        classNumber: '',
      },
    }),
    addMember: (state) => {
      let errorMessage = [];

      if (state.addMemberField.name === '') {
        errorMessage = [...errorMessage, 'name blank'];
      }

      if (state.addMemberField.gradeNumber === '') {
        errorMessage = [...errorMessage, 'gradeNumber blank'];
      }

      if (state.addMemberField.classNumber === '') {
        errorMessage = [...errorMessage, 'classNumber blank'];
      }

      state.members.forEach((member) => {
        if (member.name === state.addMemberField.name
          && member.gradeNumber === state.addMemberField.gradeNumber
          && member.classNumber === state.addMemberField.classNumber
        ) {
          errorMessage = [...errorMessage, 'duplicated'];
        }
      });
      if (errorMessage.length > 0) {
        return {
          ...state,
          errorMessage,
        };
      }

      return {
        ...state,
        members: [
          ...state.members,
          {
            ...state.addMemberField,
            id: state.members.length + 1,
          },
        ],
        checkedId: state.addMemberField.checkedToday
          ? [(state.members.length + 1), ...state.checkedId]
          : state.checkedId,
        errorMessage: [],
      };
    },
  },
});

export const {
  setDate,
  initiateChecks,
  checkId,
  changeAddMemberField,
  clearAddMemberField,
  addMember,
} = actions;

export default reducer;
