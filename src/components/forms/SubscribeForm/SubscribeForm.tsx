import { FunctionComponent } from 'react';

const SubscribeForm: FunctionComponent = () => {
  return (
    <form name="subscribe">
      <div className="flex">
        <label htmlFor="email_field" className="sr-only">
          Subscribe and stay current.
        </label>
        <input
          className="bg-white rounded-none w-full rounded-l py-2 px-4 border-none outline-none flex-[1_1] text-sm font-medium"
          name="email"
          id="email_field"
          type="email"
          placeholder="Email"
        />
        <button
          className="text-sm font-bold bg-blue text-white rounded-r border-none outline-none py-3 px-5 cursor-pointer transition-colors duration-200 ease-in-out hover:bg-red ml-0"
          type="submit"
        >
          Submit →
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
