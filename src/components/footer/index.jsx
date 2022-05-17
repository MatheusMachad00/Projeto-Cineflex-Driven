import { DivFooter, Img, Text, TextContainer } from "./style"

export default function Footer(props) {
    const { 
        title,
        posterURL,
        date,
        hour
    } = props;

    return (
        <DivFooter>
            <Img src={posterURL} alt={title} />
            <TextContainer>
                <Text>{title}</Text>
                {date ? <Text>{`${date} - ${hour}`}</Text> : ""}
            </TextContainer>
        </DivFooter>
    );
}
