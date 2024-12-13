export const products = async () => {
  try {
    const response = await fetch(
      `https://675b48e79ce247eb19362d2c.mockapi.io/api/v1/products`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const product = async (id) => {
  console.log(id);
  try {
    const response = await fetch(
      `https://675b48e79ce247eb19362d2c.mockapi.io/api/v1/products/${id}`
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const user = async (id) => {
  try {
    const response = await fetch(
      `https://675b48e79ce247eb19362d2c.mockapi.io/api/v1/login/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
