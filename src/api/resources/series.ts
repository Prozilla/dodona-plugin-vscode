import { Resource } from "./resource";

/**
 * A series on Dodona.
 */
export interface Series extends Resource {
    description: string;
    exercises: string;
    name: string;
    order: number;
}

export default Series;