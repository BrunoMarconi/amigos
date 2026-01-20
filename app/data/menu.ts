// data/menu.ts
export interface Burger {
  id: number;
  nombre: string;
  precio: string;
  descripcion: string;
  imagen: string;
  categoria: 'burgers' | 'entrantes' | 'bebidas';
}

export const MENU_DATA: Burger[] = [
  {
    id: 1,
    nombre: "D1 Especial",
    precio: "12.50€",
    descripcion: "Doble smash burger con queso cheddar y salsa secreta.",
    imagen: "/hamburguesa1.webp",
    categoria: 'burgers'
  },
  {
    id: 2,
    nombre: "D1 Especial",
    precio: "12.50€",
    descripcion: "Doble smash burger con queso cheddar y salsa secreta.",
    imagen: "/hamburguesa2.webp",
    categoria: 'burgers'
  },
  {
    id: 3,
    nombre: "D1 Especial",
    precio: "12.50€",
    descripcion: "Doble smash burger con queso cheddar y salsa secreta.",
    imagen: "/hamburguesa3.webp",
    categoria: 'burgers'
  },
  {
    id: 4,
    nombre: "Nachos Distrito",
    precio: "8.90€",
    descripcion: "Nachos caseros con guacamole y carne picada.",
    imagen: "/entrante1.webp",
    categoria: 'entrantes'
  },
  {
    id: 5,
    nombre: "Nachos Distrito",
    precio: "8.90€",
    descripcion: "Nachos caseros con guacamole y carne picada.",
    imagen: "/entrante1.webp",
    categoria: 'entrantes'
  },
  {
    id: 6,
    nombre: "Nachos Distrito",
    precio: "8.90€",
    descripcion: "Nachos caseros con guacamole y carne picada.",
    imagen: "/entrante1.webp",
    categoria: 'entrantes'
  },
  // Añade aquí todas las que quieras...
];