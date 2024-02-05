import dts from "rollup-plugin-dts";

export default [
    {
        input: "temp/momoa.d.ts",
        output: [
            {
                file: "dist/momoa.d.ts",
                format: "esm"
            }
        ],
        plugins: [
            dts()
        ]
    },
    {
        input: "temp/momoa.d.ts",
        output: [
            {
                file: "dist/momoa.d.cts",
                format: "commonjs"
            }
        ],
        plugins: [
            dts()
        ]
    }
];
