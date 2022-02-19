const BASE_URL = 'http://localhost:5000';

async function fetchSearchedMembers(keyword) {
  const url = `${BASE_URL}/search`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: keyword }),
  }).catch(() => ({
    json() {
      return {
        searchedMembers: [{ key: 1, name: '서버 오류', error: 1 }],
      };
    },
  }));

  const data = await response.json();

  return data;
}

export { fetchSearchedMembers };

// delete
export const test = 1;
