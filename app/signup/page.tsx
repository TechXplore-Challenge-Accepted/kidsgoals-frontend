import Link from "next/link";

const SignUpPage = () => {
  return (
    <section className="flex w-full min-h-screen flex-col items-center justify-center p-24 bg-slate-700">
      <div className="w-[400px] h-[600px] bg-white rounded-md py-4 px-10">
        <Link href="/">
          <p>Back</p>
        </Link>
        <div className="w-full flex flex-col items-center pt-6 pb-5">
          <h1 className="mt-5 mb-2 text-2xl font-semibold">Register:</h1>
        </div>
        <form className="w-full flex flex-col gap-4 py-4">
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
            required
            className="text-base p-2 bg-[#d5dfe5] rounded-md"
          />
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
            required
            className="text-base p-2 bg-[#d5dfe5] rounded-md"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
            className="text-base p-2 bg-[#d5dfe5] rounded-md"
          />
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
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="Confirm Password"
            required
            className="text-base p-2 bg-[#d5dfe5] rounded-md"
          />
          <button
            type="submit"
            className="bg-[#3c3cdf] text-white rounded-xl h-10"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default SignUpPage;
