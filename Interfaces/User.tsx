export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  onDelete: (userId: number) => void;
  // You can add more properties as needed
}
