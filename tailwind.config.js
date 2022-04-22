module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                lineInserted: {
                    "0%": { height: "0px" },
                    "100%": { height: "200px" },
                },
            },
            animation: {
                lineInserted: "lineInserted 0.3s",
            },
        },
    },
    plugins: [],
};
