function AgeResult({ result }) {
  if (!result) {
    return null;
  }
  return (
    <div className="mt-8 rounded-2xl bg-gray-900 p-6 text-white">
      <p className="text-sm uppercase tracking-widest text-indigo-300">Your Exact Age</p>
      <div className="mt-5 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-white/10 p-4 text-center">
          <p className="text-4xl font-bold">{result.years}</p>
          <p className="mt-2 text-gray-300">Years</p>
        </div>
        <div className="rounded-xl bg-white/10 p-4 text-center">
          <p className="text-4xl font-bold">{result.months}</p>
          <p className="mt-2 text-gray-300">Months</p>
        </div>
        <div className="rounded-xl bg-white/10 p-4 text-center">
          <p className="text-4xl font-bold">{result.days}</p>
          <p className="mt-2 text-gray-300">Days</p>
        </div>
      </div>
      <p className="mt-6 text-center text-lg font-semibold">{result.years} Years, {result.months} Months, {result.days} Days</p>
    </div>
  );
}
export default AgeResult;