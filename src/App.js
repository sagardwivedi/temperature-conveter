import { useState } from "react";
import Input from "./components/Input";

function App() {
    const [temperature, setTemperature] = useState("");
    const [type, settype] = useState("");
    const [result, setResult] = useState("");

    const convert = (e) => {
        e.preventDefault();
        if (type === "Cel") {
            const cel = Math.round((temperature - 32) * (5 / 9));
            setResult(cel + "°C");
        }
        if (type === "Fah") {
            const fah = Math.round(temperature * (9 / 5) + 32);
            setResult(fah + "°F");
        }
    };

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center bg-slate-400">
            <h1 className="text-4xl mb-20 font-bold">Converter</h1>
            <section className="w-[90%] max-w-lg rounded-2xl bg-white p-8  shadow-xl">
                <form>
                    <div className="space-y-4">
                        <div className="flex flex-col">
                            <label
                                htmlFor="temperature"
                                className="text-xl font-semibold text-gray-900"
                            >
                                Temperature
                            </label>
                            <Input
                                temperature={temperature}
                                setTemperature={setTemperature}
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="text-xl font-semibold text-gray-900">
                                Type
                            </label>
                            <select
                                className="mt-1 rounded-lg border border-gray-400 p-2 focus:outline-none"
                                value={type}
                                onChange={(e) => settype(e.target.value)}
                            >
                                <option value="">Select</option>
                                <option value="Fah">Fahrenheit</option>
                                <option value="Cel">Celsius</option>
                            </select>
                        </div>
                        <div>
                            <button
                                className="w-full rounded-lg border border-[#112691]/60 bg-[#112691]/60 px-4 py-2 text-xl text-white hover:bg-[#112691]/70"
                                onClick={convert}
                            >
                                Convert
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-1">
                        <hr className="h-0.5 mt-2 bg-black" />
                        <span className="text-center text-xl font-semibold text-gray-900">
                            Result
                        </span>
                        <span className="text-center text-xl">{result}</span>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default App;
