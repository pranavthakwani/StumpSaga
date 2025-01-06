const transformedGrounds = Ground.map(({ id, title, price, image01, category, desc }) => ({
    id,
    title,
    price,
    image: image01, // Using only image01 for simplicity, you can modify this if needed
    category,
    desc,
  }));
  
  export default transformedGrounds;
  