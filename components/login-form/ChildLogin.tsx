const ChildLogin = () => {
  return (
    <form className="w-full flex flex-col gap-4 py-4">
      <input
        type="number"
        name="phone"
        id="phone"
        placeholder="Phone"
        required
        className="text-base p-2 bg-[#d5dfe5] rounded-md"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        required
        className="text-base p-2 bg-[#d5dfe5] rounded-md"
      />
      <button type="submit" className="bg-[#3c3cdf] text-white rounded-xl h-10">
        Sign In
      </button>
    </form>
  );
};

export default ChildLogin;
