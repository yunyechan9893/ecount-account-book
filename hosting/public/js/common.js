export async function LOG(func, ...args) {
  console.log(`==========${func.name}==========`);
  console.log(func, ...args);
  return await func(...args);
}
