import Link from "next/link";

type Props = {
    href: string,
    isExternal?: boolean,
    children: React.ReactNode
}

export const FooterLink = ({ href, isExternal, children }: Props) => {
    const Component = isExternal
        ? ({ ...props }) => (
            <a {...props} target="_blank">
                {children}
            </a>
        )
        : ({ ...props }: Props) => <Link {...props}>{children}</Link>;
        
    return <Component href={href}>{children}</Component>;
}
