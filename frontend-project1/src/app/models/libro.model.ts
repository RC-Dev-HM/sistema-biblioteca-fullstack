export interface Libro {
    id?: number | string;
    titulo: string;
    autor: string;
    anioPublicacion: number;
    disponible?: boolean;
}