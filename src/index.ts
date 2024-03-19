import "dotenv/config";
import debug from "debug";

const logger = debug("core");

interface Waste {
    name: string;
    location: string;
    kg: number;
}

function preencherMatriz(dados: any[]): any[][] {
    const matriz: any[][] = [];

    for (const propriedade of Object.keys(dados[0])) {
        matriz.push(dados.map((waste) => waste[propriedade]));
    }

    return matriz;
}

const test = () => {
    const wastes: Waste[] = [
        { name: "waste 1", location: "sala", kg: 50 },
        { name: "waste 2", location: "quarto", kg: 38.7 },
        { name: "waste 3", location: "casa", kg: 137 },
    ];

    const matrizPreenchida = preencherMatriz(wastes);
    logger("MATRIZ PREENCHIDA", matrizPreenchida);
};

const bootstrap = async () => {
    logger("Starting...");
    const start = Date.now();
    await test();
    logger("Done in %dms", Date.now() - start);
};

bootstrap().catch((err) => {
    logger("General fail: %O", err);
});
