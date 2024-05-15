type Props = {
    params: {slug: string};
};

export default function Page(props: Props) {
    return <div>{props.params.slug}</div>;
}
