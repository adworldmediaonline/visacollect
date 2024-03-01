export const LinkText = ({ text, href }) => (
    <Link
        className="inline-flex items-center justify-center gap-1 text-lg font-semibold text-primary"
        href={href}
    >
        {text} <FaLongArrowAltRight />
    </Link>
);
