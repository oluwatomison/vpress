import AppSelect from './component/appSelect';

const product = [{key: 'Product type', title: 'Product type'}];
const location = [{key: 'location', title: 'location'}];

const FilterContent = (props) => {
  const {showCompanyFilter, showMonthFilter, onSubmit, search} = props;
  return (
    <div className="sm:flex sm:justify-between">
      <div>
        <input
          className="bg-[#f3f2f2] focus:outline-none text-[#000] text-[12px] h-[40px] w-full sm:w-[300px] md:w-[350px] lg:w-[350px] xl:w-[400px] 2xl:w-[400px]  px-4 rounded form-input border-none"
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          onChange={onSubmit}
          value={search}
        />
      </div>
      <div className="flex pt-5 sm:pt-0 md:pt-0 lg:pt-0 xl:pt-0 2xl:pt-0">
        {showCompanyFilter && (
          <div>
            <AppSelect items={product} />
          </div>
        )}
        {showMonthFilter && (
          <div className="ml-4 mr-4">
            <AppSelect items={location} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterContent;
