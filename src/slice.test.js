import context from 'jest-plugin-context';

import given from 'given2';

import reducer, {
  setDate,
  initiateChecks,
  checkId,
  addMember,
  changeAddMemberField,
  clearAddMemberField,
} from './slice';

describe('slice', () => {
  given('initialState', () => ({
    date: undefined,
    classes: {
      1: [1, 2, 3, 4, 5, 6, 7],
    },
    theNumberOfMembers: undefined,
    members: given.members,
    checkedId: given.checkedId,
    addMemberField: given.addMemberField,
    errorMessage: [],
  }));

  describe('setDate', () => {
    it('', () => {
      const state = reducer(given.initialState, setDate('220205'));

      expect(state.date).toBe('220205');
    });
  });

  describe('initiateChecks', () => {
    given('members', () => ([{
      id: 1,
      isStudent: true,
      name: '이승만',
      gradeNumber: 1,
      classNumber: 1,
      checkedToday: true,
    }]));

    context('checkedId includes the id', () => {
      given('checkedId', () => ([1]));

      it('checkedToday turns true', () => {
        const state = reducer(given.initialState, initiateChecks);

        expect(state.members[0].checkedToday).toBe(true);
      });
    });
    context('checkId doesn`t include the id', () => {
      given('checkedId', () => ([2]));
      it('checkedToday turns false', () => {
        const state = reducer(given.initialState, initiateChecks);

        expect(state.members[0].checkedToday).toBe(false);
      });
    });
  });

  describe('checkId', () => {
    given('checkedMember', () => ({
      id: 1,
      isStudent: true,
      name: '이승만',
      gradeNumber: 1,
      classNumber: 1,
      checkedToday: true,
    }));
    given('notCheckedMember', () => ({
      id: 2,
      isStudent: true,
      name: '윤보선',
      gradeNumber: 1,
      classNumber: 1,
      checkedToday: undefined,
    }));
    given('members', () => ([
      given.checkedMember,
      given.notCheckedMember,
    ]));

    given('checkedId', () => ([1]));

    context('the checkedId contains the id', () => {
      it('get rid of the id from the checkedId', () => {
        const state = reducer(given.initialState, checkId(given.checkedMember));

        expect(state.checkedId.includes(given.checkedMember.id)).toBe(false);
      });
    });

    context('the checkedId doesn`t contain the id', () => {
      it('add the id in the checkedId', () => {
        const state = reducer(given.initialState, checkId(given.notCheckedMember));

        expect(state.checkedId.includes(given.notCheckedMember.id)).toBe(true);
      });
    });
  });

  describe('changeAddMemberField', () => {
    it('change name ', () => {
      const state = reducer(given.initialState, changeAddMemberField({ name: 'name', value: '이승만' }));
      expect(state.addMemberField.name).toBe('이승만');
    });
  });

  describe('clearAddMemberField', () => {
    it('clear addMemberField', () => {
      const state = reducer(given.initialState, clearAddMemberField());

      expect(state.addMemberField.name).toBe('');
      expect(state.addMemberField.gradeNumber).toBe('');
      expect(state.addMemberField.classNumber).toBe('');
    });
  });

  describe('addMember', () => {
    given('checkedId', () => []);

    given('addMemberField', () => (
      {
        name: '',
        gradeNumber: '',
        classNumber: '',
        isStudent: true,
        checkedToday: true,
      }));

    given('members', () => ([{
      id: 1,
      isStudent: true,
      name: '이승만',
      gradeNumber: 1,
      classNumber: 1,
      checkedToday: undefined,
    }]));

    context('has all info for adding a member', () => {
      given('addMemberField', () => (
        {
          name: '박성일',
          gradeNumber: '1',
          classNumber: '1',
          isStudent: true,
          checkedToday: true,
        }));
      it('1 of the number of the members increases to 2', () => {
        const state = reducer(given.initialState, addMember());

        expect(state.members.length).toBe(2);
      });
    });

    context('addMemberFeild has had checkedToday true', () => {
      given('addMemberField', () => (
        {
          ...given.addMemberFeild,
          checkedToday: true,
        }));
      it('checkedId`length increases to 1', () => {
        const state = reducer(given.initialState, addMember);

        expect(state.checkedId.length).toBe(1);
      });
    });

    context('addMemberFeild has had checkedToday true', () => {
      given('addMemberField', () => (
        {
          ...given.addMemberFeild,
          checkedToday: false,
        }));
      it('checkedId`length stay 0', () => {
        const state = reducer(given.initialState, addMember);

        expect(state.checkedId.length).toBe(0);
      });
    });
    context('has the same member on the list', () => {
      given('addMemberField', () => ({
        name: '이승만',
        gradeNumber: 1,
        classNumber: 1,
        isStudent: true,
        checkedToday: true,
      }));
      it('get `duplicated` errorMessage', () => {
        const state = reducer(given.initialState, addMember());
        expect(state.errorMessage.includes('duplicated')).not.toBeNull();
      });
    });
    context('has the name textbox empty', () => {
      given('addMemberField', () => ({
        name: '',
        gradeNumber: 1,
        classNumber: 1,
        isStudent: true,
        checkedToday: true,
      }));
      it('get `name blank` errorMessage', () => {
        const state = reducer(given.initialState, addMember());
        expect(state.errorMessage.includes('name blank'));
      });
    });
    context('has the gradeNumber textbox empty', () => {
      given('addMemberField', () => ({
        name: '이승만',
        gradeNumber: '',
        classNumber: 1,
        isStudent: true,
        checkedToday: true,
      }));
      it('get `gradeNumber blank` errorMessage', () => {
        const state = reducer(given.initialState, addMember());
        expect(state.errorMessage.includes('gradeNumber blank'));
      });
    });
    context('has the classNumber textbox empty', () => {
      given('addMemberField', () => ({
        name: '이승만',
        gradeNumber: 1,
        classNumber: '',
        isStudent: true,
        checkedToday: true,
      }));
      it('get `classNumber blank` errorMessage', () => {
        const state = reducer(given.initialState, addMember());
        expect(state.errorMessage.includes('classNumber blank'));
      });
    });
  });
});
