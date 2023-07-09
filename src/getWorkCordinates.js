export async function getWorkCordinattes(address) {
  let response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${address}&format=json&apiKey=4d9665516b5d4ef381855651a282c88e`
  );
  let result = await response.json();
  console.log(result);

  return result;
}
