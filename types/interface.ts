export type UserType = {
  id: string;
  aamardokanId: string;
  phone: string;
  email: string;
  name: string;
  role?: "Admin" | "Manager" | "CustomerSupport";
} | null;
