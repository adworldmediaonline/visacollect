import Breadcrumb from '../Breadcrumbs';
import HomePageTitle from '../common/countryHomePage/HomePageTitle';
import LinkButton from '../ui/link-button';

export const Banner = ({
  validity,
  entries,
  price,
  link,
  pageTitle,
  pageName,
  pageTitleDescription,
  breadcrumb,
}) => {
  return (
    <div>
      <div className="mt-24">
        <Breadcrumb
          homeElement={'Home'}
          separator={<span> &gt; </span>}
          activeClasses="text-amber-500"
          // containerClasses="flex py-5 bg-gradient-to-r from-purple-600 to-blue-600"
          containerClasses="flex py-0 text-sm"
          listClasses="mx-2"
          capitalizeLinks
        />
      </div>
      <div className="container pt-8 pb-16">
        {/* Title and Apply Button Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          {/* Title and Description */}
          <div className="flex-1">
            <HomePageTitle pageTitle={pageTitle} />
            <p className="mt-3 text-base text-gray-600 leading-relaxed">
              {pageTitleDescription ?? ''}
            </p>
          </div>

          {/* Apply Now Button */}
          <div className="flex-shrink-0 lg:mt-4">
            <LinkButton
              href={link}
              className="px-10 py-4 text-base font-semibold bg-primary hover:bg-primary/90 text-white rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              Apply Now
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
};
