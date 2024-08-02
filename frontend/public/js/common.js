export async function LOG(func, ...args) {
  console.log(`==========${func.name}==========`);
  return await func(...args);
}
