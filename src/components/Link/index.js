import NextLink from "next/link";

export default function NextLinkComponent({ children, href, ...props }) {
    return <NextLink href={href}>{children}</NextLink>;
}
