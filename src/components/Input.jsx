const Input = ({ temperature, setTemperature }) => {
    return (
        <>
            <input
                className="mt-1 rounded-lg border border-gray-400 p-2 placeholder:text-xl focus:outline-none"
                placeholder="Enter temperature"
                id="temperature"
                type="number"
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
            />
        </>
    );
};

export default Input;
