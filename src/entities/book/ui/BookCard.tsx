import {Card, Space} from "antd";
import {Book} from "@/shared/types/book";
import { Typography } from "antd";

interface IBookCardProps {
    book: Book;
}

export const BookCard = (props:IBookCardProps) => {
    const {book} = props;
    return (
            <Card title={book.volumeInfo.title} extra={<a href="#">More</a>} style={{ width: 300 }}>
                <Typography.Paragraph ellipsis={true}>
                    {book.volumeInfo.description}
                </Typography.Paragraph>
            </Card>
    )
}