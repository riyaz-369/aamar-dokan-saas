/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isServiceIdExist(array: any[], idToCheck: string) {
  // console.log("form utils is:", array);
  if (!Array.isArray(array) || !idToCheck) {
    return null;
  }
  return array.some((item) => item.serviceId === idToCheck);
}

export function isPackageIdExist(array: any[], idToCheck: string) {
  // console.log("form utils is:", array);
  if (!Array.isArray(array) || !idToCheck) {
    return null;
  }
  return array.some((item) => item.packageId === idToCheck);
}
