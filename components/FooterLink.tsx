import Link from "next/link";

export const FooterLink: React.FC = ({ href, isExternal, children }) => {
    const Component: React.FC = isExternal
        ? ({ ...props }) => (
            <a {...props} target="_blank">
                {children}
            </a>
        )
        : ({ ...props }) => <Link {...props}>{children}</Link>;
    return <Component href={href}>{children}</Component>;
}
