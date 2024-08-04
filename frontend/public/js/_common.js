export async function LOG(func, ...args) {
	console.log(`==========${func.name}==========`);
	return await func(...args);
}

export function dateToString(date) {
	return `${date.getFullYear()}-${(date.getMonth() + 1)
		.toString()
		.padStart(2, 0)}-${date.getDate().toString().padStart(2, 0)}`;
}
