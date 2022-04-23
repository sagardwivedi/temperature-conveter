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
        <div className="scrollbar-hide overflow-y-hidden">
            <div>
                <div className="backg flex h-screen w-full items-center justify-center bg-fixed">
                    <h1 className="animate-pulse text-8xl font-bold text-white">
                        Converter
                    </h1>
                </div>
            </div>
            <div className="flex h-screen items-center justify-center">
                <section className="w-[90%] max-w-lg rounded-xl bg-transparent p-8">
                    <form>
                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label
                                    htmlFor="temperature"
                                    className="text-xl font-semibold text-gray-900"
                                >
                                    Temperature
                                </label>
                                <div className="flex items-center justify-between">
                                    <Input
                                        temperature={temperature}
                                        setTemperature={setTemperature}
                                    />
                                    <select className="mt-1 w-[10%] appearance-none rounded-lg border border-gray-400 p-2 text-center focus:outline-none">
                                        <option value="Cel">°C</option>
                                        <option value="Fah">F</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-xl font-semibold text-gray-900">
                                    Type
                                </label>
                                <select
                                    className="mt-1 appearance-none rounded-lg border border-gray-400 p-2 focus:outline-none"
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
                            <hr className="mt-2 h-0.5 bg-black" />
                            <span className="text-center text-xl font-semibold text-gray-900">
                                Result
                            </span>
                            <span className="text-center text-xl">
                                {result}
                            </span>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}

export default App;
