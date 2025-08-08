import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export function getMatricIdFromEmail(email) {
	if (typeof email !== 'string') return '';
	const [matricId] = email.split('@');
	return matricId || '';
}


export function checkRole(email){
  const emailPrefix = getMatricIdFromEmail(email);
  if( emailPrefix === 'admin' || emailPrefix === 'superuser') {
    return 'admin';
  }else{
    return 'user';
  }
}