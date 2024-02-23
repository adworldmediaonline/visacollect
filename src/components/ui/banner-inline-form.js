import Button from './button';

export default function BannerInlineForm() {
  return (
    <section className="text-gray-600 ">
      <div className="container px-5 mx-auto">
        <form className="flex flex-col items-end w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
          <div className="relative flex-grow w-full">
            <label for="full-name" className="text-sm leading-7 text-gray-600">
              Where am I from?
            </label>

            <select
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
              value=""
              onChange={e => {}}
            >
              <option value="" selected>
                Select
              </option>
            </select>
          </div>
          <div className="relative flex-grow w-full">
            <label for="email" className="text-sm leading-7 text-gray-600">
              Where am I Going?
            </label>
            <select
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full px-3 py-2 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200"
              value=""
              onChange={e => {}}
            >
              <option value="" selected>
                Select
              </option>
            </select>
          </div>
          <Button className="px-8">Go!</Button>
        </form>
      </div>
    </section>
  );
}
