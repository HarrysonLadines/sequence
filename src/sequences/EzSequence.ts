import Sequence from "../Sequence";
import Random from "../utils/Random";

export default class EzSequence extends Sequence {
    constructor() {
        super();
        const seed = Math.floor(Random.get() / 2) * 2;
        
        // Generar la secuencia multiplicando cada número por su adyacente
        this.values = [
            seed * (seed + 2),
            (seed + 2) * (seed + 4),
            (seed + 4) * (seed + 6),
            (seed + 6) * (seed + 8)
        ];
    }
}
