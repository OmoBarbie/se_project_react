const baseUrl = "http://localhost:3001";

const request = (url, options) => {
  return fetch(url, options).then((res) => {
    if (!res.ok) return Promise.reject(`Error: ${res.status}`);

    return res.status === 204 ? Promise.resolve() : res.json();
  });
};

export const getItems = () => {
  return request(`${baseUrl}/items`);
};

export const addItem = ({ name, imageUrl, weather }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
};

export const deleteItem = (id) => {
  return request(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
};
