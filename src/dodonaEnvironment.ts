/**
 * All the supported Dodona environments.
 */
export enum DodonaEnvironments {
    DODONA = "https://dodona.ugent.be",
    NAOS = "https://naos.ugent.be"
}

/**
 * Type of the Dodona environments.
 */
export type DodonaEnvironment = keyof typeof DodonaEnvironments;

/**
 * Gets a DodonaEnvironment by its value.
 *
 * @param value the value to match
 * @return the DodonaEnvironment instance
 */
export function getDodonaEnvironment(value: string): DodonaEnvironment {
    if (value.includes("naos")) {
        return "NAOS";
    }

    return "DODONA";
}