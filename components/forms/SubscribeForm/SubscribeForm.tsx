import { FunctionComponent } from 'react';

const SubscribeForm: FunctionComponent = () => {
  return (
    <form className='class="mt-12 sm:max-w-lg sm:w-full sm:flex mb-12"'>
      <div className="min-w-0 flex-1">
        <label htmlFor="subscribe_field" className="sr-only">
          Subscribe and stay current.
        </label>
        <input
          type="email"
          name="subscribe"
          id="subscribe_field"
          className='class="block w-full border border-gray-500 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-red-600 focus:ring-red-600"'
          placeholder="Please subscribe."
        />
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-3">
        <button
          type="submit"
          className="block w-full rounded-md border border-transparent px-5 py-3 bg-red-600 text-base font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:px-10"
        >
          Subcribe →
        </button>
      </div>
    </form>
  );
};

export default SubscribeForm;
