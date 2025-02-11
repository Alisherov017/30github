// ! Объединение двух типов с & (Intersection Types)
type User2 = {
  id: number;
  name: string;
};

type Permissions2 = {
  canEdit: boolean;
  canDelete: boolean;
};

type Admin = User2 & Permissions2;

const admin: Admin = {
  id: 1,
  name: "Ruslan",
  canEdit: true,
  canDelete: false,
};
