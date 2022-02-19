import context from 'jest-plugin-context';

import { fetchSearchedMembers } from './api';

import members from '../members';

describe('api', () => {
  describe('fetchSearchedMembers', () => {
    beforeEach(() => {
      global.fetch = jest.fn().mockResolvedValue({
        async json() { return members; },
      });

      global.JSON.stringify = jest.fn().mockResolvedValue();
    });

    it('set SearchedMembers', async () => {
      const searchedMember = await fetchSearchedMembers('이명박');

      expect(searchedMember).toEqual(members);
    });

    context('when got an empty list from fetchSearchedMembers', () => {
      beforeEach(() => {
        global.fetch = jest.fn().mockRejectedValue({
          async json() {
            return ({
              searchedMembers: [{ key: 1, name: '서버 오류', error: 1 }],
            });
          },
        });
      });

      it('set a error message in searchedMembers of state', async () => {
        const searchedMember = await fetchSearchedMembers(undefined);

        expect(searchedMember).toEqual({
          searchedMembers: [{ key: 1, name: '서버 오류', error: 1 }],
        });
      });
    });
  });
});
